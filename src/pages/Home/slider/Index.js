import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import './Index.css';
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
        autoplaySpeed: 2500,
        cssEase: "linear",
        speed: 500
    };
    return (
        <section className="homeslider">
            <div className="container-fluid position-relative">
                <Link to="https://divinityimpex.com/products">
                <Slider {...settings} className="homeslider-main">
                    {/* <Link to="https://divinityimpex.com/product/combo">
                    <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/hero/mobile/mobile-banner-250.jpg" media="(max-width: 992px)" />
                            <img src="https://divinityimpex.com/images/hero/hero-banner-eid.jpg" alt="slider-1" className="sliderimage-1" />
                        </picture>
                    </div>
                    </Link> */}
                    {/* <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/combo-banner-2.jpeg" media="(max-width: 992px)" />
                            <img src={HomesliderImg2} alt="slider-2" className="sliderimage-2" />
                        </picture>
                    </div> */}
                    {/* <div className="item">
                        <picture> 
                            <source srcset="https://divinityimpex.com/images/hero/mobile/mobile-01.png" media="(max-width: 992px)" />
                            <img src="https://divinityimpex.com/images/hero/eid-hero-3.jpeg" alt="slider-2" className="w-100 sliderimage-2" />
                        </picture>
                    </div> */}
                    <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/hero/mobile/mobile-02.png" media="(max-width: 992px)" />
                            <img src="https://divinityimpex.com/images/hero/hero-1.jpeg" alt="slider-1" className="w-100 sliderimage-1" />
                        </picture>
                    </div>
                    <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/hero/mobile/mobile-02.png" media="(max-width: 992px)" />
                            <img src="https://divinityimpex.com/images/hero/hero-2.jpeg" alt="slider-2" className="w-100 sliderimage-2" />
                        </picture>
                    </div>
                    <div className="item">
                        <picture>
                            <source srcset="https://divinityimpex.com/images/hero/mobile/mobile-04.png" media="(max-width: 992px)" />
                            <img src="https://divinityimpex.com/images/hero/hero-3.jpeg" alt="slider-1" className="w-100 sliderimage-1" />
                        </picture>
                    </div>
                    <div className="item">
                        <picture> 
                            <source srcset="https://divinityimpex.com/images/hero/mobile/mobile-05.png" media="(max-width: 992px)" />
                            <img src="https://divinityimpex.com/images/hero/hero-4.jpeg" alt="slider-2" className="w-100 sliderimage-2" />
                        </picture>``
                    </div>
                    
                </Slider>
                </Link>
                {/* Show Button */}
                {/* <div className="shopnowbuttons">
                    <ul className="list list-inline">
                        <li className="list list-inline-item">
                            <Button variant="contained"><Link to="https://divinityimpex.com/product/combo">Grab Offer Now !!</Link></Button>
                        </li>
                    </ul>
                </div> */}
            </div>
        </section>
    )
}

export default HomeSlider;
