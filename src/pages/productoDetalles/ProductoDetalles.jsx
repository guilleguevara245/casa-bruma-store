import { useParams } from "react-router-dom"
import styles from "./productoDetalles.module.css"
import productos from "../../data/prooductos";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

import Image from 'react-bootstrap/Image';
function ProductoDetalles() {
    //aplico renderizador condicional "producto.stock == 1 &&"
    const {id} =useParams();
    const [cantidad,setCantidad] =useState(1)
    const producto= productos.find(e=> e.id ==id)

 function agregarLocalStorage() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));

    if (carrito == null) {
      carrito = [];
    }

    if (!carrito.some(e => e.id === Number(id))) {
      carrito.push({ id: Number(id), cantidad: cantidad });
    } else {
      carrito = carrito.map(e =>
        e.id === Number(id)
          ? { ...e, cantidad: cantidad }
          : e
      );
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  return (
    <div className={styles.producto}>
        <div className={styles.img_content}>
          <Image src={producto.imagen} thumbnail />
        </div>
        <div className={styles.producto_contenedor}>
            <div className={styles.encabezado}>
              <h1>{producto.nombre}</h1>
              <p>{producto.categoria}</p>
            </div>

            <div className={styles.producto_informacion}>
              <p className={styles.destaque}>${producto.precio} ARS</p>
              <p>Stock: {producto.stock}  
              {producto.stock==1  && <b> 🔥 ULTIMA UNIDAD</b> }</p>
            </div>
            
            <div className={styles.descripcion}>
              <p>{producto.descripcion}</p>  
            </div>
            
            <div className={styles.producto_carrito}>
                <div className={styles.accionCarrito}>
  
                  <Button variant="light"  onClick={()=>cantidad>0?setCantidad(cantidad-1):setCantidad(0)}>-</Button>
                  <p>{cantidad} </p>
                  <Button variant="light"  onClick={()=>cantidad<producto.stock?setCantidad(cantidad+1):setCantidad(cantidad)}>+</Button>
                  <Button variant="light" onClick={agregarLocalStorage}>agregar al carrito</Button>
                </div>  
            </div>

        </div>
    </div>
  )
}

export default ProductoDetalles