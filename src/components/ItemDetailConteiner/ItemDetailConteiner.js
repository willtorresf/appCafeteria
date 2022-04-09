import './ItemDetailConteiner.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
import { getItem } from '../../asyncMock';

const ItemDetailConteiner = () =>{


    const [item,setItem] = useState ()

    useEffect (()=>{
        getItem('3').then(product =>{
            setItem(product)
        })
    },[])

    return(
        <main>
            <ItemDetail {...item}/>
        </main>
    )
}

export default ItemDetailConteiner