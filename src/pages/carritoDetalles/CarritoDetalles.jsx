import { useState } from "react";
import CarritoProducto from "../../components/carritoProducto/CarritoProducto";
import styles from "./carritoDetalles.module.css"

import Button from 'react-bootstrap/Button';
import MensajeConfirmacion from "../../components/MensajeConfirmacion";
import IrAtras from "../../components/irAtras/IrAtras";

export default function CarritoDetalles() {
    const [storageProductos, setStorageProductos] =useState(JSON.parse(localStorage.getItem("carrito")) || []); 
    const [confirmar,setConfirmar] =useState(false)
    const [contadoresConfirmacion,setContadoresConfirmacion] =useState(0)
    function onConfirmar(){
        localStorage.setItem("carrito", JSON.stringify([]));
        setStorageProductos([])
    }
    function confirmarCompra(){
        if(localStorage.getItem("carrito") && JSON.parse(localStorage.getItem("carrito")).length>0){
  
            setConfirmar(true)
            setContadoresConfirmacion(contadoresConfirmacion+1)
        }
    }
    return (
        <>
        {confirmar && <MensajeConfirmacion onConfirmar={onConfirmar} key={contadoresConfirmacion}></MensajeConfirmacion>}
    <IrAtras></IrAtras>
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
            <p>Total :${storageProductos.reduce((total, e) => total + (Number(e.precio) *e.cantidad), 0)} ARS</p>
            <Button variant="primary" onClick={()=>confirmarCompra()}>Confirmar</Button>
        </div>
       
    </div>
    </>
  )
}
