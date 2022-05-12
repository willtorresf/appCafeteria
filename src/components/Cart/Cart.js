import { Link } from "react-router-dom"
import ItemCart from "../ItemCart/ItemCart"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import './Cart.css'
import {addDoc, collection, getDocs, Timestamp, writeBatch, query, where, documentId} from 'firebase/firestore'
import {firestoreDb} from '../../services/firebase/index'
import CartForm from '../Form/CartForm'
import Modal from "../Modal/Modal";
import { useModal } from "../../Hooks/useModal/useModal";

const Cart = () => {

    const {cart, clearCart, SumCart, form, sentForm} = useContext(CartContext)

    const [ isOpen, openModal, closeModal ] = useModal();

    const createOrder = () => {
        const oBjOrder = {
            items: cart,
            buyer: {
                name: form.name,
                email: form.email1,
                phone: form.phone,
            },
            total: SumCart(),
            date: Timestamp.fromDate(new Date()),
        };
        
        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb,'products')

        const outOfStock = []
        
        getDocs(query(collectionRef,where(documentId(),'in',ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity
                    
                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then( () =>{
                if(outOfStock.length === 0){
                    const collectionRef = collection(firestoreDb, "Orders");
                    return addDoc(collectionRef, oBjOrder);
                } else {
                    return Promise.reject({name: 'stockError', prodcts: outOfStock})
                }
            }).then( ({id}) => {
                batch.commit()
                console.log (`El id de la orden es ${id}`)
                clearCart()
            }).catch(error => {
                console.log(error)
            })
    }

    if (cart.length === 0){
        return (
            <div className="cartMain">
                    <h1>Carrito</h1>
                    <h3>No hay productos en el carrito</h3>
                    <img className="cartImg" src={'./images/cart-cart.png'} alt="Carrito"/>
                    <Link to = '/'>Volver al home</Link>
            </div>
        )
    }

    return (
        <div className="cartMain2">
            <h1>Carrito</h1>
            
            <div className="subtitlesCart">    
                <h3>Producto</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
                <h3>Subtotal</h3>
            </div>

            <div className='ItemCartMain'>
                {cart.map(items => <ItemCart key={items.id} {...items}/>)}
            </div>

            <div className="cartTotal">
                <p>Total:<span> R$ {SumCart()}</span></p>
            </div>

            {!sentForm ? 
                <div>
                    <button className="cartBtnClear" onClick={clearCart}>Eliminar productos</button>
                    <button className="cartBtnPurchase" onClick={openModal}>Llenar datos personales</button>
                    <Modal isOpen={isOpen} closeModal = {closeModal}>
                        <CartForm closeModal={closeModal}/>
                    </Modal>
                </div> 
                :
                <div>
                    <button className="cartBtnClear" onClick={clearCart}>Eliminar productos</button>
                    <button className="cartBtnPurchase" onClick={()=> createOrder()}>Terminar mi compra</button>
                </div>
            }
        </div>
    )
}

export default Cart