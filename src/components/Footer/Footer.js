import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="container-fluid footer-container">
            <div className="row">
                <div className="col-lg-4 col-xs-12 newsletter-container">
                    <h2>
                        Recibe nuestro
                        <br/>
                        Newsletter
                    </h2>
                    <input type="email" placeholder="E-MAIL"/>
                    <input type="submit" value="ENVIAR"/> 
                </div>                   
                <div className="col-lg-6 col-xs-6 categories-container">
                        <h2>
                            Categorias
                        </h2>
                        <h3 className="category-link">
                            <Link to="/categorias/vestimenta" className="link">Vestimenta</Link>
                        </h3>
                        <h3 className="category-link">
                            <Link to="/categorias/seguridad" className="link">Seguridad</Link>
                        </h3>
                        <h3 className="category-link">
                            <Link to="/categorias/accesorios" className="link">Accesorios</Link>
                        </h3>
                        <h3 className="category-link">
                            <Link to="/categorias/repuestos" className="link">Repuestos</Link>
                        </h3>                        
                    </div>                    
                    <div className="col-lg-4 col-xs-12 contact-container">
                        <h2>
                            Contacto
                        </h2>
                        <h3>
                            +54 9 11-6964-1234
                        </h3>
                        <h3>
                            San Isidro, Buenos Aires. Argentina                        </h3>
                        <h3>
                            bici-tienda.bike-store@hotmail.com
                        </h3>
                    </div>
                </div>             
            <div className="row">
                <div className="col-lg-12 col-xs-12 social-container">
                    <hr className="footer-hr"/>
                    <FontAwesomeIcon icon={faInstagram}/>    
                    <FontAwesomeIcon icon={faFacebook} className="facebook-icon"/>
                    <FontAwesomeIcon icon={faGithub}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-xs-12 text-center copyright-container">
                    <h5 className="copyright">
                        © 2022 | E STORE | ARGENTINA
                    </h5>
                    <h5>
                        Creado por Francisco Fernández Matos
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Footer