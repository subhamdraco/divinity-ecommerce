import { React, useState, useEffect } from "react";
import HomeSlider from '../Home/slider/Index';
import CatSlider from "../../components/catslider/Index";
import Banners from "../../components/banners/Index";
import Product from "../../components/product/Index";
import FadeLoader from "../../components/loader/Index";
import './Index.css';
// import DailyBanner from "../../assets/images/banner/daily-banner.png";
import DailyBanner from "../../assets/images/slider-small.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Link } from "react-router-dom";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://divinityimpex.com/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("API Error:", err);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <HomeSlider />
            <CatSlider data={products} />
            <Banners />

            {/* ================= POPULAR PRODUCTS ================= */}
            <section className="home-section">
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


            {/* ================= DAILY BEST SALES ================= */}
            <section className="home-section light-bg">
                <div className="container-fluid">

                    {/* HEADER - EXTREME LEFT */}
                    <div className="section-header">
                        <h2 className="section-title">Daily Best Sales</h2>

                        <div className="daily-nav">
                            <div className="daily-prev">
                                <KeyboardArrowLeftOutlinedIcon />
                            </div>
                            <div className="daily-next">
                                <KeyboardArrowRightOutlinedIcon />
                            </div>
                        </div>
                    </div>

                    {/* CONTENT WITH PADDING */}
                    <div className="section-inner">
                        <div className="row align-items-stretch mt-4">

                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="daily-banner">
                                    <img src={DailyBanner} alt="Daily Sale" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-12">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    navigation={{
                                        nextEl: ".daily-next",
                                        prevEl: ".daily-prev",
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={600}
                                    loop={true}
                                    spaceBetween={15}
                                    breakpoints={{
                                        1400: { slidesPerView: 4 },
                                        1200: { slidesPerView: 3 },
                                        992: { slidesPerView: 3 },
                                        768: { slidesPerView: 2 },
                                        480: { slidesPerView: 2 },
                                        320: { slidesPerView: 1 },
                                    }}
                                >
                                    {loading ? <FadeLoader /> :
                                        products.slice(0, 12).map((data, index) => (
                                            <SwiperSlide key={index}>
                                                <Product data={data} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home;
