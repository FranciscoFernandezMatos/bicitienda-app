import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import { ReactComponent as Logo } from "../../images/bike.svg";

const Navbar = () => {
return (
    <>
        <Nav>
            <Logo /> 
            <Bars />
            <NavMenu>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/about" >
                    Bici Tienda
                </NavLink>
                <NavLink to="/products" >
                    Productos
                </NavLink>
                <NavLink to="/contact-us" >
                    Contacto
                </NavLink>
                <NavLink to="/sign-up" >
                    Suscríbete
                </NavLink>
            </NavMenu>
            
            <NavBtn><NavBtnLink to="/sign-in">Ingresa</NavBtnLink>
            </NavBtn>
        </Nav>  
    </>
);
};

export default Navbar;