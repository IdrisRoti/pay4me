"use client"

import { RiMenu3Fill } from "react-icons/ri";

import CustomButton from "../custom-button"
import Logo from "./Logo"
import Navbar from "./Navbar"
import { motion } from "motion/react";

const Header = () => {
  return (
    <motion.header
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      transition={{duration: .5, delay: 1, ease: "easeInOut"}} 
      className="fixed left-0 top-3 md:top-6 w-screen h-[3.5rem] md:h-[5rem] overflow-hidden px-4 z-[99]">
        <div className="bg-black h-full max-w-[83rem] mx-auto flex items-center justify-between px-2 md:px-6 py-5 rounded-2xl">
            <Logo />
            <Navbar />
            <CustomButton className="hidden md:flex" variant="secondary">Download Now</CustomButton>
            <RiMenu3Fill className="text-primary size-7 md:hidden" />
        </div>
    </motion.header>
  )
}

export default Header