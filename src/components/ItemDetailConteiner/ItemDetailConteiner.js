import './ItemDetailConteiner.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
import { getItem } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailConteiner = () =>{
    const [item,setItem] = useState ()

    const {itemId} = useParams()

    useEffect (()=>{
        getItem(itemId).then(product =>{
            setItem(product)
        })
    },[itemId])

    return(
        <main>
            <ItemDetail {...item}/>  
        </main>
    )
}

export default ItemDetailConteiner