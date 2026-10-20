import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavigationBar() {
  const [expandido, setExpandido] = useState(false);
  const location = useLocation();

  function cerrarMenu() {
    setExpandido(false);
  }

  function claseLink({ isActive }) {
    return isActive ? `nav-link ${styles.link} ${styles.activo}` : `nav-link ${styles.link}`;
  }

  return (
    <Navbar expand="md" expanded={expandido} variant="dark" className={styles.barra}>
      <Container>
        <Navbar.Brand className={styles.marca}>Casa Bruma</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" onClick={() => setExpandido(!expandido)} />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Link to="/" onClick={cerrarMenu} className={location.pathname === "/" ? `nav-link ${styles.link} ${styles.activo}` : `nav-link ${styles.link}`}>Inicio</Link>
            <NavLink to="/productos" onClick={cerrarMenu} className={claseLink}>Productos</NavLink>
            <NavLink to="/carrito" onClick={cerrarMenu} className={claseLink}>Carrito</NavLink>
            <NavLink to="/contacto" onClick={cerrarMenu} className={claseLink}>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;