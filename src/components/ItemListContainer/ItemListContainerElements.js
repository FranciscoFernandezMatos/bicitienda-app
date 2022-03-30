import styled from 'styled-components';

export const Greetings = styled.h1`
    display: flex;
    justify-content: center;
    margin: .3rem auto;
    font-size: 1.3rem;
    animation: color-change 9s infinite;

    @keyframes color-change {
        0% { color: #006C70; }
        50% { color: #22BFBF; }
        100% { color: #006C70; }
`;
