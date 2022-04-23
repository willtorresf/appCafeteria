import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import './Cart.css'

const Cart = () => {

    const {cart, clearCart, SumCart} = useContext(CartContext)

    if (cart.length === 0){
            return (
                <div className="cartMain">
                    <h1>Carrito</h1>
                    <h3>No hay productos en el carrito</h3>
                    <img className="cartImg" src={'./images/cart-cart.png'} alt="Carrito"/>
                    <Link to = '/'>Volver al home</Link>
                </div>
    )
    }

    return (
        <div className="cartMain2">
            <h1>Carrito</h1>
            
            <div className="subtitlesCart">    
                <h3>Producto</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
                <h3>Subtotal</h3>
            </div>

            <div className='ItemCartMain'>
                {cart.map(items => <ItemCart key={items.id} {...items}/>)}
            </div>

            <div className="cartTotal">
                <p>Total:<span> R$ {SumCart()}</span></p>
            </div>

            <div>
                <button className="cartBtnClear" onClick={clearCart}>Eliminar todos los productos</button>
                <button className="cartBtnPurchase" onClick={()=>{console.log("seguir con el pago")}}>Terminar mi compra</button>
            </div>
        </div>
    )
}

export default Cart