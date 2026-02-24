import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../../components/addcartbutton/Index";

const Product = ({ data }) => {

  if (!data) return null;

  return (
    <div className="productthumb">

      {/* Product Tag Badge */}
      {data.tag && (
        <span className={`badge text-capitalize ${data.tag}`}>
          {data.tag}
        </span>
      )}

      {/* FREE SHAKER Ribbon */}
      
        <span className="freeShakerRibbon">
          🎁 FREE SHAKER
        </span>

      {/* Product Image */}
      <Link to={`/product/details/${data.product_id}`} className="imagewrapper">
        <img src={data.image} alt={data.name} loading="lazy"/>
      </Link>

      {/* Info */}
      <div className="info">
        <span className="catname">{data.category}</span>
        <span className="productname">{data.name}</span>

        <div className="priceRow">
          <span className="price">{data.price} AED</span>
          {data.old_price && (
            <span className="oldprice">{data.old_price} AED</span>
          )}
        </div>

        <AddToCartButton product={data} />
      </div>

    </div>
  );
};

export default Product;
