import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const Logo = ({className}: {className?: string}) => {
  return (
    <div className='flex items-center gap-[0.625rem]'>
        <Image
            src="/logo.png"
            alt="pay4me logo"
            width={43}
            height={43}
            className='object-cover'
        />
        <p className={twMerge('text-white font-bold text-lg hidden lg:block', className)}>Pay4me App</p>
    </div>
  )
}

export default Logo