import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemCount from '../ItemCount/ItemCount';

const ItemListConteiner = (props) => {
    
    const handleOnAdd = (quantity,stock)=>{
        if (stock === 0) {
            console.log("No hay stock de este producto");
        } else {
            console.log(`Se agregaron ${quantity} productos al carrito`);
        }   
    }
    
    const [product,setProducts] = useState ([])

    //Promesa
    useEffect(() =>{
        getProducts().then(prods =>{
            setProducts(prods)
        })
    },[])
    
    
    return (
        <section className='itemTitle'>
            <h1>{props.greeting}</h1>
            <ItemList products = {product}/>
            <ItemCount initial={1} stock={20} onAdd={handleOnAdd}/>
        </section>
    );
}

export default ItemListConteiner