import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";
import { useAuth } from "../../components/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import "./Index.css";

const Checkout = (props) => {

  const { state } = useLocation();
  const hasProductRef = useRef(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { cart, updateQty, removeFromCart, subtotal, clearCart, addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const product = state?.product;
  const API = "https://divinityimpex.com/api"


  const createQuiqupOrder = async (order, cart) => {

    const payload = {
      order_id: order.order_number,

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
        quantity: item.quantity
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
    console.log("Quiqup Order Response:", data);

    return data;
  };

  /* ---------- COUNTRY CODES ---------- */
  const [countryCodes, setCountryCodes] = useState([]);
  const [loadingCodes, setLoadingCodes] = useState(true);

  /* ---------- FORM STATE ---------- */
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    countryCode: "+1",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product && !hasProductRef.current) {
      addToCart(product.data);
      hasProductRef.current = true;
    }
  }, [product]);

  /* ---------- LOAD COUNTRY PHONE CODES ---------- */
  useEffect(() => {
    const cached = localStorage.getItem("countryCodes");
    if (cached) {
      setCountryCodes(JSON.parse(cached));
      setLoadingCodes(false);
      return;
    }

    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flags")
      .then(res => res.json())
      .then(data => {
        const formatted = data
          .map(c => {
            if (!c.idd?.root || !c.idd?.suffixes?.length) return null;
            return {
              name: c.name.common,
              code: `${c.idd.root}${c.idd.suffixes[0]}`,
              flag: c.flags?.png || ""
            };
          })
          .filter(Boolean)
          .sort((a, b) => a.name.localeCompare(b.name));

        localStorage.setItem("countryCodes", JSON.stringify(formatted));
        setCountryCodes(formatted);
        setLoadingCodes(false);
      })
      .catch(() => setLoadingCodes(false));
  }, []);

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.address.trim()) err.address = "Address is required";
    if (!form.city.trim()) err.city = "City is required";
    if (!form.pincode.trim()) err.pincode = "Pincode is required";
    if (form.phone.length < 6 || form.phone.length > 15) err.phone = "Enter valid phone number";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ---------- CHECKOUT ---------- */
  const handleCheckout = async () => {
    if (!user || !user.id) {
      navigate("/login");
      return;
    }

    const valid = validate();
    setIsFormValid(valid);

    try {
      const response = await fetch(`${API}/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,
          cart: cart,
          address: { ...form, phone: form.countryCode + form.phone }
        })
      });

      const data = await response.json();

      if (data.success && data.order_number) {
         // clearCart(); // clear frontend cart
        // navigate(`/order-success/${data.order_number}`);
        try {
          const res = await fetch(`${API}/create-payment-intent.php`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: Math.round(subtotal * 100),
              order_number: data.order_number
            }),
          });

          const pay_data = await res.json();

          if (pay_data.redirect_url) {
            // ✅ Navigate to Ziina checkout
            window.location.href = pay_data.redirect_url;
          } else {
            alert("Payment URL not received");
          }

          // Later you will redirect using data.redirect_url or payment_url
        } catch (err) {
          console.error("Checkout error:", err);
        }
      } else {
        alert(data.message || "Failed to create order");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while creating order");
    }
  // createQuiqupOrder(orderitem, cart)

  };

  /* ---------- EMPTY CART ---------- */
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add premium products and experience quality.</p>
        <Link to="/listing" className="btn-primary-gold">
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      {/* LEFT */}
      <div className="cart-left-checkout">
        <h2 className="cart-title">Shopping Cart</h2>

        {cart.map(item => (
          <div key={item.product_id} className="cart-item">
            <img src={item.thumbnail_url} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <span className="price">{item.price} AED</span>

              <div className="qty-control">
                <button onClick={() => item.quantity > 1 && updateQty(item.product_id, item.quantity - 1)}>−</button>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e =>
                    updateQty(item.product_id, Math.max(1, Number(e.target.value)))
                  }
                />
                <button onClick={() => updateQty(item.product_id, item.quantity + 1)}>+</button>
              </div>
            </div>

            <button className="remove-btn" onClick={() => removeFromCart(item.product_id)}>✕</button>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="cart-right-checkout">
        <div className="summary-card">
          <h3>Delivery Address</h3>

          <div className="form-group">
            <input
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <textarea
              placeholder="Full Address"
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>

          <div className="row form-row">
            <div className="form-group">
              <input
                placeholder="City"
                value={form.city}
                onChange={e => setForm({ ...form, city: e.target.value })}
              />
              {errors.city && <span className="error">{errors.city}</span>}
            </div>

            <div className="form-group">
              <input
                placeholder="Pincode"
                value={form.pincode}
                onChange={e => setForm({ ...form, pincode: e.target.value })}
              />
              {errors.pincode && <span className="error">{errors.pincode}</span>}
            </div>
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <div className="phone-group">
              <select
                value={form.countryCode}
                onChange={e => setForm({ ...form, countryCode: e.target.value })}
                disabled={loadingCodes}
              >
                {countryCodes.map(c => (
                  <option key={c.name} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>

              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={e =>
                  setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 15) })
                }
              />
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)} AED</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>{subtotal.toFixed(2)} AED</span>
          </div>

          {/* FALLBACK */}
          {user && setIsFormValid && (
            <button className="checkout-btn" onClick={handleCheckout}>
              Confirm and Pay
            </button>
          )}

          {!user && <p className="login-hint">Login required to place order</p>}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
