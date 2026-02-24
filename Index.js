import React from "react";
import './Index.css';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import AddToCartButton from "../../components/addcartbutton/Index";


const Product = (props) => {

    return (
        <div className="productthumb">
            {

                props.data !== null && props.data !== undefined ?
                    (<span className={`badge text-capitalize ${props.data?.tag}`}>{props.data?.tag}</span>)
                    : (
                        <span className="badge text-capitalize  ">default</span>)
            }
            <span className="freeShakerRibbon">
                          🎁 FREE SHAKER
            </span>
            <div className="thumbcontentpopular position-relative d-flex flex-column align-items-center">
                <div className={props.data?.brand === "RESHU" ? "imagewrapper2" : "imagewrapper"}>
                    <Link to={`/product/details/${props.data.product_id}`}>
                        <img src={props.data?.image}
                            alt="product-image" />
                    </Link>
                </div>
                <div className="info">
                    <div className="catnamewrpper">
                        <span className="d-block catname quicksand">{props.data?.category}</span>
                        <span className="d-block catname2 quicksand">{props.data?.name}</span>
                    </div>
                    <div className="descriptionwrapper">
                        <h6 className="title">
                            {props.data?.description.length > 20 ? props.data?.description.slice(0, 120) + "..." : props.data?.description}
                        </h6>
                    </div>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />

                    <span className="brandname d-block">By <a className="text-g">{props.data?.brand}</a></span>

                    <div className="d-flex align-items-center mt-2 pricesection">
                        <div className="d-flex align-items-center">
                            <span className="price">
                                {props.data?.price} AED
                            </span>
                            <span className="oldprice">
                                {props.data?.old_price} AED
                            </span>
                        </div>
                        <AddToCartButton product={props.data} className="ms-auto" />
                        {/* <Button className="ms-auto"><ShoppingCartOutlinedIcon /><Link >Add</Link></Button> */}
                    </div>
                </div>

            </div >
        </div >
    )
}

export default Product;