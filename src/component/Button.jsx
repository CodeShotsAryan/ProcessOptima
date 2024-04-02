import './stylesC.css'


const Button = ({children, ...props }) => {
  return (
    <button {...props} className='button'  >
      {children}
    </button>
  )
}

export default Button
