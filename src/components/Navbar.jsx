import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>Casa Bruma</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Inicio</NavLink>
            <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Productos</NavLink>
            <NavLink to="/carrito" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Carrito</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;