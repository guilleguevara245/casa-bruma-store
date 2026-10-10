import { useParams } from "react-router"
import styles from "./productoDetalles.module.css"
import productos from "../../data/prooductos";
import { useState } from "react";

function ProductoDetalles() {
    //aplico renderizador condicional "producto.stock == 1 &&"
    const {id} =useParams();
    const [cantidad,setCantidad] =useState(0)
    const producto= productos.find(e=> e.id ==id)
  return (
    <div className={styles.producto}>
        <div className={styles.img_content}>
          <img src={producto.imagen}></img>
        </div>
        <div className={styles.producto_informacion}>
            <div className={styles.encabezado}>
              <h3>{producto.nombre}</h3>
              <p>{producto.categoria}</p>
            </div>

            <p>precio: ${producto.precio} ARS</p>
            <p>stock: {producto.stock}  
                 {producto.stock==1  && <b> 🔥 ULTIMA UNIDAD</b> }</p>
            <p>{producto.descripcion}</p>
            <div>
              <div className={styles.accionCarrito}>
                <button onClick={()=>cantidad>0?setCantidad(cantidad-1):setCantidad(0)}>-</button>
                <p>{cantidad} </p>
                <button onClick={()=>cantidad<producto.stock?setCantidad(cantidad+1):setCantidad(cantidad)}>+</button>
                <button className="">agregar al carrito</button>
              </div>  
            </div>  
            

        </div>
    </div>
  )
}

export default ProductoDetalles