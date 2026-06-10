import { React, useState, useEffect, useCallback } from "react";
import HomeSlider from '../Home/slider/Index';
import CategorySection from "../../components/catslider/Index";
import Reels from "../../components/reels/Index";
import Product from "../../components/product/Index";
import FadeLoader from "../../components/loader/Index";
import './Index.css';
import DailyBanner from "../../assets/images/slider-small.jpeg"
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
        dragFree: false,
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

    useEffect(() => {
        if (!emblaApi || loading) return;
        emblaApi.reInit();
    }, [emblaApi, loading, products.length]);

    return (
        <div className="home-page">
            <HomeSlider />

            <div className="home-trust-strip" role="region" aria-label="Why shop with Divinity">
                <div className="container-fluid home-trust-strip__inner">
                    <ul className="home-trust-strip__list">
                        <li className="home-trust-strip__item">
                            <span className="home-trust-strip__icon" aria-hidden="true">
                                <i className="fa fa-truck" />
                            </span>
                            <span className="home-trust-strip__text">
                                <span className="home-trust-strip__label">Fast dispatch</span>
                                <span className="home-trust-strip__hint">In-stock orders ship quickly</span>
                            </span>
                        </li>
                        <li className="home-trust-strip__item">
                            <span className="home-trust-strip__icon" aria-hidden="true">
                                <i className="fa fa-check-circle" />
                            </span>
                            <span className="home-trust-strip__text">
                                <span className="home-trust-strip__label">Trusted formulas</span>
                                <span className="home-trust-strip__hint">Premium ingredients, clear labels</span>
                            </span>
                        </li>
                        <li className="home-trust-strip__item">
                            <span className="home-trust-strip__icon" aria-hidden="true">
                                <i className="fa fa-lock" />
                            </span>
                            <span className="home-trust-strip__text">
                                <span className="home-trust-strip__label">Secure checkout</span>
                                <span className="home-trust-strip__hint">Encrypted payments you can trust</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="home-page__categories-shell home-reveal-scroll">
                <CategorySection />
            </div>

            {/* Popular products */}
            <section className="home-section home-section--popular fade-in">
                <div className="container-fluid">

                    <div className="section-header home-section__header">
                        <div className="section-header__intro">
                            <p className="home-eyebrow">Curated selection</p>
                            <h2 className="section-title">Popular products</h2>
                            <p className="home-lede">
                                Best sellers across protein, recovery, and performance — chosen by athletes and everyday lifters alike.
                            </p>
                        </div>
                        <Link to="/products" className="view-all home-cta-link" aria-label="View all products">
                            <span>View all</span>
                        </Link>
                    </div>

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

            <div className="container-fluid mid-banner-container home-page__promo">
                <Link to="/products" className="home-promo-link home-promo-link--float" aria-label="Shop promotional offers">
                    <div className="mid-banner">
                        <picture>
                            <source
                                srcSet="https://divinityimpex.com/images/banners/mid-banner-mobile.png"
                                media="(max-width: 992px)"
                            />
                            <img
                                src="https://divinityimpex.com/images/banners/mid-banner.png"
                                alt="Featured offers and bundles"
                                className="w-100 sliderimage-2"
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </div>
                </Link>
            </div>

            {/* Daily best sales */}
            <section className="home-section home-section--daily-best light-bg fade-in">

                <div className="container-fluid">

                    <div className="section-header home-section__header">
                        <div className="section-header__intro">
                            <p className="home-eyebrow">Limited-time value</p>
                            <h2 className="section-title">Daily best sales</h2>
                            <p className="home-lede">
                                Rotate through today&apos;s strongest deals. Use the arrows to browse — optimized for quick adds to cart.
                            </p>
                        </div>
                        <Link to="/products" className="view-all home-cta-link home-cta-link--ghost" aria-label="Shop all deals">
                            <span>Shop deals</span>
                        </Link>
                    </div>

                    <div className="section-inner">

                        <div className="row align-items-stretch mt-4 g-lg-4">

                            <div className="col-lg-4 d-none d-lg-block daily-best-banner-col">
                                <div className="daily-banner daily-banner--framed">
                                    <img
                                        src={DailyBanner}
                                        alt="Daily sale spotlight"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-8 col-12 daily-best-slider-col">

                                {loading ? (
                                    <FadeLoader />
                                ) : (
                                    <div className="home-daily-rail">
                                        <div className="home-daily-rail__toolbar">
                                            <p className="home-daily-rail__hint">
                                                <span className="home-daily-rail__dot" aria-hidden="true" /> Swipe or use arrows to explore
                                            </p>
                                            <div className="home-daily-rail__nav" role="group" aria-label="Product carousel controls">
                                                <button
                                                    type="button"
                                                    className="home-daily-rail__btn"
                                                    onClick={scrollPrev}
                                                    aria-label="Show previous products"
                                                >
                                                    <ChevronLeftRoundedIcon fontSize="medium" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="home-daily-rail__btn"
                                                    onClick={scrollNext}
                                                    aria-label="Show next products"
                                                >
                                                    <ChevronRightRoundedIcon fontSize="medium" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="embla embla--home-daily">
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
                                    </div>
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Reels />
        </div>
    )
}

export default Home;
