import React from 'react';
import { CartContainer, CartWrap, Greetings } from './ItemListContainerElements';


const ItemListContainer = ({greeting}) => {
    return (
        <CartContainer>
            <CartWrap>
                <Greetings>{greeting}</Greetings>
            </CartWrap>
        </CartContainer>
    );
};

export default ItemListContainer;