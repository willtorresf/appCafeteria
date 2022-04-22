import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import './Cart.css'

const Cart = () => {

    const {cart, clearCart, SumCart} = useContext(CartContext)

    if (cart.length === 0){
            return (
                <div>
                    <h1>Carrito</h1>
                    <h3>No hay productos en el carrito</h3>
                    <Link to = '/'>Volver al home</Link>
                </div>
    )
    }

    return (
        <div className="cartMain">
            <h1>Carrito</h1>
            
            <div className="subtitlesCart">    
                <p>Producto</p>
                <p>Cantidad</p>
                <p>Precio</p>
                <p>Subtotal</p>
            </div>

            <div>
                    {cart.map(items => <ItemCart key={items.id} {...items}/>)}
            </div>

            <div>
                    <p>Total <span>R$ {SumCart()}</span></p>
            </div>

            <div>
                    <button onClick={clearCart}>Eliminar todos los productos</button>
                    <button onClick={()=>{console.log("seguir con el pago")}}>Terminar mi compra</button>
            </div>
        </div>
    )
}

export default Cart