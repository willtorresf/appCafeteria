import './ItemDetailConteiner.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
//import { getItem } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import { firestoreDb } from "../../services/firebase/index"; 
import { getDoc, doc, query, where } from "firebase/firestore";


const ItemDetailConteiner = () =>{
    const [item,setItem] = useState ()

    const {itemId} = useParams()

    useEffect (()=>{
        /*getItem(itemId).then(product =>{
            setItem(product)
        })*/
        getDoc(doc(firestoreDb, 'products', itemId)).then(response=>{
            const item = {id: response.id, ...response.data()}
            setItem(item)
        })
    },[itemId])

    return(
        <main>
            <ItemDetail {...item}/>  
        </main>
    )
}

export default ItemDetailConteiner