import './CartWidget.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
    
    const { cart, CartWidgetQuantity } = useContext(CartContext);

    if (cart.length ===0 ){
        return(
            <>
            </>
        )
    }

    return (
        <div className='cartFlex'>
            <Link className='cartWidLink' to='/cart'>
                <img className="cartImg" src={'./images/shopping-cart.png'} alt="Carrito"/>
                <p>{CartWidgetQuantity ()}</p>
            </Link>
        </div>
    );
}

export default CartWidget