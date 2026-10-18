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
        <div className={styles.contenedor_valores}>
            <div className={styles.valores}>
                <Card.Title>{producto.nombre}</Card.Title>
                <div className={styles.precios}>
                    <Card.Text>${producto.precio} ARS</Card.Text>
                    {cantidad>1 && <Card.Text>x ${producto.precio *cantidad } ARS</Card.Text>}
                </div>

            </div>
            <div className={styles.cantidad}> 
                <Card.Text>Cantidad: {cantidad}</Card.Text>
            </div>
        </div>
    </Card>
  )
}

export default CarritoProducto