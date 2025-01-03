import Image from "next/image"
import CustomButton from "../custom-button"

const MakeAPayment = () => {
  return (
    <section className="bg-white">
        <div className="relative w-full max-w-[75rem] mx-auto px-4 flex flex-col lg:flex-row md:text-center lg:text-left items-center justify-between py-[4.8rem] max-lg:gap-10">
            <div className="w-full space-y-6">
                <h2 className="text-3xl md:text-5xl font-semibold">
                    Super fast tuition and school fees 
                    <span className="relative ml-2">payments <div aria-hidden={true} className="w-[99px] h-[10px] bg-primary absolute bottom-0 right-0"/></span>
                    
                </h2>
                <p className="md:text-lg font-light text-black/80">Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>
                <CustomButton className="md:mx-auto lg:mx-0">Make a payment</CustomButton>
            </div>
            <div className="w-full flex md:justify-center lg:justify-end">
                <Image
                    src="/unilag.png"
                    alt="An image showing universities of Lagos, Ghana, Stanford and BYU"
                    width={494}
                    height={313}
                    className="object-cover"
                />
            </div>
        </div>
        <div className="relative w-full max-w-[75rem] mx-auto px-4 flex flex-col lg:flex-row md:text-center lg:text-left items-center justify-between py-[4.8rem] max-lg:gap-10">
            <div className="w-full flex md:justify-center lg:justify-start">
                <Image
                    src="/unilag.png"
                    alt="An image showing universities of Lagos, Ghana, Stanford and BYU"
                    width={319}
                    height={219}
                    className="object-cover"
                />
            </div>
            <div className="w-full space-y-6 max-lg:-order-1">
                <h2 className="text-3xl md:text-5xl font-semibold">
                Pay for SEVIS, WES, Visa, Applications & 
                    <span className="relative ml-2">More <div aria-hidden={true} className="w-[99px] h-[10px] bg-primary absolute bottom-0 right-0"/></span>
                    
                </h2>
                <p className="md:text-lg font-light text-black/80">We help you get closer to your study abroad and relocation goals faster by promptly completing your payment orders for credential evaluation, immigration, and visa purposes.</p>
                <CustomButton className="md:mx-auto lg:mx-0">Make a payment</CustomButton>
            </div>
        </div>
    </section>
  )
}

export default MakeAPayment