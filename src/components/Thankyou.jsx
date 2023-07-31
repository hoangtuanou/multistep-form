import FormLayout from '@/layout/FormLayout'
import IconThankyou from '@/assets/images/icon-thank-you.svg'

const Thankyou = () => {
  return (
    <FormLayout>
      <div className="flex flex-col items-center gap-4 pb-7 pt-4">
        <img src={IconThankyou} alt="confirm-icon" className="h-14 w-14" />
        <h3 className="font-ubuntu-bold text-2xl text-marine-blue">
          Thank you!
        </h3>
        <div className="text-center">
          <p>Thanks For confirming your subscription!</p>
          <p className="px-6">
            We hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
          </p>
        </div>
      </div>
    </FormLayout>
  )
}

export default Thankyou
