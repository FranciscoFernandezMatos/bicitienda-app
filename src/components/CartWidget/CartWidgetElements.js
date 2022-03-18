import {FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';

export const CartWidget = styled(FaCartPlus)`
        display: block;
        position: absolute;
        top: 0;
        z-index: 1000;
        right: calc((100vw - 1200px)/2);;
        transform: translate(-50%, 50%);
        transition: all 0.33s ease-in-out;
        font-size: 1.5rem;
        cursor: pointer;
    
        &:hover {
        transition: all 0.33s ease-in-out;
        background:  #006C70;
        color: #FFD300;
    }
`;