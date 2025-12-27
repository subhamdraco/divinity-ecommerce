import React from 'react';
import './Footer.css';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { FaFacebookF } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='footerwrapper'>
                <div className='footerboxes'>
                    <div className='container-fluid'>
                        <div className='row quicksand  text-center'>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><WorkspacePremiumIcon /></span>
                                    <div className='info'>
                                        <h5>Premium quality</h5>
                                        <p>globally certified ingredients</p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><ChildCareIcon /></span>
                                    <div className='info'>
                                        <h5>Crafted with care</h5>
                                        <p>tested for safety</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100'>
                                    <span><LocalOfferIcon /></span>
                                    <div className='info'>
                                        <h5>Competitive pricing</h5>
                                        <p>reliable global logistics</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-3 d-flex justify-content-evenly'>
                                <div className='box d-flex align-items-center w-100'>
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

                <footer className='mt-4'>
                    <div className='container-fluid pt-2'>
                        <div className='row pt-2'>
                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>Top Selling Products</h5></li>
                                    <li>Whey Protein</li>
                                    <li>Fish Oil</li>
                                    <li>EAA</li>
                                    <li>Baby Wipes</li>
                                </ul>
                            </div>

                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>FAQs</h5></li>
                                    <li>Return Policy</li>
                                    <li>Contact Us</li>
                                    <li>Track Your Order</li>
                                    <li>ABOUT US</li>
                                </ul>
                            </div>

                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>Our Quality</h5></li>
                                    <li>About Us</li>
                                    <li>Sustainability</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>EXPLORE</li>
                                </ul>
                            </div>

                            <div className='col'>
                                <ul className='footerlist'>
                                    <li className='footerlistheader'><h5>NEED HELP?</h5></li>
                                    <li>011 - 49594959</li>
                                    <li>WhatsApp</li>
                                    <li>divinity@test.com</li>
                                    <li>Brand Authorized Offline Stores</li>
                                </ul>
                            </div>


                            <div className='col'>
                                <h5>Follow Us</h5>
                                <ul className='footerlist list list-inline d-flex align-items-center ps-2'>
                                    <li className='list-inline-item'><FaFacebookF /></li>
                                    <li className='list-inline-item'><CiYoutube /></li>
                                    <li className='list-inline-item'><FaInstagram /></li>
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