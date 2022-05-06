import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import logo from "../../images/logo.png";
import "./NavBar.css";

const NavBar = () => {
    return(
        <Navbar className="nav-container sticky-top" bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className="link"><img src={logo} className="logo img-fluid" alt="logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="nav" id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="link">Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/categorias/vestimenta" className="link">Vestimenta</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/seguridad" className="link">Seguridad</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/accesorios" className="link">Accesorios</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/categorias/repuestos" className="link">Repuestos</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/" className="link">Todos</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/cart" className="link"><CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;