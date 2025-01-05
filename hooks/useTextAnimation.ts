import { useAnimate, useInView } from "motion/react"
import { useEffect } from "react"
import SplitType from "split-type"

export const useTextAnimation = () => {
    const [scope, animate] = useAnimate()
    const inView = useInView(scope, {
        once: true,
        margin: "-50px"
    })

    useEffect(() => {
        new SplitType(scope.current, {
            types: "lines,words",
            tagName: "span"
          })
    }, [scope])

    useEffect(() => {
        if(inView){
            animate(scope.current.querySelectorAll(".word"), {
                transform: "translateY(0%)"
            },{
                duration: .5
            }
        )
        }
    }, [inView, scope, animate])

    return {
        scope
    }

}