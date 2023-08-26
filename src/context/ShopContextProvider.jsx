/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import PRODUCTS from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: prevState[itemId] + 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: prevState[itemId] - 1,
        }));
    };

    const updateCartItemCount = (itemId, quantity) => {
        setCartItems((prevState) => ({
            ...prevState,
            [itemId]: quantity,
        }));
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let { price } = PRODUCTS.find(
                    (product) => product.id === Number(item)
                );
                total += price * cartItems[item];
            }
        }
        return total;
    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
