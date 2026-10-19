import { useState } from "react";
import CarritoProducto from "../../components/carritoProducto/CarritoProducto";



export default function CarritoDetalles() {
    const [storageProductos, setStorageProductos] =useState(JSON.parse(localStorage.getItem("carrito")) || []); 
    console.log(storageProductos)
    //Object.entries > converir un objeto  en un array
    return (
    <div>
        <h1>carrito</h1>
        <div >
            {storageProductos.map((producto) =>
            <CarritoProducto
                id={producto.id}
                cantidad={producto.cantidad}
                setStorageProductos ={setStorageProductos}
            />
            )}
            
        </div>
        <div>
            <p>productos</p>
            <p>-nombre de producto</p>
            <p>-nombre de producto</p>
            <p>total</p>
        </div>
    </div>
  )
}
