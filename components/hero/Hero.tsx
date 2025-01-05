"use client"

import CustomButton from '../custom-button'
import BackgroundSpiral from '../backround-spiral'
import TrustedBy from './TrustedBy'
import DeviceFrameSection from './DeviceFrameSection'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className='text-center bg-transparent max-w-[75rem] px-4 mx-auto'>
        <motion.h1
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: .5, ease: "easeInOut"}}  
          className='max-w-[61rem] mx-auto font-semibold max-md:text-3xl max-lg:text-5xl max-lg:leading-[1.3] lg:text-[3.25rem]'>Simplifying Cross-Border Payments for International Students</motion.h1>
        <motion.p 
          initial={{opacity: 0}} 
          animate={{opacity: 1}}
          transition={{duration: .5, delay: .5, ease: "easeInOut"}} 
          className='text-black/60 mt-6 mb-4 md:max-w-[60%] mx-auto'>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</motion.p>
          <motion.div
            initial={{opacity: 0, y: 20}} 
            animate={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .7, ease: "easeInOut"}} 
          >
            <CustomButton className='w-fit mx-auto'>Get Started Now</CustomButton>  
          </motion.div>
        <TrustedBy />
        <DeviceFrameSection />

        <BackgroundSpiral className="-left-[50%] md:-left-[20%] lg:-left-[8%] top-[15%]" />
    </section>
  )
}

export default Hero