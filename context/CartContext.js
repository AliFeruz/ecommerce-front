import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({});

export function CartContextProvider({children}){
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProducts,setCartProducts] = useState([]);
    useEffect(() => {
      if (cartProducts?.length > 0) {
        ls?.setItem('cart', JSON.stringify(cartProducts));
      }
    }, [cartProducts]);
    
    useEffect(() => {
      if (ls && ls.getItem('cart')) {
        setCartProducts(JSON.parse(ls.getItem('cart')));
      }
    }, []);


    function addToCart(productID){
        setCartProducts(prev => [...prev, productID])
      }
    
    const values = {
        cartProducts,
        setCartProducts,
        addToCart
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}