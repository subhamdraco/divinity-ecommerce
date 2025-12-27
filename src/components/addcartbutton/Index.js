// import { useCart } from "../context/CartContext";
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// const AddToCartBtn = ({ product }) => {
//     const { addToCart } = useCart();

//     return (
//         <button
//             className="ms-auto"
//             onClick={() => addToCart(product, 1)}
//         >
//             <ShoppingCartOutlinedIcon />Add to Cart
//         </button>
//     );
// };

// export default AddToCartBtn;

import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";
import { useAuth } from "../../components/context/AuthContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import "./Index.css";

const AddToCartBtn = ({ product , qty}) => {
    const { addToCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        if (!user) {
            navigate("/login", {
                state: { from: window.location.pathname }
            });
            return;
        }

        addToCart(product, qty || 1);
        setAdded(true);

        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <button
            className={`ms-auto add-to-cart-btn ${added ? "added" : ""}`}
            onClick={handleAddToCart}
            disabled={added}
        >
            {added ? (
                <>
                    <CheckCircleOutlineIcon />
                    Added
                </>
            ) : (
                <>
                    <ShoppingCartOutlinedIcon />
                    Add to Cart
                </>
            )}
        </button>
    );
};

export default AddToCartBtn;
