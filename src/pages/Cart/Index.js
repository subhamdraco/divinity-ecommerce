import { useCart } from "../../components/context/CartContext";
import { useAuth } from "../../components/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";

const Cart = () => {
  const { cart, updateQty, removeFromCart, subtotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const MAX_QTY = 10;
  const MIN_QTY = 1;
  /* ---------------- CHECKOUT ---------------- */
  const handleCheckout = () => {
    if (!user || !user.id) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  /* ---------------- EMPTY CART ---------------- */
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
      <div className="cart-left">
        <h2 className="cart-title">Shopping Cart</h2>

        {cart.map((item) => (
          <div key={item.product_id} className="cart-item">
            <div className="cart-img">
              <img src={item.thumbnail_url} alt={item.name} />
            </div>

            <div className="cart-info">
              <h4>{item.name}</h4>
              <span className="price">{item.price}AED</span>

              <div className="qty-control">
                <button
                  onClick={() => {
                    if (item.quantity > MIN_QTY) {
                      updateQty(item.product_id, item.quantity - 1);
                    }
                  }}
                >
                  −
                </button>

                <input
                  type="number"
                  min={MIN_QTY}
                  max={MAX_QTY}
                  value={item.quantity}
                  onChange={(e) => {
                    let qty = parseInt(e.target.value, 10);

                    if (isNaN(qty)) qty = MIN_QTY;
                    if (qty < MIN_QTY) qty = MIN_QTY;
                    if (qty > MAX_QTY) qty = MAX_QTY;

                    updateQty(item.product_id, qty);
                  }}
                />

                <button
                  onClick={() => {
                    if (item.quantity < MAX_QTY) {
                      updateQty(item.product_id, item.quantity + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-actions">
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.product_id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="cart-right">
        <div className="summary-card">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)}AED</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>{subtotal.toFixed(2)}AED</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>

          {!user && (
            <p className="login-hint">
              Login required to place order
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
