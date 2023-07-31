import { useState, useImperativeHandle, forwardRef } from 'react'
import FormLayout from '@/layout/FormLayout'
import Switch from './Switch'
import { PLAN_DATA } from '@/constants'

const BILLING = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
}

const YourPlan = forwardRef(function YourPlan(props, ref) {
  const [cycleBilling, setCycleBilling] = useState(BILLING.MONTHLY)
  const [plan, setPlan] = useState('')

  useImperativeHandle(ref, () => ({
    getFormData: () => {
      return {
        plan: plan || 0,
        billing: cycleBilling,
      }
    },
  }))

  return (
    <FormLayout
      title="Select your plan"
      description="You have the option of monthly or yearly billing"
    >
      <div className="flex flex-col gap-3 text-marine-blue md:gap-8">
        <div className="flex flex-col gap-3 md:flex-row md:gap-4">
          {PLAN_DATA.map(({ id, icon, title, price }, i) => (
            <div
              key={id}
              className={`${
                id === plan || (!plan && i === 0) ? 'plan-item-active' : ''
              } flex cursor-pointer gap-4 rounded-lg border border-light-gray px-4 py-4 hover:border-purplish-blue hover:bg-light-pastel-blue md:flex-1 md:flex-col md:gap-8`}
              onClick={() => setPlan(id)}
            >
              <img src={icon} alt="arcade-plan" className="h-8 w-8" />
              <div>
                <p className="font-ubuntu-medium text-marine-blue">{title}</p>
                <p className="text-sm text-gray">${price}/mo</p>
                {cycleBilling === BILLING.YEARLY && (
                  <p className="text-xs text-marine-blue">2 months free</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-5 rounded-lg bg-light-pastel-blue py-3 font-ubuntu-medium">
          <p>Monthly</p>
          <Switch
            active={cycleBilling === BILLING.YEARLY}
            click={() =>
              setCycleBilling(
                cycleBilling === BILLING.MONTHLY
                  ? BILLING.YEARLY
                  : BILLING.MONTHLY
              )
            }
          />
          <p>Yearly</p>
        </div>
      </div>
    </FormLayout>
  )
})

export default YourPlan
