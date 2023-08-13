import { createContext, useState } from "react"
import data from '../data'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < data.length + 1; i++){
        cart[i] = 0
    }
    return cart
}
export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: Math.max(prev[itemId] - 1, 0),})
    )}

    const contextValue = {cartItems, addToCart, removeFromCart, getDefaultCart}
    
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

