import Image from 'next/image'

const TrustedBy = () => {
  return (
    <div className='flex items-center md:gap-5 py-5 px-4 w-fit mx-auto mt-5'>
        <small className=' text-xs md:text-sm text-textExtralight italic'>Trusted by 1000+ students</small>
        <Image
            src="/trustedByImage.png"
            alt="Images of users trusting the organisation"
            width={172}
            height={44}
        />
    </div>
  )
}

export default TrustedBy;