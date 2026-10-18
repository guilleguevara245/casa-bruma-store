import productos from "../../data/prooductos";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import styles from "./carritoProducto.module.css"
import { Button } from "react-bootstrap";
import { useState } from "react";
function CarritoProducto({id,cantidad}) {
    const producto = productos.find(e => e.id === Number([id]));
    const [cantidadActual,setCantidadActual] = useState(cantidad)
    console.log(producto,Number(id),productos)
    function disminuirCantidad(){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        if(cantidadActual>0){
            carrito = carrito.map(e =>
                e.id === Number(id)
                ? { ...e, cantidad: cantidadActual }
                : e                            
            );          
            setCantidadActual(cantidadActual>1?cantidadActual-1:1)
        }
        else{
            carrito = carrito.map(e =>
                e.id === Number(id)
                ? { ...e, cantidad: 0 }
                : e                            
            );
            setCantidadActual(1)
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    function aumentarCantidad(){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        if(cantidadActual<producto.stock){
            carrito = carrito.map(e =>
                e.id === Number(id)
                ? { ...e, cantidad: cantidadActual }
                : e                            
            );
            
            setCantidadActual(cantidadActual+1)
        }
        else{
            carrito = carrito.map(e =>
                e.id === Number(id)
                ? { ...e, cantidad: cantidadActual }
                : e                            
            );
            setCantidadActual(cantidadActual)
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
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
                    {cantidadActual>1 && <Card.Text>x ${producto.precio *cantidadActual } ARS</Card.Text>}
                </div>
                <div>
                    <Button variant="light"  onClick={()=>disminuirCantidad()}>-</Button>
                    <Button variant="light"  onClick={()=>aumentarCantidad()}>+</Button>
                </div>

            </div>
            <div className={styles.cantidad}> 
                <Card.Text>Cantidad: {cantidadActual}</Card.Text>
            </div>
        </div>
    </Card>
  )
}

export default CarritoProducto