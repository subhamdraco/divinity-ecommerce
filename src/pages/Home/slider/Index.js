import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Index.css';
import HomesliderImg1 from '../../../assets/images/slider-1.jpeg';
import HomesliderImg2 from '../../../assets/images/slider-2.jpeg'
import Button from '@mui/material/Button';

const HomeSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        speed: 500
    };
    return (
        <section className="homeslider">
            <div className="container-fluid position-relative">
                <Link to="https://divinityimpex.com/product/combo">
                <Slider {...settings} className="homeslider-main">
                    <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/combo-banner-1.jpeg" media="(max-width: 992px)" />
                            <img src={HomesliderImg1} alt="slider-1" className="w-100 sliderimage-1" />
                        </picture>
                        {/* <div className="info">
                            <h1 className="mb-2">
                                Gentle care for your<br/>
                                skin, teeth, and daily hygiene.
                            </h1>
                            <p className="mb-1">
                                Explore our products. Experience the difference
                            </p>
                        </div> */}
                    </div>
                    <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/combo-banner-2.jpeg" media="(max-width: 992px)" />
                            <img src={HomesliderImg2} alt="slider-2" className="w-100 sliderimage-2" />
                        </picture>
                        {/* <source srcset={HomesliderImgSmall} media="(max-width: 992px)"></source> */}
                    </div>
                </Slider>
                </Link>
                {/* Show Button */}
                <div className="shopnowbuttons">
                    <ul className="list list-inline">
                        {/* <li className="list list-inline-item playfair">
                            <Button variant="contained"><Link to="/products">Explore Reshu</Link></Button>
                        </li>
                        <li className="list list-inline-item titan">
                            <Button variant="outlined"><Link to="/products">Explore Titan Core</Link></Button>
                        </li> */}
                        <li className="list list-inline-item">
                            <Button variant="contained"><Link to="https://divinityimpex.com/product/combo">Grab Offer Now !!</Link></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeSlider;
