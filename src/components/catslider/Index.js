import React, { useRef, useState } from "react";
import Slider from "react-slick";
import './Index.css';
import { Link } from 'react-router-dom';

const CatSlider = () => {
    const [itembg, setitembg] = useState([
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea'
    ]);

    const slider = useRef();
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    function importAll(r) {
        return r.keys().map((key) => ({
            src: r(key),
            name: key.replace('./', '').replace('.png', '')
        }));
    }
    const images = importAll(require.context('../../assets/images/cat', false, /\.(png|jpe?g|svg)$/));

    return (
        <>
            <div className="catslidersection">
                <div className="container-fluid">

                    <div className="featuretitle d-flex align-items-center">
                        <h2 className="hd quicksand">Featured Categories</h2>
                        <ul className="ps-5 pt-2 mt-2 list-inline cat_list_items">
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/shop-now">ToothPaste</Link>
                            </li>
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/shop-now">Whey Protein</Link>
                            </li>
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/shop-now">Fish Oil</Link>
                            </li>
                            <li className="ps-2 list-inline-item quicksand">
                                <Link to="/shop-now">Baby Wipes</Link>
                            </li>
                        </ul>
                    </div>
                    
                    
                    <Slider {...settings} className="catslider-main">
                        {images.map((img, i) => {
                            return (
                                <div className="item">
                                    <Link className="quicksand">
                                        <div className="info" style={{ backgroundColor: itembg[i % itembg.length] }}>
                                            <img key={i} src={img.src} alt="" />
                                            <span className="catname">{img.name}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CatSlider;