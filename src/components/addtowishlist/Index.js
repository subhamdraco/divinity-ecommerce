import React, { useState, useEffect } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth } from "../context/AuthContext";
import "./Index.css";

const AddtoWishlist = ({ user_id, product_id }) => {
    const [wishadded, setWishAdded] = useState(false);
    const [items, setItems] = useState([]);
    const { user } = useAuth()

    const API = "https://divinityimpex.com/api";

    const handleWishlist = async () => {
        try {

            if (!wishadded) {
                // ADD TO WISHLIST
                await fetch(`${API}/add-to-wishlist.php`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        user_id: user_id,
                        product_id: product_id
                    })
                });
            } else {
                // REMOVE FROM WISHLIST
                await fetch(`${API}/remove-from-wishlist.php`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        user_id: user_id,
                        product_id: product_id
                    })
                });
            }

            // Update UI AFTER API succeeds
            setWishAdded(!wishadded);



        } catch (error) {
            console.error("Wishlist error:", error);
        }
    };


    return (
        <div className='wishlisttab ms-3' onClick={handleWishlist}><FavoriteIcon className={`wishicon ${wishadded ? "bg-red" : ""}`} /></div>
    );
};

export default AddtoWishlist;