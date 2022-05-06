import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebase"

function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {route} = useParams();

    useEffect(() => {
        const queryCollection = route ? 
        query(collection(db, "ItemCollection"), where("ruta", "==", route))
        :
        query(collection(db, "ItemCollection"))
    getDocs(queryCollection)
        .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
}, [route])

    return (
        <div className="container-fluid list-container">
            <div className="welcome">{greeting}</div>
            <div className="row div-container">
                { loading ?
                    <Loading />
                    : 
                        <ItemList products={products}/>
                } 
            </div>
        </div>
    )
}

export default ItemListContainer