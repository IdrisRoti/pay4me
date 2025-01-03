import Link from "next/link"

import Logo from "../header/Logo"

import { BsTwitter } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6"

const footerLinks = [
    {
        label: "Company",
        links: [
            {
                name: "About",
                href: "#",
            },
            {
                name: "Blog",
                href: "#",
            },
            {
                name: "FAQs",
                href: "#",
            },
            {
                name: "Support",
                href: "#",
            },
        ]
    },
    {
        label: "Legal",
        links: [
            {
                name: "Terms of Service",
                href: "#",
            },
            {
                name: "Order Cancellation Policy",
                href: "#",
            },
            {
                name: "Privacy Policy",
                href: "#",
            },
            {
                name: "KYC/AML Policy",
                href: "#",
            },
        ]
    },
    {
        label: "Resources",
        links: [
            {
                name: "Android Reviews",
                href: "#",
            },
            {
                name: "IOS Reviews",
                href: "#",
            },
            {
                name: "Jobs",
                href: "#",
            },
            {
                name: "Testimonials",
                href: "#",
            },
        ]
    },
]

const Footer = () => {
  return (
    <footer className='bg-white pt-7'>
        <div className="max-w-[75rem] mx-auto flex flex-col lg:flex-row justify-between px-4 gap-14 lg:gap-0">
            <div className="flex lg:flex-col justify-between">
                <div className="flex flex-col gap-2">
                    <Logo className="text-black" />
                    <small className="text-[#8c8c8c] text-lg">© 2020-2024 Pay4Me, Inc.</small>
                </div>
                <div className="flex items-center gap-2">
                    <BsTwitter />
                    <FaFacebook />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                {
                    footerLinks.map(({label, links}) => (
                        <div key={label} className="flex flex-col gap-6">
                            <h4 className="text-lg font-semibold">{label}</h4>
                            {
                                links.map(({name, href}) => (
                                    <Link className="text-[#8C8C8C] text-lg" key={name} href={href}>{name}</Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="h-[350px] w-full max-w-5xl mx-auto text-[110px] md:text-[200px] lg:text-[259px] text-primary tracking-[-17.34px] -mb-[65%] md:-mb-[25%] lg:-mb-[10%] opacity-60">
            Pay4me
        </div>
    </footer>
  )
}

export default Footer