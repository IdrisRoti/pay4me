"use client"

import Image from "next/image"
import CustomInfiniteCarousel from "./custom-infinite-carousel"

const logoUrls1 = [
    {
        name: "Moonify",
        url:  "/monnify.png",
        width: 146,
        height: 43
    },
    {
        name: "Across the horizon",
        url:  "/across.png",
        width: 153,
        height: 54
    },
    {
        name: "Mpower Financing",
        url:  "/mpower.png",
        width: 175,
        height: 54
    },
    {
        name: "Prodigy finance",
        url:  "/prodigy.png",
        width: 199,
        height: 54
    },
    {
        name: "Techstars",
        url:  "/techstars.png",
        width: 322,
        height: 54
    },
]

const logoUrls2 = [
    {
        name: "Seerbit",
        url:  "/seerbit.png",
        width: 147,
        height: 38
    },
    {
        name: "Verto",
        url:  "/verto.png",
        width: 146,
        height: 50
    },
    {
        name: "Stripe",
        url:  "/stripe.png",
        width: 132,
        height: 54
    },
    {
        name: "Paystack",
        url:  "/paystack.png",
        width: 235,
        height: 54
    },
    {
        name: "Providus bank",
        url:  "/providus.png",
        width: 128,
        height: 63
    },
    {
        name: "Smile id",
        url:  "/smileId.png",
        width: 167,
        height: 49
    },
]

const LogoTicker = () => {
  return (
    <section className="overflow-hidden mt-20 mb-[9.75rem] max-w-[75rem] px-4 mx-auto flex flex-col gap-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <CustomInfiniteCarousel>
            {
                logoUrls1.map(({url, name, width, height}) => (
                    <div
                        key={name}
                        style={{
                            width: `${width}px`,
                            height: `${height}px`
                        }}
                        className="relative mr-12">
                        <Image
                            src={url}
                            alt={name}
                            fill
                            className=""
                        />
                    </div>
                ))
            }
        </CustomInfiniteCarousel>
        <CustomInfiniteCarousel direction="right">
            {
                logoUrls2.map(({url, name, width, height}) => (
                    <div
                        key={name}
                        style={{
                            width: `${width}px`,
                            height: `${height}px`
                        }}
                        className="relative mr-12">
                        <Image
                            src={url}
                            alt={name}
                            fill
                            className=""
                        />
                    </div>
                ))
            }
        </CustomInfiniteCarousel>
    </section>
  )
}

export default LogoTicker