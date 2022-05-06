import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from "./context/CartContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import Cart from "./components/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";
import Top from "./components/ToTheTopButton/ToTheTopButton";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer greeting={"Bike Shop Bici Tienda - Todo para tu próxima Aventura!"}/>}
            />
            <Route
              exact
              path="/categorias/:route"
              element={<ItemListContainer greeting={"Bike Shop Bici Tienda - Todo para tu próxima Aventura!"}/>}
            />          
            <Route
              exact
              path="/detalle/:idProduct"
              element={<ItemDetailContainer/>}
            />
            <Route
              exact
              path="/cart"
              element={<Cart/>}
            /> 
            <Route
              exact
              path="/checkout"
              element={<Checkout/>}
            />
          </Routes>
          <Top />
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;