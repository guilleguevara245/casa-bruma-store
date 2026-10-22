import { Modal, Button } from "react-bootstrap";
import style from "./FormularioCompra.module.css";

import { useState } from "react";

const validate = (data) => {
  const newErrors = {};

  if (data.firstName === "") {
    newErrors.firstName = "El nombre es obligatorio";
  } else if (data.firstName.length > 50) {
    newErrors.firstName = "El nombre es demasiado largo";
  } else if (!/^[A-ZÁÉÍÓÚÑ][a-zA-ZÁÉÍÓÚáéíóúñÑ\s]*$/.test(data.firstName)) {
    newErrors.firstName =
      "El nombre debe comenzar con mayuscula y  tener solo letras y espacios";
  }
  if (data.lastName === "") {
    newErrors.lastName = "El apellido es obligatorio";
  } else if (data.lastName.length > 50) {
    newErrors.lastName = "El apellido es demasiado largo";
  } else if (!/^[A-ZÁÉÍÓÚÑ][a-zA-ZÁÉÍÓÚáéíóúñÑ\s]*$/.test(data.lastName)) {
    newErrors.lastName =
      "El apellido debe comenzar con mayuscula y tener solo letras y espacios";
  }

  if (data.email === "") {
    newErrors.email = "El email es obligatorio";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    newErrors.email = "El email no es valido";
  }
  if (data.phone === "") {
    newErrors.phone = "El teléfono debe ser obligatorio";
  } else if (!/^(?:\+54)?\s?9?\s?\d{2}\s?\d{4}\s?\d{4}$/.test(data.phone)) {
    newErrors.phone = "El teléfono debe contener entre 7 y 15 dígitos";
  }
  if (data.address === "") {
    newErrors.address = "La dirección es obligatoria";
  } else if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ0-9\s\-#/.]+$/.test(data.address)) {
    newErrors.address = "La dirección tiene caracteres invalidos";
  }
  if (data.modality === "") {
    newErrors.modality = "La modalidad de entrega debe ser obligatoria";
  }
  if (data.message.length > 200) {
    newErrors.message = "El mensaje no puede superar los 200 carecteres";
  }

  return newErrors;
};



// flotante: se muestra encima de la pagina (confirmacion del carrito).
// Con flotante={false} se muestra dentro de la pagina (Contacto).
export const FormularioCompra = ({onCompra, flotante = true}) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    modality: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  console.log(formData);

  const [desactivar,setDesactivar] =useState(true)
  console.log(formData);
  function compra(){
    onCompra?.()
    if (flotante) setDesactivar(false)
  }

  const handleChange = (event) => {
    console.log("handleChange", {
      value: event.target.value,
      name: event.target.name,
    });
    console.log(event.target.value);

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario por enviar");

    const newErrors = validate(formData);

    setErrors(newErrors);

    console.log(newErrors);
    console.log(Object.keys(newErrors));
    if (Object.keys(newErrors).length > 0) {
      console.log("Complete los campos faltantes");
      return;
    } else {
      setShowModal(true);
    }
  };

  const confirmarCompra = () => {
    setShowModal(false);
    compra()
    setShowModal(false);
    console.log("Formulario Envidao");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      modality: "",
      message: "",
    });
  };

  const cancelarCompra = () => {
    setShowModal(false);
    alert("Compra cancelada");
    console.log("Formulario rechazado");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      modality: "",
      message: "",
    });
  };
  console.log(errors);

  return (

    <>
    { desactivar && <div className={flotante ? style.formularioFlotante : style.formularioContainer}>

      <div className={style.formularioBox}>
        <form onSubmit={handleSubmit} noValidate>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className={`form-label ${style.formLabel}`}>
                Nombres
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`form-control ${style.formControl} ${errors.firstName ? "is-invalid" : ""}`}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="invalid-feedback d-block">
                  {errors.firstName}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" className={`form-label ${style.formLabel}`}>
                Apellidos
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`form-control ${style.formControl} ${errors.lastName ? "is-invalid" : ""}`}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <div className="invalid-feedback d-block">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className={`form-label ${style.formLabel}`}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control ${style.formControl} ${errors.email ? "is-invalid" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback d-block">{errors.email}</div>
              )}
            </div>

            <div className="col-md-6">
              <label htmlFor="phone" className={`form-label ${style.formLabel}`}>
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+541123456789"
                className={`form-control ${style.formControl} ${errors.phone ? "is-invalid" : ""}`}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <div className="invalid-feedback d-block">{errors.phone}</div>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address" className={`form-label ${style.formLabel}`}>
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={`form-control ${style.formControl} ${errors.address ? "is-invalid" : ""}`}
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <div className="invalid-feedback d-block">{errors.address}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="modality" className={`form-label ${style.formLabel}`}>
              Metodo de Entrega
            </label>
            <select
              name="modality"
              id="modality"
              value={formData.modality}
              onChange={handleChange}
              className={`form-select ${style.formSelect} ${errors.modality ? "is-invalid" : ""}`}
            >
              <option value="">Metodo de Entrega</option>
              <option value="presencial">Retiro en Sucursal</option>
              <option value="domicilio">Envio a Domicilio</option>
            </select>
            {errors.modality && (
              <div className="invalid-feedback d-block">{errors.modality}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className={`form-label ${style.formLabel}`}>
              Mensage o Aclaración
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-control ${style.formControl} ${errors.message ? "is-invalid" : ""}`}
              rows="3"
              placeholder="Escriba aquí cualquier aclaración sobre la entrega..."
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback d-block">{errors.message}</div>
            )}
          </div>

          <div className="text-center mt-4">
            <button type="submit" className={`btn btn-primary w-100 ${style.btnPrimary}`}>
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro de realizar la compra?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className={style.btnPrimary} onClick={confirmarCompra}>
            Confirmar
          </Button>
          <Button variant="secondary" className={style.btnSecondary} onClick={cancelarCompra}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


    }
    </>

  );
};
