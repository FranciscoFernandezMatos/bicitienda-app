import React from 'react';
import { CartContainer, CartWrap, Greetings } from './ItemListContainerElements';


const ItemListContainer = (props) => {
    return (
        <CartContainer>
            <CartWrap>
                <Greetings>{props.greetings}</Greetings>
            </CartWrap>
        </CartContainer>
    );
};

export default ItemListContainer;