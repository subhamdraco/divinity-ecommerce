import React, { useEffect, useState } from "react";
import '../header/Header.css';
import logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select';
import Nav from '../header/nav/Nav';
import axios from 'axios';
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

const Header = () => {

    const [isOpenDropdown , setisOpenDropdown] = useState(true)

    const [categories, setcategories] = useState([
        'Milk and Dairies',
        'Clothes',
        'Baking Material',
        'Protein Shake',
        'Fresh Fruit'
    ])

    useEffect(() => {
        getCountries('https://countriesnow.space/api/v0.1/countries')
    }, []
    )

    const countryList = []

    const getCountries = async (url) => {
        try {
            await axios.get(url).then((res) => {
                if (res !== null) {
                    res.data.data.map((item, index) => {
                        countryList.push(item.country)
                    })

                }
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2 d-flex align-items-center ps-2">
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        {/* Header Starts */}
                        <div className="col-sm-5 d-flex align-items-center">
                            <div className="headersearch d-flex align-items-center">
                                {/* Dropdown */}
                                <GridViewOutlinedIcon className="itemicon"/>
                                <Select data={categories} placeholder={"All Categories"} icon={false} />
                                {/* Search Bar */}
                                <div className="search">
                                    <input type="text" placeholder="Search for items.." />
                                    <SearchIcon className="searchIcon cursor" />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-5 d-flex align-items-center">
                            <div className="ml-auto d-flex align-items-center">

                                <div className="countrywrapper">
                                    <Select data={countryList} placeholder={"Your Location"} icon={<LocationOnOutlinedIcon className="itemicon" style={{ opacity: 0.4 }} />} />
                                </div>
                                <ClickAwayListener onClickAway={() => setisOpenDropdown(true)}>
                                <ul className="list list-inline mb-0 headertabs">
                                    <li className="list-inline-item p-1">
                                        <span>
                                            <FavoriteBorderOutlinedIcon className="itemicon" />
                                            <span className="badge rounded-circle">3</span>
                                            Wishlist
                                        </span>
                                    </li>
                                    <li className="list-inline-item p-1">
                                        <span><ShoppingCartOutlinedIcon className="itemicon" />
                                            <span className="badge rounded-circle">3</span>
                                            Cart
                                        </span>
                                    </li>
                                    <li className="list-inline-item p-1">
                                        <span onClick={()=>setisOpenDropdown(!isOpenDropdown)}><PersonOutlineOutlinedIcon className="itemicon" />
                                            {/* <span className="badge bg-success rounded-circle">3</span> */}
                                            Account
                                        </span>
                                        {isOpenDropdown===false &&  
                                        <ul className="accountdropdownmenu">
                                            <li><Button><PersonOutlinedIcon/>My Account</Button></li>
                                            <li><Button><LocationOnOutlinedIcon/>Order Tracking</Button></li>
                                            <li><Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button></li>
                                            <li><Button><TuneOutlinedIcon/>Settings</Button></li>
                                            <li><Button><LogoutOutlinedIcon/>Sign Out</Button></li>
                                        </ul>
                                       }
                                    </li>
                                </ul>
                                </ClickAwayListener>
                            </div>
                        </div>
                    </div>
                </div>
                <Nav/>
            </header>
        </>
    )
}

export default Header