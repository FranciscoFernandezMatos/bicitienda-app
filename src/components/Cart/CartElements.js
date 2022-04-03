import styled from 'styled-components';

export const CartWrap = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    border: thin solid black;
    width: 320px;
    background: yellow;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

`;
