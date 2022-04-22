import { createContext, useState } from "react";

const CartContext = createContext ()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    console.log(cart)
    
    const addItem = (productAdd) =>{
        if (isInCart(productAdd.id)){
            const products = cart.filter(prod => prod.id !== productAdd.id)
            setCart(products.concat(productAdd))
        } else {
            setCart([...cart, productAdd])
        }
    }

    const clearCart = () => {
        setCart([])
    }
    
    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const CartWidgetQuantity = () =>{
        let count = 0;
        cart.forEach(items => {
            count += items.quantity
        })
        return count;
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }
    
    const SumCart = () =>{
        let count = 0
        cart.forEach(item =>{
            let suma = item.price * item.quantity
            count += suma
        })
        return count
    }

    const getCartQuantity = (id) =>{
        if (isInCart(id)){
            const products = cart.filter((prod) => prod.id === id);
            let cartQuantity = products[0].quantity;
            return cartQuantity;
        } else {
            return 1
        }
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, CartWidgetQuantity, isInCart, getCartQuantity, SumCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext