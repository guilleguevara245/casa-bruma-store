import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Inicio.module.css";
import productos from "../data/productos";

function Inicio() {
  const destacados = productos.filter(producto => producto.id === 5 || producto.id === 11 || producto.id === 15);

  return (
    <>
      <div className={styles.portada}>
        <div className={styles.capa}>
          <img src="/img/emblema-claro-casa-bruma.png" alt="Logo de Casa Bruma" style={{ width: "150px", maxWidth: "100%" }} />
          <h1>Casa Bruma</h1>
          <p>Casa Bruma es un refugio para tu guardarropa. Indumentaria de líneas simples y colores suaves, como la bruma de la mañana, para vestirte con comodidad y estilo.</p>
          <Button as={Link} to="/productos" variant="outline-light">Explorar la colección</Button>
        </div>
      </div>
      <Container className="py-5">
        <Row className="text-center">
          <Col md={4} className={`mb-4 ${styles.beneficio}`}>
            <img src="/img/icono-envios.png" alt="Icono de un camión de envíos" className={styles.icono} />
            <h2>Envíos a todo el país</h2>
            <p className="mb-0">Recibí tu pedido en la puerta de tu casa.</p>
          </Col>
          <Col md={4} className={`mb-4 ${styles.beneficio}`}>
            <img src="/img/icono-cambios.png" alt="Icono de cambios" className={styles.icono} />
            <h2>Cambios sin costo</h2>
            <p className="mb-0">Si no te queda bien, lo cambiás sin vueltas.</p>
          </Col>
          <Col md={4} className={`mb-4 ${styles.beneficio}`}>
            <img src="/img/icono-cuotas.png" alt="Icono de una tarjeta de pago" className={styles.icono} />
            <h2>Pagá en cuotas</h2>
            <p className="mb-0">Elegí cómo pagar con tarjeta, sin interés.</p>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <h2 className={`text-center mb-4 ${styles.tituloSeccion}`}>Destacados</h2>
        <Row>
          {destacados.map(producto => (
            <Col md={4} className="mb-4" key={producto.id}>
              <Card>
                <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                <Card.Body className="text-center">
                  <Card.Title className={styles.nombreProducto}>{producto.nombre}</Card.Title>
                  <Card.Text>${producto.precio}</Card.Text>
                  <Button as={Link} to={`/producto/${producto.id}`} variant="outline-dark" className={styles.botonContorno}>Ver detalle</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button as={Link} to="/productos" variant="dark" className={styles.boton}>Ver todos los productos</Button>
        </div>
      </Container>
    </>
  );
}

export default Inicio;
