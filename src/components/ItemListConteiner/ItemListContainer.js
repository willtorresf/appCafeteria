import './ItemListConteiner.css'

const ItemListConteiner = (props) => {
    return (
        <div className='itemTitle'>
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default ItemListConteiner