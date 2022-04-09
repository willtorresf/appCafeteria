import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({name, description, img, price, stock})=>{

    const handleOnAdd = (quantity,stock)=>{
        if (stock === 0) {
            console.log("No hay stock de este producto");
        } else {
            console.log(`Se agregaron ${quantity} productos al carrito`);
        }   
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
            <div className='cartDetail'>
                <ItemCount initial={1} stock={stock} name={name} message={message} messageColor={messageColor} onAdd={handleOnAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail