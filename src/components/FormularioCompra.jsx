import { useState } from "react";

const validate = (data) => {
  const newErrors = {};
  if (data.firstName === "") {
    newErrors.firstName = "El nombre es obligatorio";
  } else if (data.firstName.length > 50) {
    newErrors.firstName = "El nombre es demasiado largo";
  }
  if (data.lastName === "") newErrors.lastName = "El apellido es obligatorio";

  if (data.email === "") {
    newErrors.email = "El email es obligatorio";
  } else if (!data.email.includes("@")) {
    newErrors.email = "El email no es valido";
  }
  if (data.phone === "") {
    newErrors.phone = "El teléfono debe ser obligatorio";
  }
  if (data.address === "") {
    newErrors.address = "La dirección es obligatoria";
  }
  if (!data.modality) {
    newErrors.modality = "La modalidad de entrega debe ser obligatoria";
  }
  if (data.message.length > 200) {
    newErrors.message = "El mensaje no puede superar los 200 carecteres";
  }

  return newErrors;
};

export const FormularioCompra = () => {
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

  console.log(formData);

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
    }

    console.log("Formulario Enviado!");
  };

  console.log(errors);

  return (
    <div className="row g-4">
      <div className="col-md-7">
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombres
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div className="invalid-feedback d-block">{errors.firstName}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellidos
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div className="invalid-feedback d-block">{errors.lastName}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback d-block">{errors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Teléfono
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="+541123456789"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="invalid-feedback d-block">{errors.phone}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="address"
              id="address"
              name="address"
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              value={formData.address}
              onChange={handleChange}
            />
            {errors.phone && (
              <div className="invalid-feedback d-block">{errors.address}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="modality" className="form-label">
              Metodo de Entrega
            </label>
            <select
              name="modality"
              id="modality"
              value={formData.modality}
              onChange={handleChange}
              className={`form-select ${errors.modality ? "is-invalid" : ""}`}
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
            <label htmlFor="message" className="form-label">
              Mensage o Aclaración
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`form-select ${errors.message ? "is-invalid" : ""}`}
              rows="3"
              placeholder="Escriba aquí cualquier aclaración sobre la entrega..."
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback d-block">{errors.message}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          <button type="button" className="btn btn-secondary">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
