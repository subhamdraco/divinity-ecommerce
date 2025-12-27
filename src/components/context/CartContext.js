import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);

    /* ---------------- FETCH CART ---------------- */
    const fetchCart = async () => {
        if (!user?.id) return;

        try {
            const res = await fetch(
                `https://divinityimpex.com/api/get-cart?user_id=${user.id}`
            );
            const data = await res.json();

            if (data.success) {
                setCart(data.cart);
            }
        } catch (err) {
            console.error("Fetch cart error:", err);
        }
    };

    /* ---------------- LOAD CART ---------------- */
    useEffect(() => {
        if (user?.id) {
            fetchCart();
        } else {
            const stored = localStorage.getItem("cart");
            setCart(stored ? JSON.parse(stored) : []);
        }
    }, [user]);

    /* ---------------- GUEST CART STORAGE ---------------- */
    useEffect(() => {
        if (!user?.id) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, user]);

    /* ---------------- ADD TO CART ---------------- */
    const addToCart = async (product, qty = 1) => {
        if (!user?.id) return alert("Please login first");

        try {
            await fetch("https://divinityimpex.com/api/add-to-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    product_id: product.product_id,
                    quantity: qty
                })
            });

            fetchCart();
        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- UPDATE QTY ---------------- */
    const updateQty = async (product_id, qty) => {
        if (!user?.id) {
            setCart(prev =>
                prev.map(p =>
                    p.product_id === product_id ? { ...p, quantity: qty } : p
                )
            );
            return;
        }

        try {
            await fetch("https://divinityimpex.com/api/update-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    product_id,
                    quantity: qty
                })
            });

            fetchCart();
        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- REMOVE ITEM ---------------- */
    const removeFromCart = async (product_id) => {
        if (!user?.id) {
            setCart(prev => prev.filter(p => p.product_id !== product_id));
            return;
        }

        try {
            await fetch("https://divinityimpex.com/api/remove-from-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    product_id
                })
            });

            fetchCart();
        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- CLEAR CART ---------------- */
    const clearCart = async () => {
        if (!user?.id) {
            setCart([]);
            localStorage.removeItem("cart");
            return;
        }

        try {
            await fetch("https://divinityimpex.com/api/clear-cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_id: user.id })
            });

            setCart([]);
        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- SUBTOTAL ---------------- */
    const subtotal = cart.reduce(
        (sum, p) => sum + Number(p.price) * p.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQty,
                removeFromCart,
                clearCart,
                subtotal
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
