import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className="portada">
      <div className="capa">
        <img src="/img/emblema-claro-casa-bruma.png" alt="Logo de Casa Bruma" style={{ width: "150px", maxWidth: "100%" }} />
        <h1>Casa Bruma</h1>
        <p>Casa Bruma es un refugio para tu guardarropa. Indumentaria de líneas simples y colores suaves, como la bruma de la mañana, para vestirte con comodidad y estilo.</p>
        <Link to="/productos" className="btn btn-outline-light">Ver catálogo</Link>
      </div>
    </div>
  );
}

export default Inicio;