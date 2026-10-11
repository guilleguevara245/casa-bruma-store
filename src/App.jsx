import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Inicio from "./pages/Inicio.jsx";
import Productos from "./pages/Productos.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;