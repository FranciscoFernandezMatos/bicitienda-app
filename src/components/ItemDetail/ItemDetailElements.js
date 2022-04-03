import styled from 'styled-components';

export const Loading = styled.p`
    color: white;
`;

export const ItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 1rem auto;
    padding: .3rem;
    color: black;
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
    width: 220px;
    height: auto;
`;

export const Title = styled.h6`
    margin: .5rem;
    padding: .5rem;
    display: flex;
    align-items: center;
`;

export const Price = styled.h3`
    margin: .5rem;
    align-items: center;
`;

export const Description = styled.p`
    margin: .5rem;
    align-items: center;
    width: 400px;
`;

export const Button = styled.button`
    border-radius: .1rem;
    background: #22BFBF;
    padding: .5rem;
    color: white;
    border: thin solid #006C70;
    outline: none;
    cursor: pointer;
    transition: all 0.33s ease-in-out;
    text-decoration: none;
    z-index: 1000;

    &:hover {
        transition: all 0.33s ease-in-out;
        background: #FFD300;
        color:#006C70;
    }
`;