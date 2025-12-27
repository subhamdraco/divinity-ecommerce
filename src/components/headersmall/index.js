import React, { useEffect, useRef, useState } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import './index.css';
import SignUpButton from '../../components/signupbutton/Index';
import { useAuth } from "../../components/context/AuthContext";

const HeaderSmall = () => {

    const {user, logout} = useAuth()
    const [isOpenDropdown, setisOpenDropdown] = useState(true)
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounceRef = useRef(null);

    useEffect(() => {
        if (!search.trim()) {
            setResults([]);
            return;
        }

        clearTimeout(debounceRef.current);

        debounceRef.current = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `https://divinityimpex.com/api/search-products.php`,
                    {
                        params: {
                            q: search,
                            category: "All Categories"
                        }
                    }
                );
                setResults(res.data);
            } catch (e) {
                setResults([]);
            }
            setLoading(false);
        }, 400);
    }, [search]);

    return (
        <>
            <div className="headersmall">
                <div className="container-fluid">
                    <ClickAwayListener onClickAway={() => setisOpenDropdown(true)}>
                        <div className="row">
                            <div className="left-logo col-sm-6">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="col-sm-6 d-flex justify-content-end align-items-center">
                                <MenuOutlinedIcon className="hamburgermenu" onClick={() => setisOpenDropdown(!isOpenDropdown)} />
                                {isOpenDropdown === false &&
                                    <div className="menuitems">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <img src={logo} alt="logo" className="logo" />
                                            </div>
                                            <div className="col-sm-2 cross ms-auto">
                                                <ClearOutlinedIcon onClick={() => setisOpenDropdown(true)} />
                                            </div>
                                        </div>
                                        <div className="dash"></div>
                                        <div className="d-flex align-items-center pt-3 ps-2">
                                            <div className="search">
                                                {/* <input type="text" placeholder="Search for items.." />
                                                <SearchIcon className="searchIcon cursor" /> */}
                                                <input
                                                    type="text"
                                                    placeholder="Search for items.."
                                                    value={search}
                                                    onChange={e => setSearch(e.target.value)}
                                                />
                                                <SearchIcon className="searchIcon cursor" />

                                                {results.length > 0 && (
                                                    <ul className="search-dropdown">
                                                        {results.map(item => (
                                                            <li key={item.product_id} onClick={() => {
                                                                setResults([]);
                                                                setSearch("");
                                                            }}>
                                                                <Link to={`/product/details/${item.product_id}`}>
                                                                    <img src={item.thumbnail_url} alt="" />
                                                                    <div>
                                                                        <p>{item.name}</p>
                                                                        <span>{item.price} AED</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {loading && <div className="search-loading">Searching…</div>}
                                            </div>
                                        </div>
                                        <div className="hammenuitems" onClick={() => setisOpenDropdown(true)}>
                                            <ul className="list-group mb-0 p-0">
                                                <li className="list-group-item">
                                                    <Button><Link to="/">Home</Link></Button>
                                                </li>
                                                <li className="list-group-item">
                                                    <Button><Link to="/about">About Us</Link></Button>
                                                </li>
                                                <li className="list-group-item">
                                                    <Button><Link to={"/listing"}>Brands</Link></Button>
                                                </li>
                                                {user && 
                                                <>
                                                <li className="list-group-item">
                                                    <Button><Link to={"/listing"}>My Account</Link></Button>
                                                </li>
                                                <li className="list-group-item">
                                                    <Button><Link to={"/listing"}>Order Tracking</Link></Button>
                                                </li></>}
                                                <li className="list-group-item">
                                                    <Button><Link>Blog</Link></Button>
                                                </li>
                                                <li className="list-group-item">
                                                    <Button><Link>Contact</Link></Button>
                                                </li>
                                                <li className="list-group-item">
                                                    <Button><Link>Policies</Link></Button>
                                                </li>
                                                <li className="list-group-item">
                                                    <Button><Link>Carrers</Link></Button>
                                                </li>
                                                {user ? <li className="list-group-item">
                                                    <Button onClick={logout}><Link>Sign Out</Link></Button>
                                                </li>: <li className="list-group-item"><SignUpButton/></li>}
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </ClickAwayListener>
                    <div className="dash"></div>
                </div>
            </div>
        </>
    )
}

export default HeaderSmall;