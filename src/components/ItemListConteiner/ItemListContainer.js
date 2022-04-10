import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemListConteiner = ({greeting}) => {
    const [product,setProducts] = useState ([])
    const {categoryId} = useParams ()

    useEffect(() =>{
        getProducts(categoryId).then(prods =>{
            setProducts(prods)
        })
    },[categoryId])
    
    
    return (
        <section className='itemTitle'>
            <h1>{greeting}</h1>
            <ItemList products = {product}/>
        </section>
    );
}

export default ItemListConteiner