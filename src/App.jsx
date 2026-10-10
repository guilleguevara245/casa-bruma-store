import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./pages/Inicio";
import ProductoDetalles from "./pages/productoDetalles/ProductoDetalles";


function App() {
  return <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Inicio/>}> </Route>
          <Route path="/:id" element={<ProductoDetalles/>}> </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;