import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"

function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {route} = useParams();

    useEffect(() => {
        if (route) {
            const queryCollection = query(collection(db, "ItemCollection"), where("ruta", "==", route))
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
    } else {
        const queryCollection = query(collection(db, "ItemCollection"))
        getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))           
    }
}, [route])

    return (
        <div className="container-fluid">
            <div className="welcome">{greeting}</div>
            <div className="row div-container">
                { loading ?
                    <div className="spinner-container">
                        <div className="spinner-div">
                            <Spinner color="primary" animation="grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </div>
                    : 
                        <ItemList products={products}/>
                } 
            </div>
        </div>
    )
}

export default ItemListContainer