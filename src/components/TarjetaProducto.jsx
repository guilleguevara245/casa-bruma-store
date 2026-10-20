import styles from "./tarjetaProducto.module.css"
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const stockSiHay = (producto) => {
  return producto.stock > 0 ;
};

const TarjetaProducto = ({ producto }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={producto.imagen} className={styles.tarjetaImg} />
      <Card.Body>
        <Card.Title className={styles.tarjetaTitulo}>{producto.nombre}</Card.Title>
        <Card.Text>
          <small className="text-muted">{producto.categoria}</small>
        </Card.Text>
        <Card.Text className={styles.tarjetaDesc}>{producto.descBreve}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ListGroup variant="flush">
          <ListGroup.Item className={styles.footerItem}>${producto.precio}</ListGroup.Item>
          <ListGroup.Item className={styles.footerItem}>{stockSiHay(producto) ? producto.stock  : "No hay stock disponible"}</ListGroup.Item>
        </ListGroup>
      </Card.Footer>
      {stockSiHay(producto) ? <Button variant="dark" size="md">
        <Link to="/carrito" className={styles.Link}>Agregar al carrito</Link>
      </Button> :
      <Button variant="secondary" size="md" className={styles.Link}>
        No hay stock disponible
      </Button>
      }
      <Button variant="light" size="md">
        <Link to={`/producto/${producto.id}`} className={styles.LinkBtnBlanco}>Ir al producto</Link>
      </Button>
    </Card>
  );
};

export default TarjetaProducto;
