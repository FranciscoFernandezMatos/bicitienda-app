import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom";
import {useCartContext} from "../../context/CartContext";
import CartTable from "../CartTable/CartTable"
import TotalTable from "../TotalTable/TotalTable"
import "./Cart.css";


const Cart = () => {

    const {cartList, emptyCart} = useCartContext()

    return (
        <>
            {cartList.length > 0 
                ?
                <div className="container-fluid cart-container">
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 text-center">
                            <h1 className="title-cart">
                                CARRITO DE COMPRAS
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 d-flex justify-content-center">
                            <CartTable />
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6 col-xs-6 btnGo-container">
                            <Link to="/">
                                <Button className="btn-goShopping" variant="primary">Seguir Comprando</Button>
                            </Link>                            
                        </div>
                        <div className="col-lg-6 col-xs-6 btnEmpty-container">
                            <button className="btn-emptyCart" onClick={emptyCart}>Vaciar Carrito</button>
                        </div>
                    </div>
                    <div className="row">
                        <h2 className="caption-total text-center">
                            Hasta el momento en su carrito...
                        </h2>
                        <div className="col-lg-12 col-xs-12 d-flex justify-content-center">
                            <TotalTable />
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-lg-12 col-xs-12 text-center">
                            <Link to="/checkout">
                                <Button className="btn-endPurchase">Finalizar Compra</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                :
                <div className="text-center">
                    <h2 className="cart-text">El carrito de compras está vacío</h2>
                    <hr className="hr-cart"/>
                    <Link to="/">
                            <Button className="btn-back" variant="primary">Volver al Inicio</Button>
                    </Link>
                </div>
                } 
            </>
        )
}

export default Cart;