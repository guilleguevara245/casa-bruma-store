import styles from "./productos.module.css"
import { Card, Button, ListGroup, Row, Col, Form, InputGroup } from "react-bootstrap";
import productos from "../../data/prooductos";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const stockSiHay = (producto) => {
  return producto.stock <= 0 ? "No hay stock" : producto.stock;
};

const ListadoProductos = () => {
  const [busqueda, setBusqueda] = useState('')
  const [busquedaAplicada, setBusquedaAplicada] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => setBusquedaAplicada(busqueda), 300)
    return () => clearTimeout(timer)
  }, [busqueda])

  const limpiarBusqueda = () => {
    setBusqueda('')
    setBusquedaAplicada('')
  }

  const catalogoFilt = productos.filter((producto) => producto.nombre.toLowerCase().includes(busquedaAplicada.toLowerCase().trim()))
  const hayBusqueda = busquedaAplicada.trim() !== ''

  return (
    <section className="container mt-4" style={{ textAlign: "left" }}>
      <div className="">
        <h1>
          Catalogo actual
        </h1>
        <small className="text-muted" aria-live="polite">
          {hayBusqueda
            ? `${catalogoFilt.length} de ${productos.length} productos`
            : `${productos.length} productos cargados`}
        </small>
      </div>
      <div className={styles.buscador}>
        <Form.Label visuallyHidden htmlFor="buscador">
          Buscar productos por nombre
        </Form.Label>
        <InputGroup>
          <Form.Control
            id="buscador"
            type="search"
            placeholder="Buscar por nombre..."
            className={styles.buscadorInput}
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <Button variant="outline-secondary" onClick={limpiarBusqueda}>
              Limpiar
            </Button>
          )}
        </InputGroup>
      </div>
      {catalogoFilt.length === 0 ? (
        <div className={styles.sinResultados}>
          <p>No encontramos productos que coincidan con "{busquedaAplicada.trim()}".</p>
          <Button variant="outline-secondary" size="sm" onClick={limpiarBusqueda}>
            Ver todo el catalogo
          </Button>
        </div>
      ) : (
        <Row xs={1} md={4} className="g-4">
          {catalogoFilt.map((producto) => (
            <Col key={producto.id}>
              <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">{producto.categoria}</small>
                  </Card.Text>
                  <Card.Text>{producto.descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{producto.precio}</ListGroup.Item>
                    <ListGroup.Item>{stockSiHay(producto)}</ListGroup.Item>
                    <ListGroup.Item>talle : m</ListGroup.Item>
                  </ListGroup>
                </Card.Footer>
                <Button variant="primary" size="sm">
                  <Link to="/carrito" className={styles.Link}>Agregar al carrito</Link>
                </Button>
                <Button variant="secondary" size="sm">
                  <Link to={`/producto/${producto.id}` }className={styles.Link}>Ir al producto</Link>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default ListadoProductos;
