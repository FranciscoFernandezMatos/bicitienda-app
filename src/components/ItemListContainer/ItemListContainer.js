import React, { useEffect, useState } from 'react';
import {ItemList} from '../ItemList/ItemList';
import { Greetings } from './ItemListContainerElements';
import {ProductsArray} from '../../mock/ProductsArray';

const promise = new Promise((res, rej) => {
    setTimeout(()=>{
        res(ProductsArray); 
    }, 2000)
});

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        promise
          .then((products) => {
            setProducts(products);
          })
          .catch((error) => {
            console.error("error: ", error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
    
    
    return (
        <>
        <Greetings>{greeting}</Greetings>
        <ItemList products={products}></ItemList>
        </>
    );
};

