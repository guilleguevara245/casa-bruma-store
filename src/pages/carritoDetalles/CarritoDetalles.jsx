import CarritoProducto from "../../components/carritoProducto/CarritoProducto";



export default function CarritoDetalles() {
    const storageProductos = JSON.parse(localStorage.getItem("carrito")) || [];
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
