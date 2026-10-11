import { Card, Button, ListGroup } from "react-bootstrap"
import productos from "../../data/prooductos";
import { Link } from "react-router-dom";

const stockSiHay = (producto) =>{
        if (producto.stock <= 0) {
                    return "No hay stock"
                }else{
                    return producto.stock
                }
    }

const ListadoProductos = () =>{
    return(
        productos.map((producto)=>
                <Card key={producto.id}>
                <Card.Img variant="top" src= {producto.imagen}/>
                <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    <small className="text-muted">{producto.categoria}</small>
                </Card.Text>
                <Card.Text>
                    {producto.descripcion}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{producto.precio}</ListGroup.Item>
                        <ListGroup.Item>{stockSiHay(producto)}</ListGroup.Item>
                        <ListGroup.Item>talle : m</ListGroup.Item>
                    </ListGroup>
                </Card.Footer>
                <Button variant="primary" size='sm'><Link to="/carrito">Agregar al carrito</Link></Button>
                <Button variant="secondary" size='sm'><Link to={`/producto/${producto.id}`}>Ir al producto</Link></Button>
            </Card>
  )
)
}


export default ListadoProductos;