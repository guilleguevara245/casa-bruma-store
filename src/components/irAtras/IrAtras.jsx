
import { Button } from 'react-bootstrap'
import styles from "./irAtras.module.css"
import { NavLink } from "react-router-dom";
function IrAtras() {
  return (
    <div className={styles.atras}>
      <Button variant="secondary">
      <NavLink to="/productos" className="btn btn-secondary text-decoration-none">
            &lt;
        </NavLink>
      </Button>
    </div>
  )
}

export default IrAtras