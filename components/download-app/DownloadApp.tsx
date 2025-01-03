import Image from 'next/image'
import BackgroundSpiral from '../backround-spiral'

const DownloadApp = () => {
  return (
    <section className='bg-white py-[6.56rem]'>
        <div className="max-w-[75rem] lg:h-[448px] mx-auto bg-background rounded-3xl flex flex-col lg:flex-row px-4 md:px-[2.625rem] overflow-hidden relative">
            <div className="lg:w-[60%] pt-[3.8rem] md:text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-semibold capitalize">Download the Pay4Me App</h2>
                <p className='md:text-xl mt-4 mb-10'>Our Custom QR code will take you to your app store to download our awesome native apps</p>
                <div className="flex items-center md:justify-center lg:justify-start gap-7">
                    <button>
                        <Image
                            src="/play-store.png"
                            alt="Android google play store"
                            width={146}
                            height={48}
                            className='object-cover'
                        />
                    </button>
                    <button>
                        <Image
                            src="/app-store.png"
                            alt="Apple app store"
                            width={146}
                            height={48}
                            className='object-cover'
                        />
                    </button>
                </div>
            </div>
            <div className="lg:w-[40%] relative flex items-end h-full">
                <Image
                    src="/qr-code.png"
                    alt="QR code to downdload app"
                    width={176}
                    height={176}
                    className='object-cover lg:absolute bottom-0'
                />
                <Image
                    src="/device.png"
                    alt="Device Mockup showing mobile wallet"
                    width={322}
                    height={660}
                    className='object-cover lg:absolute -bottom-[52%] right-0'
                />
            </div>
            <BackgroundSpiral className='-bottom-[20%] -left-[10%] z-10' />
        </div>
    </section>
  )
}

export default DownloadApp