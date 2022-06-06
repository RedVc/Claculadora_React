import React from "react"
import PropTypes from "prop-types"

/* desestructuración desde el parámetro */
const Result = ({ value }) =>
(
  <div className="result">
    {value}
  </div>
)


/* valida Proptypes */
Result.protoTypes = {
  value: PropTypes.string.isRequired
}

/* le agrega default a los props */
Result.defaultProps = {
  value: "0"
}

/* exporta el resultado */
export default Result