import { Card, CardGroup, Button } from "react-bootstrap"
import productos from "../data/prooductos";

const ListadoProductos = () =>{

    return(
        productos.map((producto)=><CardGroup>
      <Card key={producto.id}>
        <Card.Img variant="top" src= {producto.imagen}/>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text">{producto.precio}</small>
        </Card.Footer>
        <Button variant="primary" href={`/productos/${producto.id}`}>Ir al producto</Button>
      </Card>
    </CardGroup>
  )
)
}


export default ListadoProductos;