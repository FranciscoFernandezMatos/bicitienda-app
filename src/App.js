import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import Topbar from './components/Topbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './components/Cart/Cart';
import {Error} from './components/Error/Error';


const App = () => {
  return (
    <Router>
      <Topbar/>
      <Navbar/>
      <ItemDetailContainer/>
      <Routes>
        <Route path="/" exact element={<ItemListContainer greeting={"Bike Shop BiciTienda - Todo para tu próxima Aventura"}/>} />
        <Route path="/categories/:name" element={<ItemListContainer greeting={"Bike Shop BiciTienda - Todo para tu próxima Aventura"}/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
