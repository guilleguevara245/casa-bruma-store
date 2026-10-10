import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  const [expandido, setExpandido] = useState(false);

  function cerrarMenu() {
    setExpandido(false);
  }

  return (
    <Navbar expand="md" expanded={expandido}>
      <Container>
        <Navbar.Brand>Casa Bruma</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" onClick={() => setExpandido(!expandido)} />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <NavLink to="/" end onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Inicio</NavLink>
            <NavLink to="/productos" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Productos</NavLink>
            <NavLink to="/carrito" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Carrito</NavLink>
            <NavLink to="/contacto" onClick={cerrarMenu} className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;