import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #006C70;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 calc((100vw - 1200px)/2);
    z-index: 1000;
`;

export const NavLink = styled(Link)`
    color: #E6F3FF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #22BFBF;
        transition: all 0.3s ease;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #E6F3FF;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 50%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: .5rem;
    background: #22BFBF;
    padding: .5rem;
    color: #E6F3FF;
    border: none;
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

export const LogoContainer = styled.div`
    display: flex;
    width: 50px;
`

