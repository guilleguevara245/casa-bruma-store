import { FormularioCompra } from "../components/FormularioCompra";

function Contacto() {
  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h1 className="mb-4 text-center">Complete para Formular la Entrega</h1>
      <div className="w-100" style={{ maxWidth: "700px" }}>
        <FormularioCompra flotante={false} />
      </div>
    </div>
  );
}

export default Contacto;
