import { useState } from 'react';

function MensajeConfirmacion({onConfirmar}) {
  const [mostrar, setMostrar] = useState(true);
    function desactivar(){
        onConfirmar()
        setMostrar(false)
    }
  return (
    <>
    {   mostrar && 
   <div className="modal d-block" role="dialog">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Confirmar compra</h5>

      </div>
      <div className="modal-body">
        <p>selecciona confirmar continuar la compra</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={()=>desactivar()}>confirmar</button>
        <button type="button" className="btn btn-secondary" data-dismiss="modal"onClick={()=> setMostrar(false)} >cerrar</button>
      </div>
    </div>
    </div>
    </div>
        }
    </>
  );
}

export default MensajeConfirmacion;