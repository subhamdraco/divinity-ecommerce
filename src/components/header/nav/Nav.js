import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import Banner from '../../../assets/images/banner.png'
import '../nav/Nav.css';

const Nav = () => {

    const reshu = [
        'Soaps',
        'Toothpaste',
        'Baby Wipes'
    ]

    const titan = [
        'Whey Protein',
        'Fish Oil',
        'BCAA',
        'Creatine',
        'True Gain',
        'Pre Workout',
        'EAA'
    ]

    return (
        <nav>
            <div className="container-fluid">
                <div className="nav d-flex align-items-center bg-g">
                    <div className="container-fluid">
                        <div className="row position-relative ">
                            {/* <div className="col-sm-3 d-flex align-items-center">
                            <Button className="bg-g cattab">
                                <GridViewOutlinedIcon />
                                &nbsp;Browse All Categories
                                <KeyboardArrowDownIcon />
                            </Button>
                        </div> */}

                            <div className="col d-flex justify-content-around position-static">
                                <nav>
                                    <ul className="list list-inline mb-0 p-0">
                                        <li className="list-inline-item">
                                            <Link to="/"><Button>Home</Button></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="/about"><Button>About Us</Button></Link>
                                        </li>
                                        <li className="list-inline-item brands">
                                            <Link><Button>Brands <KeyboardArrowDownIcon /></Button></Link>
                                            <div className="dropdownmenu">
                                                <ul>
                                                    <li>
                                                        <Link to={"/listing"}>Titan Core</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/listing"}>Reshu</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className="list-inline-item">
                                            <Button><Link>Reshu</Link></Button>
                                        </li>
                                        <li className="list-inline-item">
                                            <Button><Link>Titan Core</Link></Button>
                                        </li> */}
                                        <li className="list-inline-item">
                                            <Link to="/listing"><Button>Shop</Button></Link>
                                            {/* <KeyboardArrowDownIcon /> */}
                                            {/* <div className="dropdownmenu megamenu">
                                                <div className="row">
                                                    <div className="col">
                                                        <h4 className="text-g">Reshu</h4>
                                                        <ul className="mb-0 mt-3">
                                                            {reshu.map((item, index) => {
                                                                return (
                                                                    <li><Link to="/listing">{item}</Link></li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <h4 className="text-g">Titan Core</h4>
                                                        <ul className="mb-0 mt-3">
                                                            {titan.map((item, index) => {
                                                                return (
                                                                    <li><Link to="/listing">{item}</Link></li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className="col rounded-pill">
                                                        <img src={Banner} className="w-100" />
                                                    </div>
                                                </div>
                                            </div> */}
                                        </li>
                                        {/* <li className="list-inline-item">
                                            <Link><Button>Blog</Button></Link>
                                        </li> */}
                                        <li className="list-inline-item">
                                            <Link><Button>Contact</Button></Link>
                                        </li>
                                        {/* <li className="list-inline-item">
                                            <Link><Button>Policies</Button></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link><Button>Carrers</Button></Link>
                                        </li> */}
                                    </ul>

                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;