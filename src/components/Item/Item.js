import React from 'react';
import {ItemWrap, Img, Title, Price, Button} from './ItemElements';

export const Item = ({product}) => {
        
        return (
                <ItemWrap>
                        <Img><img width={100} src={product.pictureUrl} alt={product.title} /></Img>
                        <Title>{product.title}</Title>
                        <Price>${product.price}</Price>
                        <Button>+ Info</Button>
                </ItemWrap>
        );
};
