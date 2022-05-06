import { query, where, documentId, collection, getDocs, Timestamp, writeBatch, addDoc } from  "firebase/firestore";
import { db } from "../firebase/firebase";
import Swal from 'sweetalert2';



export const generateOrder = async (values, cartList, totalPurchase, emptyCart) => {
    const order = {
        buyer: {...values},
        items: cartList.map(cartItem => {
            const id = cartItem.id; 
            const brand = cartItem.marca;
            const model = cartItem.modelo;
            const quantity = cartItem.quantity;
            const price = cartItem.precioEfectivo * cartItem.quantity;

            return ({id, brand, model, quantity, price})
        }),
        total: totalPurchase(),
        date: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)

    const ordersCollection = collection(db, "Orders")
    const itemsCollection = collection(db, "ItemCollection")
    const queryStockUpdate = query(itemsCollection, where(documentId(), "in", cartList.map(el => el.id)))

    const outOfStock = []

    const products = await getDocs(queryStockUpdate)

    products.docs.forEach((doc)=>{
        
        const itemToUpdate = cartList.find( el => el.id === doc.id );
        
        if(doc.data().stock > itemToUpdate.quantity){
            batch.update(doc.ref, {stock: doc.data().stock - itemToUpdate.quantity})
        }else {
            outOfStock.push(itemToUpdate)
        }
    })
    if (outOfStock.length === 0) {
        addDoc(ordersCollection, order)
            .then((res)=> {
                batch.commit()
                Swal.fire({
                    icon:"success",
                    title:"Su compra se ha realizado exitosamente",
                    text: `Su número de orden es ${res.id}`,
                    confirmButtonColor: "#0C1014"
                })
                emptyCart()
            })
    } else {
        Swal.fire({
            icon:"error",
            title: "Disculpe, no hay stock de los siguientes modelos:",
            text: outOfStock.map(el => el.modelo).join(", "),
            confirmButtonColor: "#0C1014"
        })
    }
}