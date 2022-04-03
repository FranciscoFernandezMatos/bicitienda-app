import React from 'react';
import {ItemWrap, Img, Title, Price, Description, Button} from './ItemDetailElements';

export const ItemDetail = ( {pictureUrl,title,price,description}) => {
        
        return (
                <ItemWrap>
                        <Img><img width={100} src={pictureUrl} alt={title} /></Img>
                        <Title>Pedales Mtb Shimano M520 Spd C/ Calas</Title>
                        <Price>${price}</Price>
                        <Description>{description}</Description>
                        <Button>Agregar</Button>
                </ItemWrap>
        );
};