import { useEffect, useState } from "react";
import { useAuth } from "../../components/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";

const MyOrders = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
      return;
    }

    fetch(`https://divinityimpex.com/api/get-orders?user_id=${user.id}`)
      .then(res => res.json())
      .then(setOrders);
  }, [user, navigate]);

  return (
    <div className="orders-wrapper">
      <h2 className="page-title">My Orders</h2>

      {orders.length === 0 ? (
        <p className="empty-text">No orders found</p>
      ) : (
        orders.map(order => (
          <div className="order-card" key={order.order_number}>
            <div>
              <h4>Order #{order.order_number}</h4>
              <span className="date">
                {new Date(order.created_at).toDateString()}
              </span>
            </div>

            <div className="order-meta">
              <span className="status">{order.status}</span>
              <span className="price">{order.total_amount} AED</span>
              <Link
                to={`/order-tracking/${order.order_number}`}
                className="track-btn"
              >
                Track Order
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
