import './Item.css'
import { useState } from 'react'

const Item = ({name , price, img, description, stock}) =>{

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
        <div className='mainItem'>
            <div>
                <img className='imgSize' src={img} alt={name}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>Precio: R$ {price}</p>
                <h4 style={{color: `${messageColor}`}}>{message}</h4>
            </div>
            <div>
                <button onClick={()=>{console.log(description)}}>Ver detalles</button>
            </div>            
        </div>
    )
}

export default Item