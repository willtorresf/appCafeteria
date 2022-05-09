import { firestoreDb } from "./index";
import { getDocs, collection, query, where, getDoc, doc, writeBatch, Timestamp, documentId, addDoc } from "firebase/firestore";
import { createAdapterProdfromFireStore } from "../../adapters/productAdapter";

export const getProducts = (categoryId) =>{
    return new Promise ((resolve, reject)=>{
        const collectionRef = categoryId
            ? query(collection(firestoreDb, "products"), where ('category','==',categoryId))
            : collection(firestoreDb, "products");

        getDocs(collectionRef).then(response =>{
            const products = response.docs.map(doc => {
                return createAdapterProdfromFireStore(doc)
            })
            resolve(products)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProdById = (itemId) =>{
    return new Promise ((resolve, reject)=>{
        getDoc(doc(firestoreDb, 'products', itemId)).then(response=>{
            const item = createAdapterProdfromFireStore(response)
            resolve(item)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getCategory = () =>{
    return new Promise ((resolve, reject)=>{
        getDocs(query(collection(firestoreDb,"categories"))).then(response =>{
            const categories = response.docs.map(doc => {
                return createAdapterProdfromFireStore(doc)
            })
            resolve(categories)
        }).catch(error => {
            reject(error)
        })
    })
}