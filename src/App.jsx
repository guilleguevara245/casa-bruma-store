import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ProductoDetalles from "./pages/productoDetalles/ProductoDetalles";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>

    <BrowserRouter>
    <NavigationBar/>
      <Routes>
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="/:id" element={<ProductoDetalles/>}> </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;