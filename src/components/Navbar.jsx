import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Casa Bruma</Navbar.Brand>
        <Nav>
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/carrito" className="nav-link">Carrito</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;