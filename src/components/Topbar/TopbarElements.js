import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const TopbarContainer = styled.aside`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: #006C70;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
    color: #E6F3FF;
`;

export const Icon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    font-size: 1.5rem;
    cursor: pointer;        
    background: transparent;
    outline: none;
`;

export const TopbarWrap = styled.div`
    color: #E6F3FF;
`

export const TopbarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 60px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(8, 60px);
    }
`;



export const TopbarLinks = styled(LinkS)`
color: #E6F3FF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        color: #22BFBF;
        transition: all 0.3s ease;
    }
`;

export const TopbarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const TopbarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #FFD300;
    white-space: nowrap;
    padding: 1rem 2rem;
    color: #006C70;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #006C70;
        color: #FFD300;
    }
`;


