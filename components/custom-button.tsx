import { IconType } from "react-icons";
import { TiArrowRight } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

type TCustomButton = {
    children: React.ReactNode,
    variant?: "primary" | "secondary",
    className?: string,
    icon?: IconType
}

const CustomButton = ({ children, variant= "primary", className, icon=TiArrowRight }: TCustomButton) => {
  const Icon = icon;
  return (
    <button className={`
                min-w-[15rem] h-12 rounded-full flex items-center justify-center gap-4 text-lg font-bold text-black hover:opacity-80 transition group outline-none border border-primary
                ${ variant === "primary" ? "bg-primary" : "bg-white" }
                ${ className }

                `}>
        <span>{children}</span>
        <span className="bg-black h-7 aspect-square rounded-full grid place-items-center">
          <Icon className={twMerge("size-6 transition",
            variant === "primary" ? "text-primary" : "text-white",
            icon === TiArrowRight && "-rotate-45 group-hover:rotate-0"
          )}
          />
        </span>
    </button>
  )
}

export default CustomButton