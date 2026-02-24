import React from "react";
import "./Index.css";
import Aboutbanner from "../../assets/images/aboutbanner.jpg";
import Slider1 from "../../assets/images/about-slider/slider-1.jpg";
import Slider2 from "../../assets/images/about-slider/slider-2.jpg";
import Slider3 from "../../assets/images/about-slider/slider-3.jpg";
import Slider4 from "../../assets/images/about-slider/slider-4.jpg";
import Slider from "react-slick";
import AboutImage from '../../assets/images/about-image.jpg';
import AboutImage2 from '../../assets/images/about-image3.png';
import { Link } from "react-router-dom";

const About = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <>
            <div className='breadcrumbwrapper2 mb-2'>
                <div className='container-fluid' style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb2">
                        <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                        <li className="breadcrumb-item breadactive" aria-current="page"><Link to={"/about"}>About</Link></li>
                    </ol>
                </div>
            </div>

            <div className="aboutcontent pt-3 container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-center">
                        <img src={Aboutbanner} className="aboutimage" />
                    </div>
                    <div className="pb-0 col-md-6 col-lg-6 col-sm-12 text-center">
                        <h1 className="d-flex justify-content-center curl-underline">Welcome to Divinity</h1>
                        <h4 className="d-flex justify-content-center curl-underline">Our Journey </h4>
                        <h4 className="d-flex justify-content-center pb-4">Building Everyday Trust Through Quality</h4>
                        <p>Founded in Dubai, <strong>Divinity Impex</strong> is an emerging name in the FMCG and nutritional supplement industry. We focus on creating brands that blend <strong>modern science with everyday needs.</strong></p>

                        <p>From daily personal care to high-performance nutrition, we strive to enhance lifestyles with products that are <strong>safe, effective, and accessible to all.</strong></p>

                        <p>Our strength lies in our <strong>commitment to quality</strong>, deep market understanding, and strong distribution network across <strong>UAE, GCC, and international markets.</strong></p>

                        <p>At Divinity Impex, we believe in <strong>trust, transparency, and long-term value</strong> — building relationships that go beyond transactions.</p>

                        <Slider {...settings} className="aboutslider">
                            <div>
                                <img src={Slider1} className="aboutsliderimage" />
                            </div>
                            <div>
                                <img src={Slider2} className="aboutsliderimage" />
                            </div>
                            <div>
                                <img src={Slider3} className="aboutsliderimage" />
                            </div>
                            <div>
                                <img src={Slider4} className="aboutsliderimage" />
                            </div>
                        </Slider>
                    </div>
                </div>

                <div className="pt-0 d-flex justify-content-center flex-column align-items-center">
                    <h1 className="curl-underline pt-4">Our Mission</h1>
                    <h5 className="pt-2 text-center" >To deliver trusted, affordable, and innovative products that improve everyday living.</h5>
                </div>

                <div className="pt-4 d-flex justify-content-center flex-column align-items-center">
                    <h1 className="curl-underline pt-4">Our Vision</h1>
                    <h5 className="pt-2 text-center">To be a globally recognized FMCG company known for quality, integrity, and customer satisfaction.</h5>
                </div>
            </div>

            <section class="brands-section">
                <div class="container">

                    <div class="brands-header">
                        <span class="brands-label">🏷️ BRANDS</span>
                        <h1 className="quicksand">Our Brands, Our Promise</h1>
                        <p>
                            Divinity Impex proudly presents two flagship brands designed for
                            different lifestyles but united by one purpose —
                            <strong>trust through quality</strong>.
                        </p>
                        <div class="curl-line"></div>
                    </div>

                    <div class="brand-intro-grid">

                        <div class="brand-intro">
                            <h2>RESHU</h2>
                            <p>
                                A family-trusted personal care brand offering gentle yet effective
                                solutions for daily hygiene. From refreshing soaps to advanced
                                toothpastes and baby care, Reshu ensures purity and protection in
                                every product.
                            </p>
                        </div>

                        <div class="brand-intro dark">
                            <h2 className="text-white">TITAN CORE</h2>
                            <p className="text-white">
                                A premium sports nutrition range for athletes and fitness enthusiasts.
                                Titan Core brings science-backed formulations, bold flavors, and
                                visible results — helping you push limits and build strength the
                                right way.
                            </p>
                        </div>

                    </div>

                    <div class="section-divider"></div>

                    <div class="brand-details dark">

                        <h2 class="brand-title">💪 TITAN CORE – Nutrition Range</h2>

                        <div class="tagline">
                            <h3>Fuel Your Power. Build Your Core.</h3>
                        </div>

                        <div class="brand-text">
                            <p>
                                Titan Core is for those who live to move, train, and perform. Every
                                formula is scientifically developed with premium ingredients to
                                support endurance, muscle recovery, and overall wellness.
                            </p>
                        </div>

                        <div class="brand-text">
                            <ul class="product-list two-column">
                                <li><strong>BCAA</strong> – Strawberry Mango, Tropic Thunder, Blue Raspberry</li>
                                <li><strong>Creatine Monohydrate</strong> – Pure performance booster for strength and recovery</li>
                                <li><strong>EAA</strong> – Fruit Punch, Mango, Tangy Orange</li>
                                <li><strong>Omega-3 Fish Oil</strong> – Supports heart, joint, and brain health</li>
                                <li><strong>Pre-Workout</strong> – Blackberry Lemonade, Rocket Candy, Peach, Island Crush</li>
                                <li><strong>True Gain (Mass Gainer)</strong> – Banana, Chocolate</li>
                                <li><strong>Whey Protein</strong> – Rich Chocolate, Choco Crunch, Cookies & Cream, Strawberry Pound Cake, Vanilla, Rich Coffee</li>
                            </ul>
                        </div>

                        <div class="brand-cta dark">
                            Train stronger. Recover faster. Perform like a <strong>Titan</strong>.
                        </div>

                    </div>

                    <div class="section-divider"></div>

                    <div class="brand-details">
                        <h2 class="brand-title">🧼 RESHU – Personal Care Range</h2>

                        <div class="tagline">
                            <h3>Pure. Gentle. Everyday Care.</h3>
                        </div>

                        <div class="brand-text">
                            <p>
                                Reshu is designed for families who value cleanliness, freshness, and
                                care. Our products are dermatologically tested, ethically sourced,
                                and crafted with natural extracts for safe, refreshing experiences
                                every day.
                            </p>
                        </div>

                        <div class="brand-text">
                            <ul class="product-list">
                                <li>🟢 Reshu Lemon Soap – Refreshing citrus formula that gently cleanses and revitalizes your skin.</li>
                                <li>🟢 Reshu Clove Gel Toothpaste – Herbal protection with natural clove essence for strong gums.</li>
                                <li>🟢 Reshu Charcoal Toothpaste – Deep-clean activated charcoal for brighter, fresher smiles.</li>
                                <li>🟢 Reshu Tri-Active Toothpaste – Triple-action defense for cavity protection, freshness, and whitening.</li>
                                <li>🟢 Reshu Active Fresh (Menthol Power Crystals) – Cooling freshness that lasts all day.</li>
                                <li>🟢 Reshu Baby Wipes – Soft, gentle, and alcohol-free wipes for your baby’s delicate skin.</li>
                            </ul>
                        </div>

                        <div class="brand-cta light">
                            Rediscover family care — the natural way with <strong>Reshu</strong>.
                        </div>
                    </div>

                </div>
            </section>

            <section class="team-section">
                <div class="container">
                    <div class="team-header">
                        <span class="team-label">👥 MEET THE TEAM</span>
                        <h1 className="quicksand">The People Behind Divinity Impex</h1>
                        <p>
                            Behind every trusted brand is a team driven by purpose, passion,
                            and precision. Our leadership blends industry expertise with
                            a commitment to quality and innovation.
                        </p>
                        <div class="curl-line"></div>
                    </div>

                    <div class="team-grid">

                        <div class="team-card dark">
                            <div class="team-image lead">
                                <img src={AboutImage} alt="Operations Head - Divinity Impex" />
                            </div>
                            <div class="team-content">
                                <h3 className="text-white">Rizwan Adatia</h3>
                                <span class="role">Chairman – COGEF Group |
                                    Chairman – RAF Global | Vision Exports UAE | Motivational Speaker</span>
                                <p>
                                    The man behind us, the founder of our company and our Managing Director
                                    <br/>
                                    <br/>
                                    He is a Visionary Entrepreneur, Philanthropist, and Advocate for Positive Change. A motivational speaker and a Business man who shares his own life experience and helps others to grow like him through his positive influence and motivation.
                                    <br/>
                                    <br/>
                                    From humble beginning in Porbandar, Gujarat to a thriving network of businesses across 10+ African countries – a story worth telling. He is also the Director of COGEF Group.
                                    <br/>
                                    <Link to={"https://www.cogefgroup.com"}>https://www.cogefgroup.com</Link>
                                    <br/>
                                    His vision enabled robust ecosystems irrespective of challenges. His personal philanthropy gave birth to an idea of a dedicated effort in the form of a foundation – RAF Global, an international NGO catering help and support to many people across India and Africa in terms of Food, Health & Education.
                                    <br/>
                                    <Link to={"https://rafglobal.org/"}>https://rafglobal.org/</Link>
                                    <br/>
                                    He is also the co-owner of Vision Exports & Ayul International in UAE.
                                    <br/>
                                    <Link to={"https://www.ayulinternational.com"}>https://www.ayulinternational.com</Link>
                                    <br/>
                                    He is also the owner of Divinity Impex in UAE.
                                    <br/>
                                    <Link to={"https://www.divinityimpex.com"}>hhttps://www.divinityimpex.com</Link>
                                    <br/>
                                    He is leading a team of more than 3000+ professionals under his able guidance.
                                    <br/>
                                    <br/>
                                    To learn more about him please follow his official link
                                    <br/>  
                                    <Link to={"https://www.rizwanadatia.com "}>https://www.rizwanadatia.com</Link>
                                    <br/>
                                    <Link to={"https://www.facebook.com/iamrizwanadatia"}> View More ..</Link>
                                </p>
                            </div>
                        </div>

                        <div class="team-card">
                            <div class="team-image">
                                <img src={AboutImage2} alt="Founder - Divinity Impex" />
                            </div>
                            <div class="team-content">
                                <h3 className="text-white">Ayanangshu A. Chowdhury</h3>
                                <span class="role">Strategy Consultant | Divinity Impex LLC</span>
                                <p>
                                    The Strategy Consultant at Divinity Impex LLC, <br/>with extensive experience working alongside leading FMCG companies. He brings a strong strategic mindset backed by practical industry exposure, helping brands navigate competitive markets and accelerate sustainable growth.
                                    With expertise in FMCG brand strategy, market expansion,portfolio planning, and go-to-market execution, plays a critical role in shaping business direction and long-term growth strategies at Divinity Impex. His approach combines market intelligence, consumer insights, and data-driven analysis to build scalable and resilient brands.
                                    At Divinity Impex LLC, he contributes to strategic planning, brand positioning, pricing strategy, and channel development, ensuring alignment between business objectives and market opportunities. He supports the company’s vision of building trusted, high-performance consumer brands across regional and international markets.
                                </p>
                            </div>
                        </div>




                    </div>

                </div>
            </section>



        </>
    )
}

export default About;