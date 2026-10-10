import { useParams } from "react-router"
import styles from "./productoDetalles.module.css"
import productos from "../../data/prooductos";

function ProductoDetalles() {
    //aplico renderizador condicional "producto.stock == 1 &&"
    const {id} =useParams();
    const producto= productos.find(e=> e.id ==id)
  return (
    <div className={styles.producto}>
        <div className={styles.img_content}>
          <img src={producto.imagen}></img>
        </div>
        <div className={styles.producto_informacion}>
            <h3>{producto.nombre}</h3>
            <div>
              <p>precio: ${producto.precio} ARS</p>
              <p>stock: {producto.stock} 
                 {producto.stock==1  && <b>ULTIMA UNIDAD</b> }</p>
              <p>{producto.descripcion}</p>
            </div>
            <button className="">agregar al carrito</button>
        </div>
    </div>
  )
}

export default ProductoDetalles