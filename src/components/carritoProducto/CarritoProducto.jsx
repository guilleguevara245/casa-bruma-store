import productos from "../../data/productos";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import styles from "./carritoProducto.module.css"
import { Button } from "react-bootstrap";
import { useState } from "react";
import MensajeError from "../MensajeError";
function CarritoProducto({id,cantidad,setStorageProductos}) {
    const producto = productos.find(e => e.id === Number([id]));
    const [cantidadActual,setCantidadActual] = useState(cantidad)
    const [error,setError] = useState(false)
    const [contadorErrores, setContadorErrores] = useState(0);
    function onConfirmar(){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        carrito = carrito.filter(e => e.id !== Number(id));
        setStorageProductos(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    console.log(producto,Number(id),productos)
    function generarError(){
        setError(true) 
        setContadorErrores(contadorErrores+1)
    }
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
        setStorageProductos(carrito)
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
        setStorageProductos(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    return (<>
    {error && <MensajeError  key={contadorErrores} onConfirmar={onConfirmar}></MensajeError>}
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
                <div className={styles.contenedorDeControl}>
                    <div className={styles.contenedorDeControl}>
                        <Button variant="light"  onClick={()=>disminuirCantidad()}>-</Button>
                        <Button variant="light"  onClick={()=>aumentarCantidad()}>+</Button>
                    </div>
                </div>
                <Button variant="danger"  onClick={()=>generarError()}>x</Button>
            </div>
            <div className={styles.cantidad}> 
                <Card.Text>Cantidad: {cantidadActual}</Card.Text>
            </div>
        </div>
    </Card>
    </>
  )
}

export default CarritoProducto