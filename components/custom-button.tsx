import { TiArrowRight } from "react-icons/ti";

type TCustomButton = {
    children: React.ReactNode,
    variant?: "primary" | "secondary",
    className?: string
}

const CustomButton = ({ children, variant= "primary", className }: TCustomButton) => {
  return (
    <button className={`
                min-w-[15rem] h-12 rounded-full flex items-center justify-center gap-4 text-lg font-bold text-black hover:opacity-80 transition group outline-none border-none
                ${ variant === "primary" ? "bg-primary" : "bg-white" }
                ${ className }

                `}>
        <span>{children}</span>
        <span className="bg-black h-7 aspect-square rounded-full grid place-items-center"><TiArrowRight className={`size-6 -rotate-45 group-hover:rotate-0 transition ${variant === "primary" ? "text-primary" : "text-white"}`} /></span>
    </button>
  )
}

export default CustomButton