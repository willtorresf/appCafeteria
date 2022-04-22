import CartContext from '../../context/CartContext'
import './ItemCart.css'
import { useContext } from "react";


const ItemCart = ({id, name, price, quantity}) =>{

    const {removeItem} = useContext(CartContext)

    return(
        <div className='ItemCartMain'>
            <p>{name}</p>
            <p>{quantity}</p>
            <p>{price}</p>
            <p>{quantity*price}</p>
            <button onClick={()=>{removeItem(id)}}> X </button>
        </div>
    )
}

export default ItemCart