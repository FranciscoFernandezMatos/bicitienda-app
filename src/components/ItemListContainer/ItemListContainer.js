import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ProductsArray } from "../../mock/ProductsArray.js";
import { Spinner } from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";

function ItemListContainer ({greeting}) {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)

    const {route} = useParams();

    useEffect(() => {
        if (route) {
            ProductsArray
            .then((resp)=> setProducts(resp.filter(prod => prod.ruta === route)))
            .catch((err)=> console.log (err))
            .finally(()=> setLoading(false))            
        } else {
            ProductsArray
            .then((resp)=> setProducts(resp))
            .catch((err)=> console.log (err))
            .finally(()=> setLoading(false))            
        }
    }, [route]) 

    return (
        <div className="container-fluid list-container">
            <div className="welcome">{greeting}</div>
            <div className="row div-container">
                    { loading ?
                        <Spinner/>
                        : 
                        <ItemList products={products}/>
                    } 
            </div>
        </div>
    )
}

export default ItemListContainer