import { Link } from "react-router-dom";
function Inicio() {
  return (
    <div className="container mt-4" style={{ textAlign: "center" }}>
      <img src="/img/logo-casa-bruma-store.png" alt="Logo de Casa Bruma" style={{ width: "300px", maxWidth: "100%" }} />
      <h1>Casa Bruma</h1>
      <p>Casa Bruma es un refugio para tu guardarropa. Indumentaria de líneas simples y colores suaves, como la bruma de la mañana, para vestirte con comodidad y estilo.</p>
      <p>
        <Link to="/productos" className="btn btn-dark">Ver catálogo</Link>
      </p>
      <img src="/img/banner-casa-bruma-store.jpg" alt="Interior de una tienda de ropa con percheros y estantes de madera" className="mt-4" style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  );
}

export default Inicio;