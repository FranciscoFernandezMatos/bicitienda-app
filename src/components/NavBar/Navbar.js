import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, LogoContainer} from './NavBarElements';
import { ReactComponent as Logo } from "../../images/bike.svg";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    const categories = [
        { name:"Vestimenta", route: "categories/clothing", id: 1},
        { name:"Seguridad", route: "categories/safety", id: 2 }, 
        { name:"Accesorios", route: "categories/equipment", id: 3 },
        { name:"Repuestos", route: "categories/spareParts", id: 4 }
    ] 

return (
        <Nav>
            <NavLink to="/">
            <LogoContainer><Logo/></LogoContainer>
            <Bars />
            </NavLink>    
            <NavMenu>
                {categories.map((element) => {
                    return (
                        <NavLink key={element.id} to={element.route}>{element.name}</NavLink>
                    )
                })}
            </NavMenu>    
                <NavBtn><NavBtnLink to="/ingreso">Entrar</NavBtnLink></NavBtn>
                <NavLink to="/cart"><CartWidget/></NavLink>
            
        </Nav>  
);
};

export default Navbar;