import React from "react"
import PropTypes from "prop-types"

/*
  Muestra la operación completa, ya que en el tutorial se 
  elimina para solo mostar los números que se van ingresando 
*/

/* desestructuración desde el parámetro */
const Opera = ({ value }) =>
(
  <div className="operacion">
    {value}
  </div>
)


/* valida Proptypes */
Opera.protoTypes = {
  value: PropTypes.string.isRequired
}

/* le agrega default a los props */
Opera.defaultProps = {
  value: "0"
}

/* exporta el resultado */
export default Opera