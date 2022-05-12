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
        phone: 0,
        email1: "",
        email2: ""        
    }

    const [form, setForm] = useState(initialForm);

    const [sentForm, setSentForm] = useState(false)

    const [errors, setErrors] = useState({})

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
        setSentForm(true);
    }

    const handleOnChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value});
    }

    const handleOnBlur = (e) =>{
        handleOnChange(e);
        setErrors(validationsForm(form))
    }

    const validationsForm = (form) =>{
        let errors = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        if (!form.name.trim()){
            errors.name="El campo 'Nombre' es requerido"
        } else if (!regexName.test(form.name.trim())){
            errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
        } 
        
        if (form.phone == null || form.phone =="") {
            errors.phone = "El campo 'Teléfono' es requerido";
        }

        if (!form.email1.trim()) {
            errors.email1 = "El campo 'Email' es requerido";
        } else if (!regexEmail.test(form.email1.trim())){
            errors.email1 = "El campo 'Email' es incorrecto"
        } 
        
        if (!form.email2.trim()) {
            errors.email2 = "El campo 'Email' es requerido";
        } else if (form.email2.trim() !== form.email1 ){
            errors.email2 = "Los campos 'Emails' deben ser iguales"
        }

        return errors
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, CartWidgetQuantity, isInCart, getCartQuantity, SumCart, handleOnChange, handleOnSubmit, handleOnBlur, errors, form, sentForm}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext