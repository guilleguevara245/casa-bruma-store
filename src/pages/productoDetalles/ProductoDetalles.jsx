import { useParams } from "react-router"
import styles from "./productoDetalles.module.css"
import productos from "../../data/prooductos";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

import Image from 'react-bootstrap/Image';
function ProductoDetalles() {
    //aplico renderizador condicional "producto.stock == 1 &&"
    const {id} =useParams();
    const [cantidad,setCantidad] =useState(0)
    const producto= productos.find(e=> e.id ==id)
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
              <p className={styles.destaque}>Precio: ${producto.precio} ARS</p>
              <p>stock: {producto.stock}  
                  {producto.stock==1  && <b> 🔥 ULTIMA UNIDAD</b> }</p>
            </div>
            <div className={styles.descripcion}>
              <p>{producto.descripcion}</p>  
            </div>
            
            <div className={styles.producto_carrito}>
                <div className={styles.accionCarrito}>
  
                  <Button variant="light"  onClick={()=>cantidad>producto.stock?setCantidad(cantidad-1):setCantidad(0)}>-</Button>
                  <p>{cantidad} </p>
                  <Button variant="light"  onClick={()=>cantidad<producto.stock?setCantidad(cantidad+1):setCantidad(cantidad)}>+</Button>
                  <Button variant="light">agregar al carrito</Button>
                </div>  
            </div>

        </div>
    </div>
  )
}

export default ProductoDetalles