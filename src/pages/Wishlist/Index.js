import { useEffect, useState } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";

const API = "https://divinityimpex.com/api";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  const { user } = useAuth();

  const USER_ID = user.id;

  const loadWishlist = async () => {
    const res = await fetch(`${API}/get-wishlist.php?user_id=${USER_ID}`);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  const removeItem = async (product_id) => {
    await fetch(`${API}/remove-from-wishlist.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: USER_ID, product_id }),
    });
    loadWishlist();
  };

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {items.length === 0 && <p>No items in wishlist</p>}

      <div className="wishlist-grid">
        {items.map(p => (
          <div className="wishlist-card" key={p.product_id}>
            <img src={p.thumbnail_url} alt={p.name} />

            <h4>{p.name}</h4>
            <span>{p.price} AED</span>

            <div className="actions">
              <Link to={`/product/details/${p.product_id}`}>
                View
              </Link>

              <button onClick={() => removeItem(p.product_id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
