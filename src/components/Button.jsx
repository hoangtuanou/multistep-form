import PropTypes from 'prop-types'

const Button = ({ clsName, text, ...props }) => {
  return (
    <button type="button" className={`btn-default ${clsName}`} {...props}>
      {text}
    </button>
  )
}

Button.propTypes = {
  clsName: PropTypes.string,
  text: PropTypes.string,
}

export default Button
