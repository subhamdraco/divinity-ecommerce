import React from 'react';
import './Footer.css';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { FaFacebookF } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footerwrapper'>
                <div className='footerboxes'>
                    <div className='container-fluid'>
                        <div className='row quicksand  text-center'>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100 gap-3'>
                                    <span><WorkspacePremiumIcon /></span>
                                    <div className='info'>
                                        <h5>Premium quality</h5>
                                        <p>globally certified ingredients</p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100 gap-3'>
                                    <span><ChildCareIcon /></span>
                                    <div className='info'>
                                        <h5>Crafted with care</h5>
                                        <p>tested for safety</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100 gap-3'>
                                    <span><LocalOfferIcon /></span>
                                    <div className='info'>
                                        <h5>Competitive pricing</h5>
                                        <p>reliable global logistics</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100 gap-3'>
                                    <span><AllInclusiveIcon /></span>
                                    <div className='info'>
                                        <h5>Sustainability focus</h5>
                                        <p>ethical sourcing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Brand Description Section */}


                <footer className='mt-4'>
                    <div className='container-fluid pt-2'>
                        <div className="footer-brand-description container-fluid mt-4 text-center">
                            <p>
                                Titan Core is a premium sports nutrition brand available across UAE and GCC.
                                Whether you are looking to buy whey protein in Dubai, mass gainer in Abu Dhabi,
                                creatine in Sharjah, or BCAA across the GCC, Divinity Impex delivers quality gym
                                supplements designed for performance-focused individuals.
                            </p>
                        </div>
                        <div className='row pt-2'>
                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>Top Selling Products</h5></li>
                                    <li><Link to={"/products"}>Whey Protein</Link></li>
                                    <li><Link to={"/products"}>Fish Oil</Link></li>
                                    <li><Link to={"/products"}>True Gain</Link></li>
                                    <li><Link to={"/products"}>Baby Wipes</Link></li>
                                </ul>
                            </div>

                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>Our Quality</h5></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to={"/products"}>EXPLORE</Link></li>
                                </ul>
                            </div>

                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>NEED HELP?</h5></li>
                                    <li>+971525914261</li>
                                    <li>exports@divinityimpex.com</li>
                                </ul>
                            </div>


                            <div className='col'>
                                <h5>Follow Us</h5>
                                <ul className='footerlist list list-inline d-flex align-items-center ps-2'>
                                    <li className='list-inline-item'><Link to={"https://www.facebook.com/share/1DFMXnjMm2/"}><FaFacebookF /></Link></li>
                                    <li className='list-inline-item'><Link to={"https://youtube.com/@titancoreofficial?si=tfp4_Q5GRkh5nL20"}><CiYoutube /></Link></li>
                                    <li className='list-inline-item'><Link to={"https://www.instagram.com/titan_core_uae?igsh=MXRqbjQ1OW01MGdyMg=="}><FaInstagram /></Link></li>
                                </ul>
                            </div>
                        </div>

                        <p className='footernote'>©2025 Divinity Implex. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;