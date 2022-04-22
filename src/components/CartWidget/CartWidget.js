import './CartWidget.css'
import { useContext } from "react";
import CartContext from "../../context/CartContext";


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
            <img className="cartImg" src={'./images/shopping-cart.png'} alt="Carrito"/>
            <p>{CartWidgetQuantity ()}</p>
        </div>
    );
}

export default CartWidget