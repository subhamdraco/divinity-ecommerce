import React from "react";
import "./Footer.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { FaFacebookF } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const trustItems = [
  {
    icon: <WorkspacePremiumIcon aria-hidden />,
    title: "Premium quality",
    description: "Globally certified ingredients",
  },
  {
    icon: <ChildCareIcon aria-hidden />,
    title: "Crafted with care",
    description: "Tested for safety",
  },
  {
    icon: <LocalOfferIcon aria-hidden />,
    title: "Competitive pricing",
    description: "Reliable global logistics",
  },
  {
    icon: <AllInclusiveIcon aria-hidden />,
    title: "Sustainability focus",
    description: "Ethical sourcing",
  },
];

const Footer = () => {
  return (
    <>
      <div className="footerwrapper">
        <section
          className="footerboxes footer-trust-strip"
          aria-label="Why shop with us"
        >
          <div className="container-fluid footer-trust-strip__inner">
            <ul className="footer-trust-grid">
              {trustItems.map((item, index) => (
                <li key={index} className="footer-trust-grid__cell">
                  <div className="footer-trust-card">
                    <div className="footer-trust-card__accent" aria-hidden />
                    <div className="footer-trust-card__inner">
                      <div className="footer-trust-card__icon-wrap">
                        {item.icon}
                      </div>
                      <div className="footer-trust-card__body">
                        <h5 className="footer-trust-card__title">{item.title}</h5>
                        <p className="footer-trust-card__desc">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-4">
          <div className="container-fluid pt-2">
            <div className="footer-brand-description container-fluid mt-4 text-center">
              <p>
                Titan Core is a premium sports nutrition brand available across
                UAE and GCC. Whether you are looking to buy whey protein in
                Dubai, mass gainer in Abu Dhabi, creatine in Sharjah, or BCAA
                across the GCC, Divinity Impex delivers quality gym supplements
                designed for performance-focused individuals.
              </p>
            </div>
            <div className="row pt-2">
              <div className="col">
                <ul className="footerlist">
                  <li className="footerlistheader">
                    <h5>Top Selling Products</h5>
                  </li>
                  <li>
                    <Link to={"/products"}>Whey Protein</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Fish Oil</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>True Gain</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>Baby Wipes</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul className="footerlist">
                  <li className="footerlistheader">
                    <h5>Our Quality</h5>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to={"/products"}>EXPLORE</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul className="footerlist">
                  <li className="footerlistheader">
                    <h5>NEED HELP?</h5>
                  </li>
                  <li>+971525914261</li>
                  <li>exports@divinityimpex.com</li>
                </ul>
              </div>

              <div className="col">
                <h5>Follow Us</h5>
                <ul className="footerlist list list-inline d-flex align-items-center ps-2">
                  <li className="list-inline-item">
                    <Link to={"https://www.facebook.com/share/1DFMXnjMm2/"}>
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to={
                        "https://youtube.com/@titancoreofficial?si=tfp4_Q5GRkh5nL20"
                      }
                    >
                      <CiYoutube />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      to={
                        "https://www.instagram.com/titan_core_uae?igsh=MXRqbjQ1OW01MGdyMg=="
                      }
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <p className="footernote">
              ©2025 Divinity Implex. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
