import CartContext from "../../context/CartContext";
import { useContext } from "react";
import './CartForm.css'

const CartForm = ({closeModal})=>{

    const { handleOnChange, handleOnSubmit } = useContext(CartContext);

    return(
            <div className="formConteiner">
                <h2>Datos para facturación</h2>
                <p>Por favor llene los datos solicitados para seguir con la compra:</p>
                <form onSubmit={handleOnSubmit} className="formMain">
                    <input type='text' name='name' placeholder="Escribe tu nombre" onChange={handleOnChange} required/>
                    <input type='email' name='email' placeholder="Escribe tu email" onChange={handleOnChange} required/>
                    <input type='number' name='phone' placeholder="Escribe tu teléfono" onChange={handleOnChange} required/>
                    <input type='submit' value='Enviar'onClick={closeModal}/>
                </form>
            </div>
    )
}

export default CartForm