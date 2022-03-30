import styled from 'styled-components';

export const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem auto;
    padding: .3rem;
    align-items: center;
    width: 360px;
    height: auto;
    background: white; 
`;

export const Img = styled.div`
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: auto;
`;

export const Title = styled.h5`
    margin: .5rem;
    padding: .5rem;
    display: flex;
    align-items: center;
`;

export const Price = styled.h3`
    margin: .5rem;
    align-items: center;
`;

export const Button = styled.button`
    border-radius: .1rem;
    background: #22BFBF;
    padding: .1rem;
    color: #E6F3FF;
    border: thin solid #E6F3FF;
    outline: none;
    cursor: pointer;
    transition: all 0.33s ease-in-out;
    text-decoration: none;
    z-index: 1000;

    &:hover {
        transition: all 0.33s ease-in-out;
        background: #FFD300;
        color: #006C70;
    }
`;