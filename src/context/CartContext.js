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
        const product = cart.filter(prod => prod.id === id);
        let cartQuantity = product[0].quantity;
        return cartQuantity;
    }

    const initialForm = {
        name: "",
        email: "",
        phone: 0
    }

    const [form, setForm] = useState(initialForm);

    const [sentForm, setSentForm] = useState(false)

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log(form)
        setSentForm(true)
    }

    const handleOnChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, CartWidgetQuantity, isInCart, getCartQuantity, SumCart, handleOnChange, handleOnSubmit,form, sentForm}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext