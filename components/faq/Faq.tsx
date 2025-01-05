"use client"

import { useState } from "react"
import { BiPlus } from "react-icons/bi"
import { twMerge } from "tailwind-merge"
import BackgroundSpiral from "../backround-spiral"
import { useTextAnimation } from "@/hooks/useTextAnimation"

const faqs = [
    {
        id: 1,
        question: "What is the Pay4me App?",
        answer: "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad"
    },
    {
        id: 2,
        question: "What is the Payment Processing Timeline of the Pay4me App? ",
        answer: "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad"
    },
    {
        id: 3,
        question: "How does the Pay4me App Works?",
        answer: "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad"
    },
    {
        id: 4,
        question: "How do I get Started with the Pay4me App",
        answer: "Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad"
    },
]


const Faq = () => {
    const [selectedAccordionId, setSelectedAccordionId] = useState<number | null>(null)

    const {scope} = useTextAnimation()

  return (
    <section className="py-[7.125rem] bg-white">
        <div className="max-w-[75rem] mx-auto overflow-hidden px-4 flex flex-col lg:flex-row gap-[3rem] lg:gap-[6.25rem]">
            <div className="lg:w-[40%] relative md:text-center lg:text-left">
                <h2 ref={scope} className="text-3xl md:text-5xl mb-2">FAQ</h2>
                <p className="md:text-lg font-light text-black/80">Answers to your most pressing Pay4me App Questions. We&apos;ve Got you!</p>
                <svg className="hidden lg:block absolute -right-[10%]" xmlns="http://www.w3.org/2000/svg" width="382" height="184" viewBox="0 0 382 184" fill="none">
                    <path d="M381.123 1.26051C381.532 1.32811 381.808 1.71421 381.741 2.12287L380.639 8.78238C380.571 9.19103 380.185 9.46751 379.777 9.39991C379.368 9.33234 379.092 8.94624 379.159 8.53759L380.138 2.61802L374.219 1.63883C373.81 1.57123 373.534 1.18517 373.601 0.776513C373.669 0.367847 374.055 0.0913498 374.464 0.158951L381.123 1.26051ZM3.17136 10.5795C0.717751 33.644 4.59073 61.0419 12.6465 87.1308C20.7018 113.218 32.9191 137.932 47.0977 155.636C61.3074 173.379 77.326 183.894 92.9829 182.06C108.615 180.229 124.333 166.028 137.807 133.215L139.195 133.785C125.669 166.722 109.644 181.619 93.1574 183.55C76.6957 185.478 60.2198 174.42 45.9269 156.573C31.6028 138.687 19.3093 113.793 11.2132 87.5733C3.11753 61.355 -0.801535 33.7457 1.67978 10.4209L3.17136 10.5795ZM137.807 133.215C151.353 100.228 169.036 78.5371 189.046 63.806C209.049 49.0805 231.331 41.3439 254.018 36.1947C265.36 33.6203 276.814 31.6906 288.137 29.8604C299.466 28.0291 310.659 26.2983 321.512 24.119C343.22 19.7602 363.483 13.6232 380.564 1.3907L381.437 2.61023C364.096 15.0286 343.585 21.217 321.808 25.5896C310.918 27.776 299.69 29.5124 288.376 31.3412C277.055 33.1711 265.642 35.0945 254.35 37.6575C231.767 42.783 209.707 50.4585 189.936 65.014C170.172 79.5638 152.648 101.022 139.195 133.785L137.807 133.215Z" fill="url(#paint0_linear_75_4359)"/>
                    <defs>
                        <linearGradient id="paint0_linear_75_4359" x1="337" y1="214" x2="-15.3279" y2="54.1213" gradientUnits="userSpaceOnUse">
                        <stop offset="0.675281"/>
                        <stop offset="1" stopColor="white"/>
                        </linearGradient>
                    </defs>
                </svg>
                <BackgroundSpiral className="-bottom-[25%] -left-[40%] rotate-45" />
            </div>
            <div className="lg:w-[60%] space-y-8">
                {
                    faqs.map(({id, question, answer}) => {
                        const isSelected = id === selectedAccordionId;

                        return (
                            <article className="text-darkGray bg-bgLightGray rounded-xl overflow-hidden p-6" key={id}>
                                <div
                                    onClick={() => setSelectedAccordionId(prev => prev === id ? null : id)} 
                                    className="flex justify-between items-center w-full cursor-pointer">
                                    <h3 className="text-textDark ">{question}</h3>
                                    <span><BiPlus className="text-[#141414]" /></span>
                                </div>
                                <p className={twMerge("font-light text-black/80 overflow-hidden transition-all duration-700", isSelected ? "h-auto pt-6" : "h-0 pt-0")}>{answer}</p>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Faq