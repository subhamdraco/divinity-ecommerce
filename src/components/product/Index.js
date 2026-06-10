import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../../components/addcartbutton/Index";

const Product = ({ data }) => {

  if (!data) return null;

  return (
    <div className="productthumb product-card">

      {data.tag && (
        <span className={`badge product-card__badge text-capitalize ${data.tag}`}>
          {data.tag}
        </span>
      )}

      <span className="product-card__perk" title="Complimentary shaker with qualifying purchase">
        Free shaker
      </span>

      <Link
        to={`/product/details/${data.product_id}`}
        className="imagewrapper product-card__media"
      >
        <img
          src={data.image}
          alt={data.name}
          loading="lazy"
          onLoad={(e) => {
            e.target.classList.add("loaded");
            e.target.parentElement.classList.add("loaded");
          }}
        />
      </Link>

      <div className="info product-card__body">
        <span className="catname product-card__category">{data.category}</span>
        <span className="productname product-card__title">{data.name}</span>

        <div className="priceRow product-card__prices">
          <span className="price product-card__price">{data.price} AED</span>
          {data.old_price && (
            <span className="oldprice product-card__oldprice">{data.old_price} AED</span>
          )}
        </div>

        <div className="product-card__cta">
          <AddToCartButton product={data} />
        </div>
      </div>
    </div>
  );
};

export default Product;
