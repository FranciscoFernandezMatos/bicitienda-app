import React , {useState,useEffect} from 'react';
import {ItemContainer, Loading} from './ItemListElements';
import {Item} from '../Item/Item';



export const ItemList = ({inventoryArray}) => {
    const initial = [];
    const [items, setItems] = useState([initial]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        inventoryArray
            .then((item)=>{
                setItems(item);
                setShow(!show);
        })
            .catch(()=> {
                console.log("Error")
            });
    },[]);

    const onAdd = (contador) => {
        if(contador === 0){
            console.log(`No agregaste unidades.`);
        } else if (contador === 1) {
            console.log(`Llevas ${contador} unidad.`);
        } else {
            console.log(`Llevas ${contador} unidades`);
        }
    }

    return (
        <ItemContainer>
            {
                show ? items.map((element, i) => {
                    return (
                        <Item {...element} onAdd={onAdd} key={i} ></Item> 
                    );
                    })
                : <Loading>Espere un momento mientras carga la página...</Loading>
            }
        </ItemContainer>
    );
};


