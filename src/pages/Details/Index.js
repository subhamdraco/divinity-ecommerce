import React, { useState, useEffect } from 'react';
import './Index.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import FadeLoader from "../../components/loader/Index";
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'inner-image-zoom/lib/styles.min.css';
import Slider from "react-slick";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useAuth } from '../../components/context/AuthContext';
import AddToCartButton from "../../components/addcartbutton/Index";

const Details = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productImage, setproductImage] = useState(null);
    const [productKey, setproductKey] = useState(0);
    const [quantity, setquantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://divinityimpex.com/api/product?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data.data);
                setproductImage(data.data.thumbnail_url);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setLoading(false);
            });
    }, [id]);

    const handleBuyNow = () => {
        navigate("/checkout", { state: { product: product } });
    };

    const onThumbnailClick = (img, key) => {
        setproductImage(img);
        setproductKey(key);
    };

    if (loading) return <FadeLoader />;

    const isCombo = product?.category?.toLowerCase() === "combo";

    const discount =
        product.old_price && product.old_price > product.price
            ? Math.round(((product.old_price - product.price) / product.old_price) * 100)
            : 0;

    var settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const formatDescription = (html) => {
        if (!html) return "";

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const headings = doc.querySelectorAll("h3");

        headings.forEach((heading) => {
            if (heading.innerText.toLowerCase().includes("ingredient")) {
                const nextElement = heading.nextElementSibling;

                if (nextElement && nextElement.tagName === "P") {
                    const items = nextElement.innerText.split(",");

                    const ul = document.createElement("ul");

                    items.forEach((item) => {
                        const li = document.createElement("li");
                        li.innerHTML = `
                                <span class="ingredient-icon">✓</span>
                                ${item.trim()}
                            `;
                        ul.appendChild(li);
                    });

                    nextElement.replaceWith(ul);
                }
            }
        });

        return doc.body.innerHTML;
    };

    return (
        <section className='detailspage modern-details'>

            <div className='breadcrumbwrapper2 mb-2 ms-2'>
                <div className='container-fluid'>
                    <ol className="breadcrumb breadcrumb2">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/">Products</Link></li>
                        <li className="breadcrumb-item breadactive">Details</li>
                    </ol>
                </div>
            </div>

            <div className='container mw-85'>
                <div className="row">

                    {/* LEFT IMAGE SECTION */}
                    <div className={isCombo ? "col-md-6" : "col-md-4"}>

                        <div className={`productzoom ${isCombo ? "combo-zoom" : ""}`}>

                            {discount > 0 && (
                                <div className="modern-discount">-{discount}%</div>
                            )}

                            {isCombo ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="combo-img"
                                />
                            ) : (
                                <InnerImageZoom
                                    src={productImage}
                                    zoomSrc={productImage}
                                    zoomScale={1}
                                />
                            )}
                        </div>

                        <div className='zoomslider'>
                            <Slider {...settings}>
                                {product.images_json?.map((img, index) => (
                                    <div
                                        className={`slider-item ${productKey === index ? "thumbactive" : ""}`}
                                        key={index}
                                        onMouseEnter={() => onThumbnailClick(img, index)}
                                    >
                                        <img src={img} alt="thumb" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    {/* RIGHT INFO SECTION */}
                    <div className={isCombo ? "col-md-6 productinfo" : "col-md-8 productinfo"}>

                        <h1 className="product-title">{product.name}</h1>

                        {product?.description && (
                            <p className="short-desc">
                                {product.description}
                            </p>
                        )}


                        <div className="meta-badges">
                            <span className="brand-badge">{product.brand}</span>
                            <span className="category-badge">{product.category}</span>
                            {product.quantity > 0 ?
                                <span className="stock in-stock">In Stock</span>
                                :
                                <span className="stock out-stock">Out of Stock</span>
                            }
                        </div>

                        <div className='d-flex align-items-center mb-3'>
                            <Rating defaultValue={4.5} precision={0.5} readOnly />
                            <span className='ms-2'> (32 reviews) </span>
                        </div>

                        <div className='modern-price-section'>
                            <span className='modern-price'>{product.price} AED</span>
                            {product.old_price && (
                                <span className='modern-oldprice'>
                                    {product.old_price} AED
                                </span>
                            )}
                        </div>

                        <div className="freeShakerDetail">
                            🎁 FREE SHAKER INCLUDED WITH THIS PRODUCT
                        </div>

                        <h6 className="mt-3">
                            {product.category === "Fish Oil" ?
                                "No of Capsules: "
                                :
                                "Net Weight(in kgs): "
                            }
                            <span>{product.net_wt}</span>
                        </h6>

                        {/* CART SECTION */}
                        <div className="addcartsection modern-cart">

                            {/* Quantity */}
                            <div className="quantity-box">
                                <button
                                    type="button"
                                    className="qty-btn"
                                    onClick={() => quantity > 1 && setquantity(quantity - 1)}
                                >
                                    −
                                </button>

                                <input
                                    type="number"
                                    value={quantity}
                                    readOnly
                                />

                                <button
                                    type="button"
                                    className="qty-btn"
                                    onClick={() =>
                                        quantity < product.quantity && setquantity(quantity + 1)
                                    }
                                >
                                    +
                                </button>
                            </div>

                            {/* Buttons */}
                            <Button className="buy-btn" onClick={handleBuyNow}>
                                <FlashOnIcon /> Buy Now
                            </Button>

                            <AddToCartButton product={product} qty={quantity} />

                        </div>
                    </div>
                </div>

                {/* MODERN TABS SECTION */}
                <div className="modern-tabs">

                    <div className="tab-buttons">
                        <button
                            className={activeTab === "description" ? "active" : ""}
                            onClick={() => setActiveTab("description")}
                        >
                            Description
                        </button>

                        <button
                            className={activeTab === "additional" ? "active" : ""}
                            onClick={() => setActiveTab("additional")}
                        >
                            Ingredients
                        </button>

                        <button
                            className={activeTab === "shipping" ? "active" : ""}
                            onClick={() => setActiveTab("shipping")}
                        >
                            Shipping
                        </button>
                    </div>

                    <div className="tab-content-modern">

                        {activeTab === "description" &&
                            <div className="full-description" dangerouslySetInnerHTML={{ __html: product.full_description }} />
                        }

                        {activeTab === "additional" &&
                            <div className="description-content" dangerouslySetInnerHTML={{ __html: formatDescription(product.additional_info) }} />
                        }

                        {activeTab === "shipping" &&
                            <div dangerouslySetInnerHTML={{ __html: product.shipping_info }} />
                        }

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Details;