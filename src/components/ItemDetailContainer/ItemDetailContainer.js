import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import {Spinner} from "react-bootstrap"
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css"
import { ProductsArray } from "../../mock/ProductsArray.js";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({});
    const [loading, setLoading] = useState (true)
    const initial = 1;
    
    const {idProduct} = useParams();


useEffect(() => {
    ProductsArray
        .then((resp)=> setProduct(resp.find(prod => prod.id === parseInt(idProduct))))
        .catch((err)=> console.log (err))
        .finally(()=> setLoading(false)) 
    }, []) 

    return (
        <div className="container-fluid item-container">
            <div className="row">
                { loading ?
                    <div className="spinner-container">
                        <div className="spinner-div">
                            <Spinner color="primary" animation="grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </div>
                    :
                    <ItemDetail initial={initial} stock={product.stock} product={product}/>               
                }
            </div>
        </div>
    )
}

export default ItemDetailContainer;