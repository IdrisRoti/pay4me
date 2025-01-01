import Image from 'next/image'

const BackgroundSpiral = ({className}: {className?: string}) => {
  return (
    <>
        <Image
          src="/spiral.png"
          alt="Colorful spiral in the background"
          width={350}
          height={350}
          className={`blur-[3px] absolute ${className}`}
        />
    </>
  )
}

export default BackgroundSpiral