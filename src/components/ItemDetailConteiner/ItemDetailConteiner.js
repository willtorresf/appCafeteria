import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProdById } from '../../services/firebase/firestore';


const ItemDetailConteiner = () =>{
    const [item,setItem] = useState ()

    const {itemId} = useParams()

    useEffect (()=>{
        getProdById(itemId).then((prodId) => {
            setItem(prodId);
        }).catch(error => {
            console.log(error)
        });
    },[itemId])

    return(
        <main>
            <ItemDetail {...item}/>  
        </main>
    )
}

export default ItemDetailConteiner