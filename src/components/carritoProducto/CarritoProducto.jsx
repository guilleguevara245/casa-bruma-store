import productos from "../../data/prooductos";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import styles from "./carritoProducto.module.css"
function CarritoProducto({id,cantidad}) {
    const producto = productos.find(e => e.id === Number([id]));
    console.log(producto,Number(id),productos)
    return (
    <Card className={styles.contenedor}>
        <div className={styles.img_content}>
          <Image src={producto.imagen} thumbnail />
        </div>      
        <div className={styles.valores}>
            <Card.Title className={styles.titulo}>{producto.nombre}</Card.Title>
            <Card.Text>{producto.precio}</Card.Text>
        </div>
            <Card.Text>{cantidad}</Card.Text>

    </Card>
  )
}

export default CarritoProducto