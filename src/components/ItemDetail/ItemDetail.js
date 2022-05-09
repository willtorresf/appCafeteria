import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, description, img, price, stock})=>{

    const { addItem, getCartQuantity, isInCart} = useContext(CartContext) 
    
    const handleOnAdd = (count,stock)=>{
        if (stock === 0) {
            alert("No hay stock de este producto");
        } else {
            if (isInCart(id)){
                const prodToAdd = { id, name, price }
                addItem({...prodToAdd, quantity: count });
            } else {
                const prodToAdd = {id, name, price}
                addItem({...prodToAdd, quantity: count})
        }   }
    }
    
    let message = ""
    let messageColor = ""

    if (stock > 0){
        message = 'Disponible';
        messageColor = "#008000";
    } else {
        message = 'Indisponible';
        messageColor = "#ff0000";
    }
    
    return(
        <div className='mainItemDetail'>
            <div className='detailImg'>
                <img className='imgSizeDetail'src={img} alt={name}/>
            </div>
            <div className='descriptionDetail'>
                <h1>{name}</h1>
                <p>Precio: R$ {price}</p>
                <p>{description}</p>
            </div>
            
            {isInCart(id) ?  
                <div className='cartDetail'>
                    <ItemCount initial={getCartQuantity(id)} stock={stock} name={name} message={message} messageColor={messageColor} onAdd={handleOnAdd}/>
                    <Link className='detailLinkCart' to={'/cart'}>Ir al carrito</Link>
                </div>
                :
                <div className='cartDetail'>
                    <ItemCount initial={1} stock={stock} name={name} message={message} messageColor={messageColor} onAdd={handleOnAdd}/>
                </div>
            }   
        </div>
    )
}

export default ItemDetail