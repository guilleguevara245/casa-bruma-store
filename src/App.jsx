import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/productos/Productos.jsx";
import ProductoDetalles from "./pages/productoDetalles/ProductoDetalles";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoDetalles from "./pages/carritoDetalles/CarritoDetalles";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import styles from "./App.module.css";

function App() {
  const [modoOscuro, setModoOscuro] = useState(localStorage.getItem("modo") === "oscuro");

  function alternarModo() {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    localStorage.setItem("modo", nuevoModo ? "oscuro" : "claro");
  }

  return <div className={`${styles.app} ${modoOscuro ? styles.oscuro : ""}`} data-bs-theme={modoOscuro ? "dark" : "light"}>


    <NavigationBar modoOscuro={modoOscuro} alternarModo={alternarModo}/>
      <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetalles/>}> </Route>
          <Route path="/carrito" element={<CarritoDetalles/>}> </Route>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
   
  </div>;
}
export default App;
