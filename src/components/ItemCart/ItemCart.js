import CartContext from '../../context/CartContext'
import './ItemCart.css'
import { useContext } from "react";


const ItemCart = ({id, name, price, quantity}) =>{

    const {removeItem} = useContext(CartContext)

    return(
        <>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>R$ {price}</p>
            <p>R$ {quantity*price}</p>
            <button className='cartBtnX' onClick={()=>{removeItem(id)}}>X</button>
        </>
    )
}

export default ItemCart