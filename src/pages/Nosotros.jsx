import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Nosotros.module.css";

function Nosotros() {
  return (
    <>
      <div className={styles.encabezado}>
        <Container>
          <img src="/img/emblema-claro-casa-bruma.png" alt="Logo de Casa Bruma" className={styles.iconoEncabezado} />
          <h1>Nosotros</h1>
          <p>Una casa para tu guardarropa, con la calma de la bruma.</p>
        </Container>
      </div>
      <Container className="py-5">
        <Row>
          <Col md={8} className="mx-auto text-center">
            <img src="/img/icono-historia.png" alt="Icono de un libro abierto" className={styles.icono} />
            <h2 className={styles.titulo}>Nuestra historia</h2>
            <p>Casa Bruma nació de una idea simple: que la ropa de todos los días tenga la calma de volver a casa. Elegimos prendas de líneas simples, telas suaves y colores que recuerdan a la bruma de la mañana, para que te vistas con comodidad sin pensar de más.</p>
            <p>Cada prenda de nuestra colección está pensada para combinarse con las demás, durar en tu placard y acompañarte en cualquier lugar.</p>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col md={4} className={`mb-4 ${styles.valor}`}>
            <img src="/img/icono-diseno.png" alt="Icono de una percha" className={styles.icono} />
            <h2>Diseño simple</h2>
            <p>Líneas limpias y colores suaves que combinan con todo.</p>
          </Col>
          <Col md={4} className={`mb-4 ${styles.valor}`}>
            <img src="/img/icono-telas.png" alt="Icono de ondas que representan las telas" className={styles.icono} />
            <h2>Telas que abrigan</h2>
            <p>Materiales cómodos y de buena calidad, elegidos para el uso diario.</p>
          </Col>
          <Col md={4} className={`mb-4 ${styles.valor}`}>
            <img src="/img/icono-durar.png" alt="Icono de infinito" className={styles.icono} />
            <h2>Pensada para durar</h2>
            <p>Prendas que se llevan bien con el tiempo y con el resto de tu guardarropa.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Nosotros;
