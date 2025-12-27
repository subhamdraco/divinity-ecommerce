
import React, { useEffect, useRef, useState } from "react";
import '../header/Header.css';
import logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select';
import Nav from '../header/nav/Nav';
import SignUpButton from '../../components/signupbutton/Index';
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
import { useCart } from "../../components/context/CartContext";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const Header = (props) => {

    const {user} = useAuth();
    const [items, setItems] = useState([]);

    const loadWishlist = async () => {
        const res = await fetch(`https://divinityimpex.com/api/get-wishlist.php?user_id=${user.id}`);
        const data = await res.json();
        setItems(data);
      };
    
      useEffect(() => {
        if (!user?.id) return; 
        loadWishlist();
      }, [user]);    

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounceRef = useRef(null);

    const { cart } = useCart();

    const headerRef = useRef()

    const [isOpenDropdown, setisOpenDropdown] = useState(true)

    const [smallisOpenDropdown, smallsetisOpenDropdown] = useState(true)

    // const [categories, setcategories] = useState([
    //     "BCAA",
    //     "Whey Protein",
    //     "True Gain",
    //     "Fish Oil"
    // ])


    const countryList = ["English", "Arabic"]


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

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return; // safety check
            let position = window.pageYOffset;
            if (position > 100) {
                headerRef.current.classList.add("fixed");
            } else {
                headerRef.current.classList.remove("fixed");
            }
        }

        window.addEventListener("scroll", handleScroll);

        // Clean up listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="headerwrapper" ref={headerRef}>
                <header className="pb-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="logowrapper col-sm-12 col-md-2 ps-2 d-flex align-items-center">
                                <img src={logo} alt="logo" className="logo" />
                            </div>
                            {/* Header Starts */}
                            <div className="col-sm-12 col-md-5 d-flex align-items-center">
                                <div className="headersearch d-flex align-items-center">
                                    {/* Dropdown */}
                                    <GridViewOutlinedIcon className="itemicon" />
                                    {/* <Select data={categories} placeholder={"All Categories"} icon={false} /> */}
                                    {/* Search Bar */}
                                    <ClickAwayListener
                                        onClickAway={() => {
                                            setResults([]);
                                        }}
                                    >
                                        <div className="search">
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
                                    </ClickAwayListener>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-5 d-flex align-items-center">
                                <div className="ms-auto d-flex align-items-center">
                                    <div className="countrywrapper">
                                        <Select data={countryList} placeholder={countryList[0]} icon={<LocationOnOutlinedIcon className="itemicon" style={{ opacity: 0.4 }} />} />
                                    </div>
                                    {props.user ? (
                                        <ClickAwayListener onClickAway={() => setisOpenDropdown(true)}>
                                            <ul className="list list-inline mb-0 headertabs">
                                                <li className="list-inline-item p-1" onClick={() => window.location.reload()}>
                                                    <Link to={"/wishlist"}>
                                                        <span>
                                                            <FavoriteBorderOutlinedIcon className="itemicon" />
                                                            <span className="badge rounded-circle">{items? items.length: 0}</span>
                                                            Wishlist
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item p-1">
                                                    <Link to={"/cart"} >
                                                        <span><ShoppingCartOutlinedIcon className="itemicon" />
                                                            <span className="badge rounded-circle">{cart ? cart.length : 0}</span>
                                                            Cart
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item p-1">
                                                    <span onClick={() => setisOpenDropdown(!isOpenDropdown)}><PersonOutlineOutlinedIcon className="itemicon" />
                                                        Account
                                                    </span>
                                                    {isOpenDropdown === false &&
                                                        <ul className="accountdropdownmenu">
                                                            {/* <li><Button><PersonOutlinedIcon />My Account</Button></li> */}
                                                            <li><Link to={"/my-orders"}><Button><LocationOnOutlinedIcon />Order Tracking</Button></Link></li>
                                                            {/* <li><Button><FavoriteBorderOutlinedIcon />My Wishlist</Button></li> */}
                                                            {/* <li><Button><TuneOutlinedIcon />Settings</Button></li> */}
                                                            <li><Button onClick={props.logout}><LogoutOutlinedIcon />Sign Out</Button></li>
                                                        </ul>
                                                    }
                                                </li>
                                            </ul>
                                        </ClickAwayListener>) : <div className="ps-5"><SignUpButton /></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Nav />
                </header>
            </div>
        </>
    )
}

export default Header