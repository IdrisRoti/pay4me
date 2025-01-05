"use client"

import CustomButton from '../custom-button'
import { FaPlayCircle } from 'react-icons/fa'
import { useTextAnimation } from '@/hooks/useTextAnimation'

const WhyWeBuilt = () => {
    const backgroundImage = "/why-we-built.jpg"
    const {scope} = useTextAnimation()

  return (
    <section
        className='max-w-[75rem] mx-auto px-4'>
       <div
          style={{ 
              background: `url(${backgroundImage})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
          }} 
        className="grid place-items-center rounded-3xl text-center py-[6rem] md:py-[12.375rem] relative after:absolute after:inset-0 after:bg-black/65 overflow-hidden">
            <div className="z-10">
                <h2 ref={scope} className='text-white text-3xl md:text-5xl'>Why we built pay4me</h2>
                <p className="text-white/80 md:text-lg font-light max-w-3xl mt-4 mb-6 w-[90%] mx-auto">Pay4Me is a financial technology company making it easier for international students and immigrants to pay their tuition and fees in minutes.</p>
                <CustomButton className='mx-auto' icon={FaPlayCircle}>Play Video</CustomButton>
            </div>
       </div>
    </section>
  )
}

export default WhyWeBuilt