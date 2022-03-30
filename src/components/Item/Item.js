import React from 'react';
import {ItemWrap, Img, Title, Price, Button} from './ItemElements';
import {ItemCount} from '../ItemCount/ItemCount';

export const Item = ({pictureUrl, title, price, onAdd}) => {
        
    return (
        <ItemWrap>
                <Img><img width={100} src={pictureUrl} /></Img>
                <Title>{title}</Title>
                <Button>+ Info</Button>
                <Price>${price}</Price>
                
                <ItemCount stock={10} initial={0} onAdd={onAdd}/>
        </ItemWrap>
        );
};
