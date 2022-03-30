import React from 'react';
import { Greetings } from './ItemListContainerElements';
import {ItemList} from '../ItemList/ItemList';


const productsArray = [
    {id: 1, pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_904501-MLA32483696574_102019-O.jpg", title: 'Pedales Mtb Shimano M520 Spd C/ Calas', price: 49},
    {id: 2, pictureUrl: 'https://d2r9epyceweg5n.cloudfront.net/stores/071/624/products/cubierta-maxxis-pace-alambre-21-f5c25d01bd703b157116160669910778-640-0.jpg', title: 'Cubierta Maxxis Pace 29 x 2.10', price: 139},
    {id: 3, pictureUrl: 'https://image.dhgate.com/0x0s/f2-albu-g20-M00-4A-95-rBNaOGEp7AmAQi-jAALs_8jKfWM733.jpg/balugae-road-mountain-bike-asiento-asiento.jpg', title: 'Sillín Balugae Road MtB', price: 199},
    {id: 4, pictureUrl: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/628/448/products/inflador-giyo-gp-041-f99bb46096c31d7c9315603568420725-640-0.png', title: 'Inflador Giyo GP', price: 229},
    {id: 5, pictureUrl: 'https://www.sidi.com/img/cms/MTB%20FROSTE%202/FROSTE-2-posa.png', title: 'Calzado Sidi MtB Frost Gore 2', price: 419},
    {id: 6, pictureUrl: 'https://m.media-amazon.com/images/I/51kl-173XkL._AC_SX425_.jpg', title: 'Gyhuego - Luz delantera recargable por USB, 3 luces LED', price: 299}
];


const prom = new Promise((res) => {
    setTimeout(()=>{
        res(productsArray); 
    },2000)
});

export const ItemListContainer = ({greeting}) => {
    
    return (
        <>
        <Greetings>{greeting}</Greetings>
        <ItemList inventoryArray={prom}></ItemList>
        </>
    );
};

