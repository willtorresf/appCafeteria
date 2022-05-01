import './ItemListConteiner.css'
import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore';
import {firestoreDb} from '../../services/firebase/index' 

const ItemListConteiner = ({greeting}) => {
    const [product,setProducts] = useState ([])
    const {categoryId} = useParams ()

    useEffect(() =>{
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
        <main>
            <section className='itemTitle'>
                <h1>{greeting}</h1>
                <ItemList products = {product}/>
            </section>
        </main>
    );
}

export default ItemListConteiner