import { forwardRef, useImperativeHandle, useState } from 'react'
import Input from '@/components/Input'
import FormLayout from '@/layout/FormLayout'

/* eslint-disable */
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
/* eslint-enable */

const PersonalInfo = forwardRef(function PersonalInfo(props, ref) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [validField, setValidField] = useState({
    name: true,
    email: true,
    phoneNumber: true,
  })

  useImperativeHandle(ref, () => ({
    getFormData: () => {
      return {
        name,
        email,
        phoneNumber,
      }
    },
    validateFormData: () => {
      const isValidEmail = !!email && emailRegex.test(email)
      const isValidPhoneNumber = !!phoneNumber && phoneRegex.test(phoneNumber)

      setValidField(() => ({
        name: !!name,
        email: isValidEmail,
        phoneNumber: isValidPhoneNumber,
      }))
      return !!name && isValidEmail && isValidPhoneNumber
    },
  }))

  return (
    <FormLayout
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className="flex flex-col gap-3 text-marine-blue md:gap-5">
        <Input
          htmlFor="name"
          label="Name"
          placeholder="e.g. Stephen King"
          id="name"
          onChange={(e) => setName(e.target.value)}
          isValid={validField.name}
        />
        <Input
          htmlFor="email-address"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          id="email-address"
          onChange={(e) => setEmail(e.target.value)}
          isValid={validField.email}
          errorMessage={email ? 'Wrong format!' : 'This field is reuiqred!'}
          type="email"
        />
        <Input
          htmlFor="phone-number"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          id="phone-number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          isValid={validField.phoneNumber}
          errorMessage={
            phoneNumber ? 'Wrong format!' : 'This field is reuiqred!'
          }
          type="tel"
        />
      </div>
    </FormLayout>
  )
})

export default PersonalInfo
