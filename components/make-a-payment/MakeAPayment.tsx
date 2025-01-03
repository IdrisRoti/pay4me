import Image from "next/image"
import CustomButton from "../custom-button"

const MakeAPayment = () => {
  return (
    <section className="bg-white">
        <div className="relative w-full max-w-[90rem] mx-auto px-4 flex items-center justify-between py-[4.8rem]">
            <div className="w-full space-y-6">
                <h2 className="text-5xl font-semibold">
                    Super fast tuition and school fees 
                    <span className="relative ml-2">payments <div aria-hidden={true} className="w-[99px] h-[10px] bg-primary absolute bottom-0 right-0"/></span>
                    
                </h2>
                <p className="text-lg font-light text-black/80">Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home.</p>
                <CustomButton>Make a payment</CustomButton>
            </div>
            <div className="w-full flex justify-end">
                <Image
                    src="/unilag.png"
                    alt="An image showing universities of Lagos, Ghana, Stanford and BYU"
                    width={494}
                    height={313}
                    className="object-cover"
                />
            </div>
        </div>
        <div className="relative w-full max-w-[90rem] mx-auto px-4 flex items-center justify-between py-[4.8rem]">
            <div className="w-full flex justify-start">
                <Image
                    src="/unilag.png"
                    alt="An image showing universities of Lagos, Ghana, Stanford and BYU"
                    width={319}
                    height={219}
                    className="object-cover"
                />
            </div>
            <div className="w-full space-y-6">
                <h2 className="text-5xl font-semibold">
                Pay for SEVIS, WES, Visa, Applications & 
                    <span className="relative ml-2">More <div aria-hidden={true} className="w-[99px] h-[10px] bg-primary absolute bottom-0 right-0"/></span>
                    
                </h2>
                <p className="text-lg font-light text-black/80">We help you get closer to your study abroad and relocation goals faster by promptly completing your payment orders for credential evaluation, immigration, and visa purposes.</p>
                <CustomButton>Make a payment</CustomButton>
            </div>
        </div>
    </section>
  )
}

export default MakeAPayment