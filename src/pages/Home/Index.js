import { React, useState, useEffect } from "react";
import HomeSlider from '../Home/slider/Index';
import CatSlider from "../../components/catslider/Index";
import Banners from "../../components/banners/Index";
import Product from "../../components/product/Index";
import FadeLoader from "../../components/loader/Index";
import './Index.css';
import DailyBanner from "../../assets/images/banner/daily-banner.png";
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

            <section className="homeproducts">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd quicksand mb-0 mt-0 ">
                            Popular Products
                        </h2>
                        <ul className="list list-inline ms-auto filtertab me-4">
                            <li className="list-inline-item">
                                <a className="cursor">All</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Protein</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Soaps</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">True Gain</a>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-3">
                        <div className="productrow row">
                            {loading ? <FadeLoader /> :
                                <>
                                    {products.map((data, index) => {
                                        if (data.product_cat_tag == "popular") {
                                            return (
                                                <div className="col-sm-4">
                                                    <div className="item" id={index}>
                                                        <Product data={data} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="homeproductsrow2 pt-0 position-relative">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="hd quicksand mb-0 mt-0 ">
                            Daily Best Sales
                        </h2>
                        <ul className="list list-inline ms-auto filtertab me-4">
                            <li className="list-inline-item">
                                <a className="cursor">Featured</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">Popular</a>
                            </li>
                            <li className="list-inline-item">
                                <a className="cursor">New Added</a>
                            </li>
                        </ul>
                        <div className="daily-nav ms-auto">
                            <div className="cat-prev"><KeyboardArrowLeftOutlinedIcon /></div>
                            <div className="cat-next"><KeyboardArrowRightOutlinedIcon /></div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3 col-sm-12 position-relative">
                            <img src={DailyBanner} className="w-100 daily-banner" />
                        </div>
                        <div className="col-md-9 col-sm-12 h-100">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={4}
                                navigation={{
                                    nextEl: ".cat-next",
                                    prevEl: ".cat-prev",
                                }}
                                spaceBetween={20}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                speed={600}
                                loop={true}
                                breakpoints={{
                                    1200: { slidesPerView: 3 },
                                    1024: { slidesPerView: 3 },
                                    768: { slidesPerView: 3 },
                                    600: { slidesPerView: 1 },
                                    320: { slidesPerView: 1 },
                                }}
                                className="daily-best-main h-100 d-flex">
                                {loading ? <FadeLoader /> :
                                    <>
                                        {
                                            products.map((data, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className="item">
                                                            <Product data={data} />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            }
                                            )
                                        }
                                    </>
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;