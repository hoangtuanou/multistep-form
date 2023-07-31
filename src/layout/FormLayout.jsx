import PropTypes from 'prop-types'

const FormLayout = ({ title, description, children }) => {
  return (
    <div className="mx-auto flex max-w-[90vw] flex-col gap-2 rounded-xl bg-white px-5 py-8 text-gray">
      <h1 className="font-ubuntu-bold text-2xl text-marine-blue">{title}</h1>
      <p className="mb-2">{description}</p>
      {children}
    </div>
  )
}

FormLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
}

export default FormLayout
