import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Casa Bruma</Navbar.Brand>
        <Nav>
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Inicio</NavLink>
          <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Productos</NavLink>
          <NavLink to="/carrito" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Carrito</NavLink>
          <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-link activo" : "nav-link"}>Contacto</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;