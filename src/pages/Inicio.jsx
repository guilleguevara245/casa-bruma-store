import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <>
      <div className={styles.portada}>
        <div className={styles.capa}>
          <img src="/img/emblema-claro-casa-bruma.png" alt="Logo de Casa Bruma" style={{ width: "150px", maxWidth: "100%" }} />
          <h1>Casa Bruma</h1>
          <p>Casa Bruma es un refugio para tu guardarropa. Indumentaria de líneas simples y colores suaves, como la bruma de la mañana, para vestirte con comodidad y estilo.</p>
          <Link to="/productos" className="btn btn-outline-light">Explorar la colección</Link>
        </div>
      </div>
      <div className="container py-5">
        <div className="row text-center">
          <div className={`col-md-4 mb-4 ${styles.beneficio}`}>
            <img src="/img/icono-envios.png" alt="Icono de un camión de envíos" className={styles.icono} />
            <h2>Envíos a todo el país</h2>
            <p className="mb-0">Recibí tu pedido en la puerta de tu casa.</p>
          </div>
          <div className={`col-md-4 mb-4 ${styles.beneficio}`}>
            <img src="/img/icono-cambios.png" alt="Icono de cambios" className={styles.icono} />
            <h2>Cambios sin costo</h2>
            <p className="mb-0">Si no te queda bien, lo cambiás sin vueltas.</p>
          </div>
          <div className={`col-md-4 mb-4 ${styles.beneficio}`}>
            <img src="/img/icono-cuotas.png" alt="Icono de una tarjeta de pago" className={styles.icono} />
            <h2>Pagá en cuotas</h2>
            <p className="mb-0">Elegí cómo pagar con tarjeta, sin interés.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;