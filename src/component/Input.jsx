import next from "next"

import './stylesC.css'
const Input = ({child}) => {
  return (
  <input  type="text" placeholder={child}  />
  )
}
// className="input-container"
export default Input
