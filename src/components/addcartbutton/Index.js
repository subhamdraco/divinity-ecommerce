// // import { useCart } from "../context/CartContext";
// // import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// // const AddToCartBtn = ({ product }) => {
// //     const { addToCart } = useCart();

// //     return (
// //         <button
// //             className="ms-auto"
// //             onClick={() => addToCart(product, 1)}
// //         >
// //             <ShoppingCartOutlinedIcon />Add to Cart
// //         </button>
// //     );
// // };

// // export default AddToCartBtn;

// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../components/context/CartContext";
// import { useAuth } from "../../components/context/AuthContext";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import { useState } from "react";
// import "./Index.css";

// const AddToCartBtn = ({ product , qty}) => {
//     const { addToCart } = useCart();
//     const { user } = useAuth();
//     const navigate = useNavigate();

//     const [added, setAdded] = useState(false);

//     const handleAddToCart = () => {
//         // if (!user) {
//         //     navigate("/login", {
//         //         state: { from: window.location.pathname }
//         //     });
//         //     return;
//         // }

//         addToCart(product, qty || 1);
//         setAdded(true);

//         setTimeout(() => setAdded(false), 1500);
//     };

//     return (
//         <button
//             className={`add-to-cart-btn ${added ? "added" : ""}`}
//             onClick={handleAddToCart}
//             disabled={added}
//         >
//             {added ? (
//                 <>
//                     <CheckCircleOutlineIcon />
//                     Added
//                 </>
//             ) : (
//                 <>
//                     <ShoppingCartOutlinedIcon />
//                     Add to Cart
//                 </>
//             )}
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

const AddToCartBtn = ({
    product,
    qty,
    isCombo = false,
    comboSelections = {},
    generateComboName = () => product?.name || "Combo"
}) => {
    const { addToCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [added, setAdded] = useState(false);

    const handleAddToCart = async () => {
        try {
            // Optional: redirect to login if not logged in
            // if (!user) {
            //     navigate("/login", { state: { from: window.location.pathname } });
            //     return;
            // }

            let productId = product?.product_id; // default normal product id
            let productName = product?.name;

            if (isCombo && Object.values(comboSelections).length === 0) {
                alert("Please select all combo options");
                return;
            }
           

            // Only run combo logic if isCombo and selections exist
            if (isCombo && Object.keys(comboSelections).length > 0) {
                const response = await fetch(
                    "https://divinityimpex.com/api/create-combo-products.php",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            products: Object.values(comboSelections),
                            combo_name: generateComboName()
                        })
                    }
                );

                if (!response.ok) throw new Error("Failed to create combo product");

                const data = await response.json();

                if (!data.success || !data.product_id) {
                    throw new Error("Invalid response from server");
                }

                productId = data.product_id; // use server combo product id
            }

            addToCart(
                {
                    ...(product || {}),
                    product_id: productId,
                    name: productName
                },
                qty || 1
            );

            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
        } catch (error) {
            console.log("Add to Cart Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <button
            className={`add-to-cart-btn ${added ? "added" : ""}`}
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
