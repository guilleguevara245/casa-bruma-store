import styles from "./Nosotros.module.css";

function Nosotros() {
  return (
    <>
      <div className={styles.encabezado}>
        <div className="container">
          <h1>Nosotros</h1>
          <p>Una casa para tu guardarropa, con la calma de la bruma.</p>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2 className={styles.titulo}>Nuestra historia</h2>
            <p>Casa Bruma nació de una idea simple: que la ropa de todos los días tenga la calma de volver a casa. Elegimos prendas de líneas simples, telas suaves y colores que recuerdan a la bruma de la mañana, para que te vistas con comodidad sin pensar de más.</p>
            <p>Cada prenda de nuestra colección está pensada para combinarse con las demás, durar en tu placard y acompañarte en cualquier lugar.</p>
          </div>
        </div>
        <div className="row text-center mt-5">
          <div className={`col-md-4 mb-4 ${styles.valor}`}>
            <h2>Diseño simple</h2>
            <p>Líneas limpias y colores suaves que combinan con todo.</p>
          </div>
          <div className={`col-md-4 mb-4 ${styles.valor}`}>
            <h2>Telas que abrigan</h2>
            <p>Materiales cómodos y de buena calidad, elegidos para el uso diario.</p>
          </div>
          <div className={`col-md-4 mb-4 ${styles.valor}`}>
            <h2>Pensada para durar</h2>
            <p>Prendas que se llevan bien con el tiempo y con el resto de tu guardarropa.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;