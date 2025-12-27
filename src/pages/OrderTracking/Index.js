import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Index.css";

const OrderTracking = () => {
  const { order_number } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://divinityimpex.com/api/get-single-order?order_number=${order_number}`)
      .then(res => res.json())
      .then(res => res.success && setData(res));
  }, [order_number]);

  if (!data) return null;

  const { order, items, address } = data;

  return (
    <div className="track-wrapper">
      <h2>Order #{order.order_number}</h2>

      <div className="track-card">
        <h3>Delivery Address</h3>
        <p>{address.full_name}</p>
        <p>{address.address_line1}</p>
        <p>{address.city} - {address.postal_code}</p>
        <p>{address.phone}</p>
      </div>

      <div className="track-card">
        <h3>Items</h3>
        {items.map((i, idx) => (
          <div className="item-row" key={idx}>
            <span>{i.product_name} × {i.quantity}</span>
            <span>{i.line_total} AED</span>
          </div>
        ))}
      </div>

      <div className="track-card total">
        <strong>Total Paid</strong>
        <strong>{order.total_amount} AED</strong>
      </div>
    </div>
  );
};

export default OrderTracking;
