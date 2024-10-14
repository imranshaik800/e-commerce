import { createContext, useContext, useState } from "react"

const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([])


    const addtocart = (item) => {
        setCartItems([...cartItems,item])
    }

    const removecart = (item) => {
        setCartItems(cartItems.filter((each) => each !== item))
    }

    return (
        <CartContext.Provider value={{cartItems,addtocart,removecart}}>
            {children}
        </CartContext.Provider>

    )
} 

export const UseCart = ()=> {
    return useContext(CartContext)
}


