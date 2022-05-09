import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';


const ItemListConteiner = ({greeting}) => {
    const [product,setProducts] = useState ([])
    const {categoryId} = useParams ()

    useEffect(() =>{
        getProducts(categoryId).then((prods) => {
            setProducts(prods);
        }).catch(error => {
            console.log(error)
        });
    },[categoryId])
    
    if(product.length === 0){
        return(
            <section className='itemTitle'>
                <h1>No hay productos</h1>
            </section>
        )
    }
    
    return (
        <main>
            <section className='itemTitle'>
                <h1>{greeting}</h1>
                <ItemList products = {product}/>
            </section>
        </main>
    );
}

export default ItemListConteiner