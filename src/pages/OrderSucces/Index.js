import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";
import { useAuth } from "../../components/context/AuthContext";
import FadeLoader from "../../components/loader/Index";

const API = "https://divinityimpex.com/api";

const OrderSuccess = () => {
    const { order_number } = useParams();
    const [status, setStatus] = useState(null);
    const [order, setOrder] = useState(null);
    const { clearCart, fetchCart } = useCart();
    const user = JSON.parse(localStorage.getItem("user"));
    const [loading, setLoading] = useState(true);
    const hasProcessed = useRef(false);

    const updateStock = async (orderData) => {
        const payload = {
            order_id : orderData.id
        }

        const res = await fetch(
            "https://divinityimpex.com/api/update-stock.php",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }
        );

        const data = await res.json();
        return data
    }

    const sendEmail = async (Order, orderData) => {

        const Message = `
            <p>
            Quiqup Order Id <strong>${Order.order.id}</strong>.
            </p>
            <p>
            Internal Order ID - <strong>${orderData.order_number}</strong>
            </p>

            <p>
            Go to this link for order label download –
            <br>
            <a href="https://business-ae.quiqup.com/order/${Order.order.id}" target="_blank">
                https://business-ae.quiqup.com/order/${Order.order.id}
            </a>
            </p>
            `;

        const payload = {
            to: "exports@divinityimpex.com",
            to2: "accounts@divinityimpex.com",
            subject: " Divinity Impex New Order Received",
            message: Message
        }

        const res = await fetch(
            "https://divinityimpex.com/api/send-email.php",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }
        );

        const data = await res.json();

        return data
    }

    const createQuiqupOrder = async (order, cart) => {

        const payload = {
            order_id: order.order_number,
            kind: order.delivery,
            pickup: {
                name: "Navire logistics services LLC warehouse",
                phone: "+971525914261",
                address1: "Ras al khor industrial area 2",
                address2: "23rd street Ware house no 5",
                city: "Dubai",
                notes: "Pickup from loading bay"
            },

            delivery: {
                name: order.shipping_name,
                phone: order.shipping_phone,
                address1: order.shipping_address1,
                address2: order.shipping_address2,
                city: order.shipping_city
            },

            items: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                weight: Number(item.net_wt)
            }))
        };

        const res = await fetch(
            "https://divinityimpex.com/api/quiqup-create-order.php",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            }
        );

        const data = await res.json();

        if (data.error) {
            return data.error
        }
        return data;
    };

    useEffect(() => {

        if (!order_number) return;

        if (hasProcessed.current) return;
        hasProcessed.current = true;

        const processOrder = async () => {
            try {
                setLoading(true);

                const cartData = await fetchCart();
                console.log(cartData);

                /* 1️⃣ UPDATE PAYMENT */
                const updateRes = await fetch(`${API}/update-payment-status.php`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        order_id: order_number,
                        payment_status: "paid"
                    })
                });

                const updateData = await updateRes.json();
                if (!updateData.success) throw new Error("Payment update failed");

                /* 2️⃣ FETCH ORDER */
                const orderRes = await fetch(
                    `${API}/get-order-status.php?order_id=${order_number}`
                );
                const orderData = await orderRes.json();
                if (!orderData.success) throw new Error("Order fetch failed");

                setOrder(orderData.data);

                /* 3️⃣ ADDRESS */
                const addressRes = await fetch(
                    `${API}/get-order-address.php?order_id=${orderData.data.id}`
                );
                const addressData = await addressRes.json();

                /* 4️⃣ QUIQUP */
                const orderitem = {
                    order_number,
                    delivery: orderData.data.delivery_type,
                    shipping_name: addressData.data[0].full_name,
                    shipping_phone: addressData.data[0].phone,
                    shipping_address1: addressData.data[0].address_line1,
                    shipping_address2: addressData.data[0].address_line2,
                    shipping_city: addressData.data[0].city
                };

                const quiqupData = await createQuiqupOrder(orderitem, cartData);
                if (!quiqupData?.order) throw new Error("Quiqup failed");


                /* 5️⃣ STORE QUIQUP */
                await fetch(`${API}/store-quiqup-order.php`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        tracking_url: quiqupData.order.tracking_url,
                        user_id: user.id,
                        order_id: order_number,
                        quiqup_order_id: quiqupData.order.id,
                        status: "success",
                        response: quiqupData.order
                    })
                });

                await sendEmail(quiqupData, orderData.data);

                await updateStock(orderData.data);
                
                clearCart();
                setStatus("success");
            } catch (err) {
                console.error(err);
                setStatus("failed");
            } finally {
                setLoading(false);
            }
        };

        processOrder();
    }, [order_number]);

    /* =========================
       UI STATES
    ========================= */


    if (loading) {
        return (
            <div className="container text-center py-5">
                <FadeLoader />
                <p className="mt-3">Processing your payment...</p>
            </div>
        );
    }

    if (status === "failed") {
        return <div className="container text-center py-5">
            <h2>❌ Order Failed</h2>
            <p>Please contact support</p>
        </div>;
    }

    return (
        <div className="container text-center py-5">
            <h1>🎉 Order Placed Successfully</h1>
            <p>Your order number is</p>
            <h3>{order?.order_number}</h3>
            <p>Status: <strong>{order?.status}</strong></p>
        </div>
    );
};

export default OrderSuccess;
