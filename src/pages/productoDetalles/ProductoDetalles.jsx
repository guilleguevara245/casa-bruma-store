import { useParams } from "react-router-dom"
import styles from "./productoDetalles.module.css"
import productos from "../../data/prooductos";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
function ProductoDetalles() {
    //aplico renderizador condicional "producto.stock == 1 &&"
    const {id} =useParams();
    const [cantidad,setCantidad] =useState(0)
    const producto= productos.find(e=> e.id ==id)
    const [error, setError] = useState(false) 
 function agregarLocalStorage() {
    let carrito = JSON.parse(localStorage.getItem("carrito"));

    if (carrito == null) {
      carrito = []; //si no hay un carrito genera la lista 
    }

      if(cantidad>0){
        if(error){
          setError(false)
        }
        if (!carrito.find(e => e.id === Number(id))) {
          carrito.push({ id: Number(id), cantidad: cantidad }); // pone en la lista el objeto
        } 
        else {
          carrito = carrito.map(e =>
          e.id === Number(id)
            ? { ...e, cantidad: cantidad }
            : e                            //Si la condición es verdadera, crea un nuevo objeto con todas las propiedades de e, 
          );
                                           //pero reemplaza el valor de cantidad por el nuevo valor de cantidad.
      }                                    //Si la condición es falsa, devuelve el objeto e tal como está, sin cambiar sus propiedades.

      }
     else{
      setError(true)
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
              <p>Stock: {producto.stock - cantidad}  
              {producto.stock==1  && <b className={styles.oferta}> 🔥 ULTIMA UNIDAD</b> }</p>
            </div>
            
            <div className={styles.descripcion}>
              <p>{producto.descripcion}</p>  
            </div>
            
            <div className={styles.producto_carrito}>
                <div className={styles.accionCarrito}>
                  
                  <Button variant="light"  onClick={()=>cantidad>0?setCantidad(cantidad-1):setCantidad(0)}>-</Button>
                  <p>{cantidad} </p>
                  <Button variant="light"  onClick={()=>cantidad<producto.stock?setCantidad(cantidad+1):setCantidad(cantidad)}>+</Button>
                  <Button variant="light"className={styles.agregarCarrito} onClick={agregarLocalStorage}>agregar al carrito</Button>
                </div>
            </div>
                {error && 
                  <Alert variant="danger">
                  no se puede agregar al carrito cantidades inferiores a 1 
                  </Alert>

                }  

        </div>
    </div>
  )
}

export default ProductoDetalles