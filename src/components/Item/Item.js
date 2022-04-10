import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({name , price, img, stock, id}) =>{

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
                <button className='btnDetail'>
                    <Link to={`detail/${id}`} className='btnDetailText'>Ver detalles</Link>
                </button>
            </div>            
        </div>
    )
}

export default Item