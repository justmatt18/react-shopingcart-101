import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../context/ShopContextProvider";
import PRODUCTS from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();

    const navigateShoppingPage = () => {
        navigate("/");
    };

    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    let totalAmount = getTotalCartAmount();

    return (
        <div className="cart">
            <div className="cartTitle">
                {totalAmount > 0 ? (
                    <h1>Your Cart Items</h1>
                ) : (
                    <h1>Your Cart is Empty</h1>
                )}
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <CartItem
                                key={product.id}
                                product={product}
                                quantity={cartItems[product.id]}
                            />
                        );
                    }
                })}
            </div>
            {totalAmount > 0 && (
                <div className="checkout">
                    <p>SubTotal: {totalAmount}</p>
                    <button onClick={navigateShoppingPage}>
                        Continue Shopping
                    </button>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
