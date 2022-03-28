import React from 'react';
import { CartContainer, CartWrap, Greetings } from './ItemListContainerElements';
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = ({greeting}) => {
    const onAdd = (contador) => {
        if(contador === 0){
            const preventDefault = (e) => e.preventDefault();
            console.log(`No agregaste unidades.`);
        } else if (contador === 1) {
            console.log(`Llevas ${contador} unidad.`);
        } else {
            console.log(`Llevas ${contador} unidades`);
        }
    }

    return (
        <CartContainer>
            <Greetings>{greeting}</Greetings>
            <CartWrap>
                <ItemCount stock={10} initial={0} onAdd={onAdd} />
            </CartWrap>
        </CartContainer>
    );
};

export default ItemListContainer;