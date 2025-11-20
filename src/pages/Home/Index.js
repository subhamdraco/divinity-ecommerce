import React from "react";
import HomeSlider from '../Home/slider/Index';
import CatSlider from "../../components/catslider/Index";
import Banners from "../../components/banners/Index";
import Product from "../../components/product/Index";
import './Index.css';

const Home = () => {
    return (
        <>
            <HomeSlider />
            <CatSlider />
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

                    <div className="productrow">
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>

                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                        <div className="item">
                            <Product />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;