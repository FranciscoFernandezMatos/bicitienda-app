
import React from 'react';
import {ItemContainer} from './ItemListElements';
import {Item} from '../Item/Item';



export const ItemList = ({products}) => {
    
    return (
        <ItemContainer>
            {products.map((product) => (
        <Item key={product.id} product={product} />
        ))}
        </ItemContainer>
    );
};
