"use client"

import Image from "next/image"
import StarIcons from "./StarIcons"
import CustomStarRating from "../custom-star-rating"

import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

const TrustedbyContent = [
    {
        id: 1,
        name: "Chizoba Henry",
        rating: 4,
        image: "/henry.png"
    },
    {
        id: 2,
        name: "Janet Bliss",
        rating: 4,
        image: "/janet.jpg"
    },
    {
        id: 3,
        name: "Ayo Charles",
        rating: 4,
        image: "/ayo.jpg"
    }
]

const TrustedBy = () => {
    const [hoveredProfileId, setHoveredProfileId] = useState(1)

  return (
    <section className="max-w-[90rem] mx-auto px-4 py-[5.18rem] relative">
        <div className="md:grid grid-cols-12 gap-14">
            <div className="col-span-full lg:col-span-4">
                <h2 className="relative font-semibold text-3xl md:text-5xl leading-[1.3] md:text-center lg:text-left">
                    <span>Trusted by <br /> thousands of students and immigrants around the world</span>
                    <div className="h-2 lg:h-2.5 w-[117px] bg-primary absolute -right-1 top-4 md:hidden lg:block" />
                </h2>
            </div>
            <div className="col-span-full lg:col-span-8 flex flex-col md:flex-row items-center h-[31.4rem] gap-4 md:gap-6 max-md:mt-14">
                {
                    TrustedbyContent.map(({id, image, name, rating}) => {

                        const isActive = id === hoveredProfileId;

                        return (
                            <div 
                                onMouseEnter={() => setHoveredProfileId(id)}
                                onMouseLeave={() => setHoveredProfileId(1)}
                                key={id} 
                                className={twMerge(" rounded-xl md:rounded-2xl overflow-hidden relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[174px] after:bg-gradient-to-t after:from-[rgba(30,30,30,0.80)] after:to-[rgba(30,30,30,0.00) 77.17%)] transition-all duration-700", isActive ? "w-full md:w-[50%] h-[50%] md:h-full" : "w-full md:w-[25%] h-[25%] md:h-full")}>
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="px-5 absolute bottom-0 w-full text-white py-4 z-10">
                                    <h3 className="font-semibold text-2xl md:text-3xl">{name}</h3>
                                    <CustomStarRating readonly rating={rating} className="hidden md:block" />
                                    <CustomStarRating readonly rating={rating} small className="md:hidden" />
                                </div>
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={isActive ? {opacity: 1} : {opacity: 0}}
                                    transition={{ duration: .7, ease: "easeInOut"}}
                                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-primary group/play-button">
                                    <FaPlayCircle className="size-[3.5rem] md:size-[5.56rem] group-hover/play-button:scale-110 transition duration-500" />
                                </motion.button>
                            </div>
                        )   
                    })
                }
            </div>
        </div>

        <StarIcons />
    </section>
  )
}

export default TrustedBy