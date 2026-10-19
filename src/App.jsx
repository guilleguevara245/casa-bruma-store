import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ProductoDetalles from "./pages/productoDetalles/ProductoDetalles";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarritoDetalles from "./pages/carritoDetalles/CarritoDetalles";

function App() {
  return <>


    <NavigationBar/>
      <Routes>
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="/producto/:id" element={<ProductoDetalles/>}> </Route>
          <Route path="/carrito" element={<CarritoDetalles/>}> </Route>
      </Routes>
   
  </>;
}

export default App;