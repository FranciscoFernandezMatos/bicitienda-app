import styled from 'styled-components';

export const CartContainer = styled.aside`
    position: fixed;
    z-index: 900;
    width: 20%;
    height: 50%;
    border: thin double white;
    background: #006C70;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    top: 50px;
    right: 0;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        width: 500%;
        height: 35%;
    }
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
    }
`;

export const CartWrap = styled.div`
    background: #E6F3FF;
    display: flex;
    height: 100%;
    border: medium solid #006C70;
`;

export const Greetings = styled.h3`
    display: flex;
    margin: 0 auto;
    padding-top: .5rem;
    font-size: 1rem;
    animation: color-change 3s infinite;

    @keyframes color-change {
        0% { color: #006C70; }
        50% { color: #22BFBF; }
        100% { color: #006C70; }
`

// export const CartList = styled.ul`
//     display: grid;
//         grid-template-columns: 1fr;
//         grid-template-rows: repeat(4, 30px);
//         text-align: center;
//         @media screen and (max-width: 480px) {
//             grid-template-rows: repeat(4, 30px);
//         }
// `;

// export const CartItem = styled.li`
//     width: 100%;
//     list-style: none;

// `;
