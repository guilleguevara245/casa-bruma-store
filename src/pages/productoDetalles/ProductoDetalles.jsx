import { useParams } from "react-router"
import styles from "./productoDetalles.module.css"
import productos from "../../data/prooductos";

function ProductoDetalles() {
    
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
               <p>{producto.precio}</p>
              <p>{producto.stock}</p>
              <p>{producto.descripcion}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductoDetalles