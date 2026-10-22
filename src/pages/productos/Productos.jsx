import styles from "./productos.module.css"
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import productos from "../../data/productos";
import TarjetaProducto from "../../components/TarjetaProducto";
import { useState, useEffect } from "react";

const ListadoProductos = ({setRebotar}) => {
  const [busqueda, setBusqueda] = useState('')
  const [busquedaAplicada, setBusquedaAplicada] = useState('')
  const [orden, setOrden] = useState('ninguno')

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

  const catalogoOrdenado = orden === 'ninguno'
    ? catalogoFilt
    : [...catalogoFilt].sort((a, b) =>
        orden === 'precio-asc' ? a.precio - b.precio : b.precio - a.precio
      )

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
      <div className={styles.controles}>
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
        <div>
          <Form.Label visuallyHidden htmlFor="orden">
            Ordenar productos
          </Form.Label>
          <Form.Select
            id="orden"
            value={orden}
            className={styles.buscadorInput}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="ninguno">Sin ordenar</option>
            <option value="precio-desc">Precio: mayor a menor</option>
            <option value="precio-asc">Precio: menor a mayor</option>
          </Form.Select>
        </div>
      </div>
      {catalogoFilt.length === 0 ? (
        <div className={styles.sinResultados}>
          <p>No encontramos productos que coincidan con "{busquedaAplicada.trim()}".</p>
          <Button variant="outline-secondary" size="sm" onClick={limpiarBusqueda}>
            Ver todo el catalogo
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {catalogoOrdenado.map((producto) => (
            <Col key={producto.id}>
              <TarjetaProducto producto={producto} setRebotar={setRebotar} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
};

export default ListadoProductos;
