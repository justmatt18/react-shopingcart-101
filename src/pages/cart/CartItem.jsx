/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, productName, price, imgUrl } = props.product;
    const quantity = props.quantity;
    const { addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <div className="cartItem" key={id}>
            <img src={imgUrl} alt={productName} />
            <div className="description">
                <h3>{productName}</h3>
                <p>
                    <span>Price: $</span>
                    {price}
                </p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={quantity}
                        onChange={(e) => {
                            updateCartItemCount(id, Number(e.target.value));
                        }}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
