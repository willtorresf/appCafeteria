import CartContext from "../../context/CartContext";
import { useContext } from "react";
import './CartForm.css'

const CartForm = ({closeModal})=>{

    const { handleOnChange, handleOnSubmit, handleOnBlur, errors } = useContext(CartContext);

    return(
            <div className="formConteiner">
                <h2>Datos para facturación</h2>
                <p>Por favor llene los datos solicitados para seguir con la compra:</p>
                <form onSubmit={handleOnSubmit} className="formMain">
                    <input type='text' name='name' placeholder="Escribe tu nombre" onChange={handleOnChange} onBlur={handleOnBlur} required/>
                    {errors.name && <p className="validationMessage">{errors.name}</p>}
                    
                    <input type='number' name='phone' placeholder="Escribe tu teléfono" onChange={handleOnChange} onBlur={handleOnBlur} required/>
                    {errors.phone && <p className="validationMessage">{errors.phone}</p>}
                    
                    <input type='email' name='email1' placeholder="Escribe tu email" onChange={handleOnChange} onBlur={handleOnBlur} required/>
                    {errors.email1 && <p className="validationMessage">{errors.email1}</p>}
                    
                    <input type='email' name='email2' placeholder="Por favor confirma tu email" onChange={handleOnChange} onBlur={handleOnBlur} required/>
                    {errors.email2 && <p className="validationMessage">{errors.email2}</p>}
                    
                    {Object.keys(errors).length === 0 ? <input type='submit' value='Enviar'onClick={closeModal}/> : <></>}
                </form>
            </div>
    )
}

export default CartForm