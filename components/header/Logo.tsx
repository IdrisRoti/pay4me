import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex items-center gap-[0.625rem]'>
        <Image
            src="/logo.png"
            alt="pay4me logo"
            width={43}
            height={43}
            className='object-cover'
        />
        <p className='text-white font-bold text-lg font-[Inter] hidden lg:block'>Pay4me App</p>
    </div>
  )
}

export default Logo