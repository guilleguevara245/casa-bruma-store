import styles from "./tarjetaProducto.module.css"
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const stockSiHay = (producto) => {
  return producto.stock > 0 ;
};

const TarjetaProducto = ({ producto,setRebotar }) => {
  const [aviso, setAviso] = useState(null);

  // El aviso del boton vuelve al texto original despues de un momento
  useEffect(() => {
    if (!aviso) return;
    const timer = setTimeout(() => setAviso(null), 2500);
    return () => clearTimeout(timer);
  }, [aviso]);

  // Suma una unidad del producto al carrito, sin pasarse del stock
  const agregarAlCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")); //Shotout a elias que hizo esto ;D
    const item = carrito.find((e) => e.id === producto.id);

    if (!item) {
      carrito.push({ id: producto.id, cantidad: 1, precio: producto.precio });
      setRebotar(prev => prev+1)
    } else if (item.cantidad < producto.stock) {
      item.cantidad += 1;
      setRebotar(prev => prev+1)
    } else {
      setAviso("Sin más stock");
      return;
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    setAviso("Agregado al carrito");
  };

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
      {stockSiHay(producto) ? <Button variant="dark" size="md" className={styles.Link} onClick={agregarAlCarrito}>
        {aviso ?? "Agregar al carrito"}
      </Button> :
      <Button variant="secondary" size="md" className={styles.Link}>
        No hay stock disponible
      </Button>
      }
      <Button variant="light" size="md" className={styles.LinkBtnBlanco}>
        <Link to={`/producto/${producto.id}`} className={styles.LinkBtnBlanco}>Ir al producto</Link>
      </Button>
    </Card>
  );
};

export default TarjetaProducto;
