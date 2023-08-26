/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Shop.css";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
    const { id, productName, price, imgUrl } = props.product;
    const { cartItems, addToCart } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className="product">
            <img src={imgUrl} alt={productName} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button
                className="addToCartBttn"
                onClick={() => {
                    console.log(`Add to Cart ${productName} with id ${id}`);
                    addToCart(id);
                }}
            >
                Add to Cart
                {cartItemAmount > 0 && <span> ({cartItemAmount})</span>}
            </button>
        </div>
    );
};

export default Product;
