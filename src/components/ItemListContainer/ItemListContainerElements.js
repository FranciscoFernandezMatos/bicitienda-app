import styled from 'styled-components';

export const CartContainer = styled.aside`
    position: relative;
    top: 0;
    z-index: 900;
    width: 100%;
    height: calc(100vh - 50px);
    border: thin double white;
    background: #006C70AA;
    align-items: flex-start;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
    }
`;

export const CartWrap = styled.div`
    position: relative;
    background: #E6F3FF;
    height: 80vh;
    display: flex;
    align-items: center:;
    margin: .1rem;
    border: thin solid #006C70;
    border-radius: .1rem;
`;

export const Greetings = styled.h4`
    display: flex;
    justify-content: center;
    margin: 1.1rem auto;
    padding-top: .5rem;
    font-size: 1rem;
    animation: color-change 12s infinite;

    @keyframes color-change {
        0% { color: #006C70; }
        50% { color: #E6F3FF; }
        100% { color: #006C70; }
`;
