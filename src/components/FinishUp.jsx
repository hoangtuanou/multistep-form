import PropTypes from 'prop-types'

import FormLayout from '@/layout/FormLayout'
import useFormStore from '@/store'
import { PLAN_DATA } from '@/constants'

const FinishUp = ({ backPlanStep }) => {
  const formData = useFormStore((state) => state.data)

  if (!Object.keys(formData).length) return null

  const { plan, billing, addOns } = formData
  const isMonthlyBilling = billing === 'monthly'
  const planPrice = isMonthlyBilling
    ? PLAN_DATA[plan].price
    : PLAN_DATA[plan].price * 10
  const totalAddonPrice = addOns.reduce((prev, curr) => prev + curr.price, 0)
  const addOnPrice = isMonthlyBilling ? totalAddonPrice : totalAddonPrice * 10
  const totalPrice = planPrice + addOnPrice

  return (
    <FormLayout
      title="Finishing Up"
      description="Double-check everything looks OK before confirming."
    >
      <>
        <div className="flex flex-col gap-2 rounded-xl bg-magnolia p-4 font-ubuntu-medium text-marine-blue">
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-ubuntu-bold">
                {PLAN_DATA[plan].title} ({billing})
              </p>
              <p
                className="cursor-pointer text-xs text-gray underline"
                onClick={backPlanStep}
              >
                Change
              </p>
            </div>
            <p className="font-ubuntu-bold">
              ${planPrice}/{isMonthlyBilling ? 'mo' : 'yr'}
            </p>
          </div>
          <div className="divider"></div>
          {addOns.map(({ title, price }, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <p className="text-xs text-gray">{title}</p>
              <p>
                ${isMonthlyBilling ? price : price * 10}/
                {isMonthlyBilling ? 'mo' : 'yr'}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-4 pt-4">
          <p className="font-ubuntu-medium text-xs">
            Total (per {isMonthlyBilling ? 'month' : 'year'})
          </p>
          <p className="font-ubuntu-bold text-purplish-blue">
            +${totalPrice}/mo
          </p>
        </div>
      </>
    </FormLayout>
  )
}

FinishUp.propTypes = {
  backPlanStep: PropTypes.func,
}

export default FinishUp
