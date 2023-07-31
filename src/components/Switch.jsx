import PropTypes from 'prop-types'

const Switch = ({ active, click }) => {
  return (
    <div
      className={`flex h-6 w-11 cursor-pointer items-center rounded-full bg-marine-blue p-1 ${
        active ? 'switch-active' : ''
      }`}
      onClick={click}
    >
      <div className="dot h-4 w-4 rounded-full bg-white"></div>
    </div>
  )
}

Switch.propTypes = {
  active: PropTypes.bool,
  click: PropTypes.func,
}

export default Switch
