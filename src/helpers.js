import { BILLING } from './constants'

const MONTH_FREE = 2

const calculatePriceWithPlan = (plan, price) =>
  plan === BILLING.YEARLY ? price * (12 - MONTH_FREE) : price

const generateTimeText = (plan) => (plan === BILLING.YEARLY ? 'yr' : 'mo')

export const generatePriceText = (plan, price) =>
  `$${calculatePriceWithPlan(plan, price)}/${generateTimeText(plan)}`
