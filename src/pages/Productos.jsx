import { Card, CardGroup, Button } from "react-bootstrap"
import productos from "../data/prooductos";

const listadoProductos = () =>{

    const productosCards = productos[0]
    const prodId = productosCards.id
    const prodImg = productosCards.imagen
    return(
        <CardGroup>
      <Card>
        <Card.Img variant="top" src= {prodImg}/>
        <Card.Body>
          <Card.Title>{productosCards.nombre}</Card.Title>
          <Card.Text>
            {productosCards.descripcion}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text">{productosCards.precio}</small>
        </Card.Footer>
        <Button variant="primary" href={`/productos/${prodId}`}>Ir al producto</Button>
      </Card>
    </CardGroup>
  );
}


export default listadoProductos