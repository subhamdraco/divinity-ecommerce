import React from "react";
import './Index.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const CatSlider = (props) => {

    return (
        <div className="catslidersection mt-4">
            <div className="container-fluid">

                {/* Title Section */}
                <div className="featuretitle d-flex align-items-center mb-3">
                    <h2 className="hd quicksand">Featured Categories</h2>

                    <div className="catslider-nav ms-auto">
                        <div className="cat-prev">
                            <KeyboardArrowLeftOutlinedIcon />
                        </div>
                        <div className="cat-next">
                            <KeyboardArrowRightOutlinedIcon />
                        </div>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".cat-next",
                        prevEl: ".cat-prev",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={600}
                    loop={true}
                    spaceBetween={5}
                    breakpoints={{
                        1400: { slidesPerView: 6 },
                        1200: { slidesPerView: 5 },
                        1024: { slidesPerView: 4 },
                        768: { slidesPerView: 3 },
                        480: { slidesPerView: 2 },
                        320: { slidesPerView: 2 },
                    }}
                    className="catslider-main"
                >
                    {props.data.map((product, i) => (
                        <SwiperSlide key={i}>
                            <div className="item">
                                <Link to="/products" className="cat-card">
                                    <div className="info">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <span className="cat-title">
                                        {product.name}
                                    </span>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default CatSlider;
