import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
