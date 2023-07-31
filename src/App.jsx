import { useState, useRef } from 'react'
import imgMobile from '@/assets/images/bg-sidebar-mobile.svg'
import imgDesktop from '@/assets/images/bg-sidebar-desktop.svg'
import Button from '@/components/Button'
import PersonalInfo from '@/components/PersonalInfo'
import YourPlan from '@/components/YourPlan'
import AddOns from '@/components/AddOns'
import useFormStore from '@/store'
import FinishUp from './components/FinishUp'
import Thankyou from './components/Thankyou'

const STEPS = Array.from({ length: 4 }).map((_, i) => i)
const STEPS_TITLE = ['your info', 'select plan', 'add-ons', 'summary']

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const updateForm = useFormStore((state) => state.updateFrom)
  const personalRef = useRef(null)
  const planRef = useRef(null)
  const addOnRef = useRef(null)

  const nextStep = () => {
    const isStepOneValid = personalRef.current.validateFormData()

    if (!isStepOneValid) return

    const personalInfo = personalRef.current.getFormData()
    const yourPlan = planRef.current.getFormData()
    const addOn = addOnRef.current.getFormData()
    setCurrentStep((prev) => prev + 1)
    updateForm({ ...personalInfo, ...yourPlan, ...addOn })
  }

  return (
    <div className="relative min-h-[100dvh] md:top-1/2 md:mx-auto md:flex md:max-h-[50vh] md:min-h-[40vh] md:w-[800px] md:max-w-[80vw] md:-translate-y-1/2 md:rounded-lg md:bg-white md:p-4">
      <div className="relative md:flex-1">
        <picture className="md:h-full">
          <source media="(min-width: 768px)" srcSet={imgDesktop}></source>
          <img
            src={imgMobile}
            alt="background-img"
            className="h-full w-full md:w-auto"
          />
        </picture>
        <ul className="absolute left-1/2 top-8 flex -translate-x-1/2 gap-3 md:left-8 md:translate-x-0 md:flex-col md:gap-7">
          {STEPS.map((i) => (
            <li key={i} className="flex items-center gap-4 text-white">
              <div
                className={`h-9 w-9 rounded-full border border-white bg-transparent text-center font-ubuntu-medium leading-8 ${
                  i === currentStep || (i === 3 && currentStep >= 4)
                    ? 'active'
                    : ''
                }`}
              >
                {i + 1}
              </div>
              <div className="hidden uppercase md:block">
                <p className="text-xs">{`Step ${i + 1}`}</p>
                <p className="font-ubuntu-bold leading-none">
                  {STEPS_TITLE[i]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex md:flex-2 md:flex-col md:justify-between md:px-6">
        <div className="margin relative -top-20 md:static">
          <div className={`${currentStep === 0 ? 'block' : 'hidden'}`}>
            <PersonalInfo ref={personalRef} />
          </div>
          <div className={`${currentStep === 1 ? 'animate-fadeup' : 'hidden'}`}>
            <YourPlan ref={planRef} />
          </div>
          <div className={`${currentStep === 2 ? 'animate-fadeup' : 'hidden'}`}>
            <AddOns ref={addOnRef} />
          </div>
          <div className={`${currentStep === 3 ? 'animate-fadeup' : 'hidden'}`}>
            <FinishUp backPlanStep={() => setCurrentStep(1)} />
          </div>
          <div className={`${currentStep === 4 ? 'animate-fadeup' : 'hidden'}`}>
            <Thankyou />
          </div>
        </div>
        {currentStep < STEPS.length && (
          <section className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-4 md:static">
            {currentStep > 0 && (
              <Button
                text="Go Back"
                onClick={() => setCurrentStep((prev) => prev - 1)}
              />
            )}
            <Button
              clsName="btn-primary ml-auto min-w-[96px]"
              text={currentStep === 3 ? 'Confirm' : 'Next Step'}
              onClick={nextStep}
            />
          </section>
        )}
      </div>
    </div>
  )
}

export default App
