import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FadeLoader from "../../components/loader/Index";

const Combo = () => {
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const res = await fetch("https://divinityimpex.com/api/products");
        const data = await res.json();

        const comboProducts = data.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === "combo" &&
            item.status === "active" &&
            item.image
        );

        setCombos(comboProducts);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCombos();
  }, []);

  return (
    <section className="combo-page">
      <div className="container">
        <h2 className="text-center mb-4 mt-4">🔥 Combo Offers</h2>

        {loading ? (
          <FadeLoader />
        ) : (
          <div className="row">
            {combos.map((item) => (
              <div className="col-md-4 mb-4" key={item.product_id}>
                <div className="card h-100 shadow-sm">

                  <Link to={`/product/details/${item.product_id}`}>
                    <img
                      src={item.thumbnail_url}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>

                    <p className="small text-muted">
                      {item.description.substring(0, 100)}...
                    </p>

                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold">
                        {item.price} AED
                      </span>

                      <span
                        className="text-muted"
                        style={{ textDecoration: "line-through" }}
                      >
                        {item.old_price} AED
                      </span>

                      <span className="text-danger">
                        {item.discount}% OFF
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Combo;