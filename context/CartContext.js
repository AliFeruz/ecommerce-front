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
    
      function removeProduct(productID){
        setCartProducts(prev => {
          const pos = prev.indexOf(productID);
          if (pos !== -1){
            return prev.filter((value, index) => index !== pos);
          }
          return prev;
        })
      }


    const values = {
        cartProducts,
        setCartProducts,
        addToCart,
        removeProduct
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}