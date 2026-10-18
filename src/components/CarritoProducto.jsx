import productos from "../data/prooductos"

function CarritoProducto({id,cantidad}) {
    const producto = productos.find(e => e.id === Number([id]));
    console.log(producto,Number(id),productos)
    return (
    <div>
        <h1>{producto.nombre}</h1>
        <p>{producto.precio}</p>
        <p>{cantidad}</p>
    </div>
  )
}

export default CarritoProducto