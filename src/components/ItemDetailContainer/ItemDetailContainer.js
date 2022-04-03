import {useState, useEffect} from 'react';
import {ProductsArray} from '../../mock/ProductsArray';
import {ItemDetail} from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom' 
import { Loading } from './ItemDetailContainerElements'


export const ItemDetailContainer = () => {
    const [product,setProduct] = useState({});
    const [loading, setLoading] = useState(true)
    
    const {idProduct} = useParams();

    const initial = 1;

    useEffect(() => {
        ProductsArray
        .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
        .catch((err)=> console.log (err))
        .finally(()=> setLoading(false)) 
    }, [idProduct]) 

    return (
        <div className="container-fluid item-container">
            <div className="row">
                { loading ?
                    <Loading/>
                    :
                    <ItemDetail initial={initial} stock={product.stock} product={product}/>               
                }
            </div>
        </div>
    )
}
