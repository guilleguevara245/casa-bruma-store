import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/productos/Productos.jsx";
import ProductoDetalles from "./pages/productoDetalles/ProductoDetalles";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoDetalles from "./pages/carritoDetalles/CarritoDetalles";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";

function App() {
  return <>


    <NavigationBar/>
      <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetalles/>}> </Route>
          <Route path="/carrito" element={<CarritoDetalles/>}> </Route>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
   
  </>;
}
export default App;
