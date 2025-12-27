import React, { useState, useEffect } from 'react';
import './Index.css';
import { Link, useParams } from 'react-router-dom';
import FadeLoader from "../../components/loader/Index";
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'inner-image-zoom/lib/styles.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Slider from "react-slick";
import "swiper/css";
import { useAuth } from '../../components/context/AuthContext';
import AddToCartButton from "../../components/addcartbutton/Index";
import { useNavigate } from "react-router-dom";
import AddtoWishlist from '../../components/addtowishlist/Index';



const Details = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { user } = useAuth();

    const navigate = useNavigate();

     const handleBuyNow = () => {
        navigate("/checkout", {
        state: {
            product: product
        }
        });
    };


    useEffect(() => {
        fetch(`https://divinityimpex.com/api/product?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setproductImage(data.data.thumbnail_url)
                setLoading(false)
            })
            .catch((err) => {
                console.error("API Error:", err);
                setLoading(false);
            });
    }, [id]);

    var settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const [productImage, setproductImage] = useState(null)
    const [productKey, setproductKey] = useState(0)
    const [quantity, setquantity] = useState(1)

    const onThumbnailClick = (img, key) => {
        setproductImage(img)
        setproductKey(key)
    }

    return (
        <>
            <section className='detailspage'>
                <div className='breadcrumbwrapper2 mb-2'>
                    <div className='container-fluid' style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb2">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/">Products</Link></li>
                            <li className="breadcrumb-item breadactive" aria-current="page">Details</li>
                        </ol>
                    </div>
                </div>
                <div className='container mw-85'>
                    {loading ? <FadeLoader /> :
                        <div className="row">
                            <div className="col-md-4">
                                <div className='productzoom'>
                                    <InnerImageZoom
                                        src={productImage || product?.data?.thumbnail_url}
                                        zoomSrc={productImage || product?.data?.thumbnail_url}
                                        zoomType="hover"
                                        zoomScale={2}
                                        className="img-product"
                                    />
                                </div>
                                <div className='zoomslider'>
                                    <Slider {...settings}>
                                        {product.data.images_json.map((img, index) => (
                                            <div className={`slider-item ${productKey === index ? "thumbactive" : ""}`} key={productKey} onMouseEnter={() => onThumbnailClick(img, index)} onClick={() => setproductKey(index)}>
                                                <img src={img} alt={"image"} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>


                            </div>
                            <div className="col-md-8 productinfo">
                                <h1 className='quicksand text-capitalize'>{product.data.name}, {product.data.brand}</h1>
                                <div className='d-flex align-items-center'>
                                    <Rating name="half-rating" defaultValue={3.5} precision={0.5} readOnly />
                                    <span> (32 reviews) </span>
                                </div>

                                <div className='pricesection d-flex align-items-center mb-3'>
                                    <span className='text-g pricelarge'>{product.data.price} AED</span>
                                    <div className='ms-2 d-flex flex-column'>
                                        <span className='text-orange'>{product.data.discount}% Off</span>
                                        <span className='oldprice'>{product.data.old_price} AED</span>
                                    </div>
                                </div>


                                <p>{product.data.description}</p>

                                <h5>{product.data.category === "Fish Oil"? "No of Capsules: " : "Net Weight(in kgs): "}<span>{product.data.net_wt}</span></h5>

                                <div className='addcartsection pt-4 pb-4 d-flex align-items-center'>
                                    <span className='decrement' onClick={() => { if (quantity > 1) { setquantity(quantity - 1) } }}>-</span>
                                    <div className='countsection'>
                                        <input type='number' defaultValue={1} value={quantity}></input>
                                    </div>
                                    <span className='increment' onClick={() => { if (quantity < product.data.quantity) { setquantity(quantity + 1) } }}>+</span>

                                    <Button className="ms-4" onClick={handleBuyNow}><FlashOnIcon />Buy Now</Button>
                                     <AddtoWishlist user_id={user.id} product_id={id}/>
                                     <AddToCartButton product={product.data} qty={quantity}/>
                                    {/* <div className='wishlisttab ms-3' onClick={() => { setwishadded(!wishadded) }}><FavoriteIcon className={`wishicon ${wishadded ? "bg-red" : ""}`} /></div> */}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default Details;

// required columns- old price , tagline , 
