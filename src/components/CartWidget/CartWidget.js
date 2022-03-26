import './CartWidget.css'

const CartWidget = () => {
    // código

    return (
        <div className='cartFlex'>
            <img className="cartImg" src={'./images/shopping-cart.png'} alt="Carrito"/>
            <p>3</p>
        </div>
    );
}

export default CartWidget