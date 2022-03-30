import React , {useState} from 'react';
import {ItemCountContainer, ItemCardContainer, CounterContainer, ItemCounterMinor, UnitsOf, ItemCounterPlus, ItemAddCart} from './ItemCountElements';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const handlerClickAdd = () => {
        if(contador < stock) setContador (contador + 1);
    };

    const handlerClickSubstract = () => {
        if(contador > 0) setContador( contador - 1);
    }

    const handlerAddToCart = () => {
        onAdd (contador);
    }

    return (
        <ItemCountContainer>
            <ItemCardContainer>
                <CounterContainer>
                    <ItemCounterMinor onClick={handlerClickSubstract}/>
                    <UnitsOf>{contador}</UnitsOf>
                    <ItemCounterPlus onClick={handlerClickAdd}/>
                </CounterContainer>
            </ItemCardContainer>
            <ItemAddCart  onClick={handlerAddToCart}>Agregar al Carrito</ItemAddCart>
        </ItemCountContainer>
    )
};