import { motion } from 'motion/react';
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}} 
      animate={{opacity: 1, y: 0}}
      transition={{duration: .5, delay: .9, ease: "easeInOut"}}  
      className='flex items-center md:gap-5 py-5 px-4 w-fit mx-auto mt-5'>
        <small className=' text-xs md:text-sm text-textExtralight italic'>Trusted by 1000+ students</small>
        <Image
            src="/trustedByImage.png"
            alt="Images of users trusting the organisation"
            width={172}
            height={44}
        />
    </motion.div>
  )
}

export default TrustedBy;