import PropTypes from 'prop-types'

const Input = ({
  htmlFor,
  label,
  isValid,
  errorMessage = 'This field is required!',
  ...props
}) => {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs">
        <label htmlFor={htmlFor}>{label}</label>
        {!isValid && (
          <span className="text-strawberry-red">{errorMessage}</span>
        )}
      </div>
      <div className="rounded border border-gray px-4 py-2 text-sm font-semibold">
        <input type="text" className="w-full" {...props} />
      </div>
    </div>
  )
}

Input.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  isValid: PropTypes.bool,
}

export default Input
