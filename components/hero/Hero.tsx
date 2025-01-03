import React from 'react'
import CustomButton from '../custom-button'
import BackgroundSpiral from '../backround-spiral'
import TrustedBy from './TrustedBy'
import DeviceFrameSection from './DeviceFrameSection'

const Hero = () => {
  return (
    <section className='text-center bg-transparent max-w-[75rem] px-4 mx-auto'>
        <h1 className='max-w-[61rem] mx-auto  font-semibold max-md:text-3xl max-lg:text-5xl max-lg:leading-[1.3] lg:text-[3.25rem]'>Simplifying Cross-Border Payments for International Students</h1>
        <p className='text-black/60 mt-6 mb-4 md:max-w-[60%] mx-auto'>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
        <CustomButton className='w-fit mx-auto'>Get Started Now</CustomButton>
        <TrustedBy />
        <DeviceFrameSection />

        <BackgroundSpiral className="-left-[50%] md:-left-[20%] lg:-left-[8%] top-[15%]" />
    </section>
  )
}

export default Hero