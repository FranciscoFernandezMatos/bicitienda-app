import { TiPlus, TiMinus } from "react-icons/ti";
import styled from 'styled-components';


export const ItemCountContainer = styled.div`
    position: relative;
    display: flex;
    top:0;
    margin: 0 auto;
    flex-direction: column;
    width : 20rem;
    height: 150px;
    background: #006C7099;
    border: thin solid #006C70;
    border-radius: .1rem;
`;

export const ItemCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    margin: .3rem;
    background: #22BFBF;
    border-radius: .1rem;
`;

export const CounterContainer = styled.div`
    display: flex;
    z-index: 1000;
    justify-content: space-between;
    height: 50px;
    background: linear-gradient(transparent, #E6F3FF);
    border-radius: .3rem;
`;

export const ItemCounterMinor = styled(TiMinus)`
        display: block;
        z-index: 500;
        color:  #006C70;
        margin-left: 2rem;
        transform: translate(-50%, 50%);
        transition: all .3s ease-in-out;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover {
        transition: all .3s ease-in-out;
        background: linear-gradient(transparent, #006C70);
        border-radius: 50%;
        color: #E6F3FF;
    }
`;

export const UnitsOf = styled.span`
    display: flex;
    width: 3rem;
    font-size: 1.6rem;
    color: #006C70;
    margin: 0.3rem;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ItemCounterPlus = styled(TiPlus)`
    display: block;
    color: #006C70;
    margin-left: 2rem;
    z-index: 500;
    transform: translate(-50%, 50%);
    transition: all 0.3s ease-in-out;
    font-size: 1.6rem;
    cursor: pointer;

    &:hover {
        transition: all .3s ease-in-out;
        background: linear-gradient(transparent, #006C70);
        border-radius: 50%;
        color: #E6F3FF
    }
`;

export const ItemAddCart = styled.button`
    height: 3rem;
    margin: 1rem;
    color: #006C70;
    background: #E6F3FF;
    border-radius: .3rem;
    cursor: pointer;
    transition: all .3s ease-out;

    &:hover {
        transition: all .3s ease-out;
        background: linear-gradient(#E6F3FF, transparent, #006C70);
        color: #E6F3FF
}
`
