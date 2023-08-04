import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import AdvancedIcon from '@/assets/images/icon-advanced.svg'
import ProIcon from '@/assets/images/icon-pro.svg'

export const PLAN_DATA = [
  {
    id: 0,
    icon: ArcadeIcon,
    title: 'Arcade',
    price: 9,
  },
  {
    id: 1,
    icon: AdvancedIcon,
    title: 'Advanced',
    price: 12,
  },
  {
    id: 2,
    icon: ProIcon,
    title: 'Pro',
    price: 15,
  },
]

export const ADD_ONS = [
  {
    id: 0,
    title: 'Online service',
    desc: 'Access to multiplayer games',
    price: 1,
    name: 'service',
  },
  {
    id: 1,
    title: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    price: 2,
    name: 'storage',
  },
  {
    id: 2,
    title: 'Customizable profile',
    desc: 'Custom theme on your profile',
    price: 3,
    name: 'profile',
  },
]

export const BILLING = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly',
}
