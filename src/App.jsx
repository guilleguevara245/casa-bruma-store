import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
}

export default App;