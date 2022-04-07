import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
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
      </Routes>
    </div>
  </BrowserRouter>
);
}

export default App;