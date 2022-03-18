import React from 'react';
import { CartContainer, CartWrap, CartList, CartItem } from './ItemListContainerElements';


const ItemListContainer = () => {
    return (
        <CartContainer>
                <CartWrap>
                    <CartList>
                        <CartItem></CartItem>
                    </CartList>
                </CartWrap>
        </CartContainer>
    );
};

export default ItemListContainer;