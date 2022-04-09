import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd, name, message, messageColor}) => {
    const [count,setCount] = useState(initial)

    const Increase = () => {
        if (count < stock) {    
            setCount(count + 1);
        }
    }

    const Decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className='mainCount'>
            <h3>{name}</h3>

            <p style={{color: `${messageColor}`}}>{message}</p>
            
            <div className='flexCount'>
                <button onClick={Decrease}>-</button>
                <span>{count}</span>
                <button onClick={Increase}>+</button>
            </div>
            
            <button className ='addCart' onClick={()=> {onAdd(count,stock)}}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount