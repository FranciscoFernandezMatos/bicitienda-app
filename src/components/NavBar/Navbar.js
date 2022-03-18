import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, LogoContainer} from './NavBarElements';
import { ReactComponent as Logo } from "../../images/bike.svg";
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
return (
    <>
        <Nav>
            <NavLink to="/">
            <LogoContainer><Logo /></LogoContainer>
            <Bars />
            </NavLink>    
            <NavMenu>
                <NavLink to="/tienda">Tienda</NavLink>
                <NavLink to="/vestimenta">Vestimenta</NavLink>
                <NavLink to="/calzado">Calzado</NavLink>
                <NavLink to="/seguridad">Seguridad</NavLink>
                <NavLink to="/accesorios">Accesorios</NavLink>
                <NavLink to="/outdoors">Outdoors</NavLink>
                <NavLink to="/buscador">🔍️</NavLink>
                <NavBtn><NavBtnLink to="/ingreso">Entrar</NavBtnLink></NavBtn>
                <NavLink to="/carrito"><CartWidget/></NavLink>
            </NavMenu>
        </Nav>  
    </>
);
};

export default Navbar;