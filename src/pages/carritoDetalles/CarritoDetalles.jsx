import { useState } from "react";
import CarritoProducto from "../../components/carritoProducto/CarritoProducto";
import styles from "./carritoDetalles.module.css"

import Button from 'react-bootstrap/Button';
export default function CarritoDetalles() {
    const [storageProductos, setStorageProductos] =useState(JSON.parse(localStorage.getItem("carrito")) || []); 
    console.log(storageProductos)
    //Object.entries > converir un objeto  en un array
    return (
    <div className={styles.contenedor}>
        <div className={styles.titulo}>
            <h1>Carrito</h1>
        </div>
        <div >
            {storageProductos.map((producto) =>
            <CarritoProducto
                id={producto.id}
                cantidad={producto.cantidad}
                setStorageProductos ={setStorageProductos}
            />
            )}
            
        </div>
        <div className={styles.total}>
            <p>Total :{storageProductos.reduce((total, e) => total + (Number(e.precio) *e.cantidad), 0)}</p>
            <Button variant="primary">Contactar</Button>
        </div>

    </div>
  )
}
