import { React, useState, useEffect } from "react";
import HomeSlider from '../Home/slider/Index';
import CategorySection from "../../components/catslider/Index";
import Reels from "../../components/reels/Index";
import Product from "../../components/product/Index";
import FadeLoader from "../../components/loader/Index";
import './Index.css';
// import DailyBanner from "../../assets/images/banner/daily-banner.png";
import Midbanner from "../../assets/images/banner/banner-1.jpeg";
import DailyBanner from "../../assets/images/slider-small.jpeg"
import { Link } from "react-router-dom";

import useEmblaCarousel from "embla-carousel-react";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://divinityimpex.com/api/products");
                const data = await res.json();

                const activeProducts = data.filter(
                    p =>
                        p.status?.toLowerCase() === "active" &&
                        p.category?.toLowerCase() !== "combo"
                );

                setProducts(activeProducts);
            } catch (error) {
                console.error("API ERROR:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <HomeSlider />
            <CategorySection />

            {/* ================= POPULAR PRODUCTS ==a=============== */}
            <section className="home-section fade-in">
                <div className="container-fluid">

                    {/* HEADER - EXTREME LEFT */}
                    <div className="section-header">
                        <h2 className="section-title">Popular Products</h2>
                        <Link to="/products" className="view-all">View All</Link>
                    </div>

                    {/* CONTENT WITH PADDING */}
                    <div className="section-inner">
                        <div className="row product-grid">
                            {loading ? <FadeLoader /> :
                                products
                                    .filter(item => item.product_cat_tag === "popular")
                                    .slice(0, 8)
                                    .map((data, index) => (
                                        <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                                            <Product data={data} />
                                        </div>
                                    ))
                            }
                        </div>
                    </div>

                </div>
            </section>

            <div className="container-fluid mid-banner-container">
                <div className="mid-banner">
                    <picture>
                        <source srcset="https://divinityimpex.com/images/banners/mid-banner-mobile.png" media="(max-width: 992px)" />
                        <img src="https://divinityimpex.com/images/banners/mid-banner.png" alt="slider-2" className="w-100 sliderimage-2" />
                    </picture>
                </div>
            </div>


            {/* /* ================= DAILY BEST SALES ================= */}

            <section className="home-section light-bg fade-in">

                <div className="container-fluid">

                    <div className="section-header">
                        <h2 className="section-title">Daily Best Sales</h2>
                    </div>

                    <div className="section-inner">

                        <div className="row align-items-stretch mt-4">

                            {/* LEFT BANNER */}

                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="daily-banner">
                                    <img
                                        src={DailyBanner}
                                        alt="Daily Sale"
                                    />
                                </div>
                            </div>

                            {/* PRODUCT SLIDER */}

                            <div className="col-lg-8 col-12">

                                {loading ? (
                                    <FadeLoader />
                                ) : (

                                    <div className="embla">

                                        <div className="embla__viewport" ref={emblaRef}>

                                            <div className="embla__container">

                                                {products.slice(0, 12).map((data, index) => (
                                                    <div className="embla__slide" key={index}>
                                                        <Product data={data} />
                                                    </div>
                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Reels />
        </>
    )
}

export default Home;
