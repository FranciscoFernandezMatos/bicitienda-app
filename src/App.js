import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Topbar from './components/Topbar';
import Home from './pages';
import Tienda from './pages/tienda';
import Vestimenta from './pages/vestimenta';
import Calzado from './pages/calzado';
import Seguridad from './pages/seguridad';
import Accesorios from './pages/accesorios';
import Outdoors from './pages/outdoors';
import Buscador from './pages/buscador';
import Carrito from './pages/carrito';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <ItemListContainer />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/tienda" component={Tienda} />
        <Route path="/vestimenta" component={Vestimenta} />
        <Route path="/calzado" component={Calzado} />
        <Route path="/seguridad" component={Seguridad} />
        <Route path="/accesorios" component={Accesorios} />
        <Route path="/outdoors" component={Outdoors} />
        <Route path="/buscador" component={Buscador} />
        <Route path="/carrito" component={Carrito} />
      </Routes>
    </Router>
  );
}

export default App;
