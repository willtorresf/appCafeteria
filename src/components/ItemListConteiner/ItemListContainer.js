import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
//import { getProducts } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore';
import {firestoreDb} from '../../services/firebase/index' 

const ItemListConteiner = ({greeting}) => {
    const [product,setProducts] = useState ([])
    const {categoryId} = useParams ()

    useEffect(() =>{
        /*getProducts(categoryId).then(prods =>{
            setProducts(prods)
        })*/

        const collectionRef = categoryId
            ? query(collection(firestoreDb, "products"), where ('category','==',categoryId))
            : collection(firestoreDb, "products");

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
    },[categoryId])
    
    if(product.length === 0){
        return(
            <section className='itemTitle'>
                <h1>No hay productos</h1>
            </section>
        )
    }
    
    return (
        <section className='itemTitle'>
            <h1>{greeting}</h1>
            <ItemList products = {product}/>
        </section>
    );
}

export default ItemListConteiner