import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import './Index.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const CatSlider = (props) => {

    function importAll(r) {
        return r.keys().map((key) => ({
            src: r(key),
            name: key.replace('./', '').replace('.png', '')
        }));
    }

    return (
        <>
            <div className="catslidersection mt-4">
                <div className="container-fluid">

                    <div className="featuretitle d-flex align-items-center">
                        <h2 className="hd quicksand">Featured Categories</h2>
                        <ul className="ps-5 pt-2 mt-2 list-inline cat_list_items">
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/listing">ToothPaste</Link>
                            </li>
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/listing">Whey Protein</Link>
                            </li>
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/listing">Fish Oil</Link>
                            </li>
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/listing">Baby Wipes</Link>
                            </li>
                        </ul>
                        <div className="catslider-nav ms-auto">
                            <div className="cat-prev"><KeyboardArrowLeftOutlinedIcon /></div>
                            <div className="cat-next"><KeyboardArrowRightOutlinedIcon /></div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        slidesPerView={5}
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
                            1200: { slidesPerView: 4 },
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            600: { slidesPerView: 1 },
                            320: { slidesPerView: 1 },
                        }}
                        className="catslider-main">{props.data.map((product, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className="item">
                                        <Link className="quicksand">
                                            <div className="info d-flex mb-2 position-relative">
                                                <Link to={"/listing"}><img key={i} src={product.image} alt="" /></Link>
                                                {/* <div className="d-flex flex-column align-items-center m-0 catname position-absolute">
                                                    <span className="catname1">{product.category}</span>
                                                    <span className="catname2">{product.name}</span>
                                                </div> */}
                                                
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })}</Swiper>
                </div>
            </div>
        </>
    )
}
export default CatSlider;