import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="site-navbar" aria-label="Primary navigation">
      <div className="site-navbar__bar d-flex align-items-center">
        <div className="container-fluid">
          <div className="row site-navbar__row position-relative g-0">
            <div className="col d-flex justify-content-center position-relative px-2">
              <ul className="site-navbar__list list-inline mb-0 p-0">
                <li className="list-inline-item">
                  <Button component={Link} to="/">
                    Home
                  </Button>
                </li>
                <li className="list-inline-item about-nav">
                  <Button type="button" className="about-nav-trigger">
                    About Us <KeyboardArrowDownIcon />
                  </Button>
                  <div className="dropdownmenu">
                    <ul>
                      <li>
                        <Link to="/about">Divinity Impex</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item brands">
                  <Button
                    component={Link}
                    to="/products"
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Brands
                  </Button>
                  <div className="dropdownmenu">
                    <ul>
                      <li>
                        <Link to={"/products?brand=TITAN%20CORE"}>
                          Titan Core
                        </Link>
                      </li>
                      <li>
                        <Link to={"/product/combo"}>Offers</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button component={Link} to="/products">
                    Shop
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button component={Link} to={"/contact"}>
                    Contact
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
