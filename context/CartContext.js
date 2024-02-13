import { createContext } from "react";


const CartContext = createContext({});

export function CartContextProvider({children}){
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}