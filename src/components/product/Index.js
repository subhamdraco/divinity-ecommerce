import React from "react";
import './Index.css';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';
import feature_img from "../../assets/images/featured_products/featured-1.png";


const Product = () => {
    return (
        <div className="productthumb">
            <span className="badge">Hot</span>
            <Link>
                <div className="imagewrapper position-relative">
                    <img src={feature_img} className="w-100"
                        alt="product-image" />
                    <div className="overlay">
                        <ul className="list list-inline mb-0">
                            <li className="list-inline-item">
                                <Tooltip title="Add to Wishlist" placement="top" arrow> 
                                < a className="cursor"><FavoriteBorderOutlinedIcon/></a>
                                </Tooltip>
                            </li>
                            <li className="list-inline-item">
                                <Tooltip title="Add" placement="top" arrow> 
                                < a className="cursor"><RemoveRedEyeOutlinedIcon/></a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>

            <div className="info">
                <span className="d-block catname">Reshu</span>
                <h6 className="title"><Link>Minim excepteur eiusmod occaecat consequat magna</Link>
                </h6>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />

                <span className="brandname d-block">By <a className="text-g">Titan</a></span>

                <div className="d-flex align-items-center mt-2">
                    <div className="d-flex align-items-center">
                        <span className="price">
                            $12.87
                        </span>
                        <span className="oldprice">
                            $18.89
                        </span>
                    </div>
                    <Button className="ms-auto"><ShoppingCartOutlinedIcon />Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Product;