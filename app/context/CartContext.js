"use client"

import { createContext, useState } from "react";


export const CartContext = createContext({
    cartProducts: [],
    setCartProducts: () => {}
});


export const CartContextProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])
    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    )
};

