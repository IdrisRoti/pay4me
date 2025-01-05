"use client"

import { motion } from 'motion/react'
import Image from 'next/image'

const DeviceFrameSection = () => {
  return (
    <section className='z-10 mt-10 lg:mt-0 relative h-[50vh] md:h-[70vh] max-h-[30rem] [mask-image:linear-gradient(to_top,transparent,black_40%)]'>
        <motion.div 
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}}
            transition={{duration: .5, delay: .5, ease: "easeInOut"}}  
            viewport={{
                once: true,
            }}
            className="absolute top-0 md:left-1/2 md:-translate-x-1/2 z-[5]">
            <Image
                src="/device.png"
                alt="Mobile device showing a welcome screen"
                width={322}
                height={659}
                className='object-cover h-[559px] md:h-[659px] w-[422px] lg:w-[322px]'
            />
        </motion.div>
        <motion.div
            initial={{opacity: 0}} 
            whileInView={{opacity: 1}}
            transition={{duration: .5, ease: "easeInOut"}}  
            viewport={{
                once: true,
            }} 
            className="absolute -top-[20%] w-full left-1/2 -translate-x-1/2">
            <Image
                src="/earth.png"
                alt="Image of the earth"
                width={538}
                height={538}
                className='object-cover w-[538px] h-[738px] mx-auto'
            />
        </motion.div>
        {/* ARROWS */}
        <motion.div 
            initial={{opacity: 0, scale: .7}} 
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: .5, delay: .5, ease: "easeInOut"}}  
            viewport={{
                once: true,
            }}
            className="absolute top-[28%] lg:top-[20%] left-[15%] lg:left-[24%] hidden md:block">
            <Image
                src="/arrowLeft.png"
                alt="Arrow left"
                width={173}
                height={27}
                className='object-cover '
            />
        </motion.div>
        <motion.div
             initial={{opacity: 0, scale: .7}} 
             whileInView={{opacity: 1, scale: 1}}
             transition={{duration: .5, delay: .8, ease: "easeInOut"}}  
             viewport={{
                 once: true,
             }} 
            className="absolute top-[28%] lg:top-[20%] right-[15%] lg:right-[24%] hidden md:block">
            <Image
                src="/arrowRight.png"
                alt="Arrow right"
                width={173}
                height={27}
                className='object-cover '
            />
        </motion.div>
        {/* CARDS */}
        <motion.div
            initial={{opacity: 0, y: 50}} 
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .5, ease: "easeInOut"}}  
            viewport={{
                once: true,
                margin: "-50px"
            }}
            className="absolute top-[0%] lg:top-[20%] left-0 w-[252px] h-[164px] py-5 px-4 hidden md:flex flex-col text-left gap-2.5 rounded-[.625rem] bg-bgGray z-[10]">
            <Image
                src="/card-send.png"
                alt="A credit card icon"
                width={30}
                height={30}
                className='object-cover'
            />
            <p className='text-sm'>Send payments quickly to universities, businesses, or government agencies worldwide.</p>
        </motion.div>
        <motion.div
            initial={{opacity: 0, y: 50}} 
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .5, delay: .8, ease: "easeInOut"}}  
            viewport={{
                once: true,
                margin: "-50px"
            }}
            className="absolute top-[40%] lg:top-[5%] right-0 w-[252px] h-[164px] py-5 px-4 hidden md:flex flex-col text-left gap-2.5 rounded-[.625rem] bg-bgGray z-[10]">
            <Image
                src="/empty-wallet-add.png"
                alt="Empty wallet icon"
                width={30}
                height={30}
                className='object-cover '
            />
            <p className='text-sm'>Easily add funds to your wallet using multiple payment methods.</p>
        </motion.div>
    </section>
  )
}

export default DeviceFrameSection