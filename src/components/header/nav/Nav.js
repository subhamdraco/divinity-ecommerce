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
            <div className="nav d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row position-relative">
                        <div className="col-sm-3 d-flex align-items-center">
                            <Button className="bg-g cattab">
                                <GridViewOutlinedIcon />
                                &nbsp;Browse All Categories
                                <KeyboardArrowDownIcon />
                            </Button>
                        </div>

                        <div className="col-sm-7 d-flex align-items-center position-static">
                            <nav>
                                <ul className="list list-inline mb-0 p-0">
                                    <li className="list-inline-item">
                                        <Button><Link to="/">Home</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>About Us</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Brands</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Reshu</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Titan Core</Link></Button>
                                    </li>
                                    <li className="list-inline-item position-static">
                                        <Button><Link>Shop<KeyboardArrowDownIcon /></Link></Button>
                                        <div className="dropdownmenu megamenu">
                                            <div className="row">
                                                <div className="col">
                                                    <h4 className="text-g">Reshu</h4>
                                                    <ul className="mb-0 mt-3">
                                                        {reshu.map((item,index) => {return(
                                                            <li><Link to="/">{item}</Link></li>
                                                        )})}
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <h4 className="text-g">Titan Core</h4>
                                                    <ul className="mb-0 mt-3">
                                                        {titan.map((item,index) => {return(
                                                            <li><Link to="/">{item}</Link></li>
                                                        )})}
                                                    </ul>
                                                </div>
                                                <div className="col rounded-pill">
                                                    <img src={Banner} className="w-100"/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Blog</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Contact</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Policies</Link></Button>
                                    </li>
                                    <li className="list-inline-item">
                                        <Button><Link>Carrers</Link></Button>
                                    </li>
                                </ul>

                            </nav>
                        </div>

                        <div className="col-sm-2 d-flex align-items-center ps-4">
                            <div className="phno d-flex align-items-center">
                                <span className="mt-0 pr-3"><HeadsetOutlinedIcon /></span>
                                <div className="info ml-3">
                                    <h5 className="text-g mb-0 ps-3">1900 - 888</h5>
                                    <p className="text-g mb-0 ps-2">24/7 Support Center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;