import { useState, useImperativeHandle, forwardRef } from 'react'
import FormLayout from '@/layout/FormLayout'
import { ADD_ONS, BILLING } from '@/constants'
import useFormStore from '@/store'
import { generatePriceText } from '@/helpers'

const AddOns = forwardRef(function AddOns(props, ref) {
  const formData = useFormStore((state) => state.data)
  const [addOns, setAddOns] = useState([])

  const handleChange = (item) => {
    const isChecked = addOns.some(({ id }) => item.id === id)
    let newAddons = [...addOns, item]

    if (isChecked) {
      newAddons = addOns.filter(({ id }) => id !== item.id)
    }

    setAddOns(newAddons)
  }

  useImperativeHandle(ref, () => ({
    getFormData: () => {
      return {
        addOns,
      }
    },
  }))

  return (
    <FormLayout
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className="flex flex-col gap-3 text-marine-blue">
        {ADD_ONS.map(({ id, title, desc, price, name }) => (
          <div
            key={id}
            className="item-active flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-light-gray px-4 py-4 hover:border-purplish-blue hover:bg-light-pastel-blue"
            onClick={() => handleChange({ id, title, price })}
          >
            <input
              type="checkbox"
              className="text-gray"
              checked={addOns.some(({ id: addOnId }) => addOnId === id)}
              readOnly
            />
            <div>
              <p
                className={`font-ubuntu-medium text-xs peer-checked/${name}:text-purplish-blue`}
              >
                {title}
              </p>
              <p className="text-xs text-gray">{desc}</p>
            </div>
            <p className="flex-1 text-right text-xs text-purplish-blue">
              +{generatePriceText(formData.billing || BILLING.MONTHLY, price)}
            </p>
          </div>
        ))}
      </div>
    </FormLayout>
  )
})

export default AddOns
