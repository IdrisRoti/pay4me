import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import CustomButton from "../custom-button"
import Image from "next/image"

export const blogs = [
    {
        id: 1,
        title: "How to Navigate International Payments for Education Without Stress",
        description: "Studying abroad can be an exciting journey, but it comes with its fair share of challenges—one of the biggest being managing international payments for education.",
        image: "/blog1.png"
    },
    {
        id: 2,
        title: "Overcoming Challenges in Foreign Currency Tuition Payments",
        description: "Navigating foreign currency tuition payment options can be daunting for international students. With various methods available and numerous challenges to consider, it&apos;s essential to",
        image: "/blog2.png"
    },
]
const Blogs = () => {
  return (
    <section className='max-w-[75rem] mx-auto px-4 bg-white py-[5.4rem]'>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[30%] flex flex-col md:flex-row lg:flex-col justify-between">
            <div className="space-y-6 w-full md:w-[70%] lg:w-full">
              <h1 className="text-3xl md:text-5xl font-semibold">Latest Blog & Resources</h1>
              <p className="font-light md:text-lg text-black/80">Your Go-To Guide for Pay4Me App: Answers to All Your Questions!</p>
              <CustomButton>View All</CustomButton>
            </div>
            <div className="flex items-center gap-5 max-md:mt-6">
              <button className="grid place-items-center border border-primary size-14 text-primary hover:bg-primary hover:text-black transition duration-500 rounded-full">
                <BsArrowLeft className="size-6" />
              </button>
              <button className="grid place-items-center border border-primary size-14 text-primary hover:bg-primary hover:text-black transition duration-500 rounded-full">
                <BsArrowRight className="size-6" />
              </button>
            </div>
          </div>
          <div className="lg:w-[70%] flex flex-col md:flex-row gap-4 lg:gap-10 mt-10 lg:mt-0">
            {
              blogs.map(({id, title, description, image}) => {

                return (
                  <article className="w-full lg:w-[25rem]" key={id}>
                      <div className="w-full h-[17.5rem] relative rounded-3xl overflow-hidden after:absolute after:inset-0 after:bg-black/20">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="text-sm md:text-lg font-semibold mt-6">{title}</h4>
                      <p className="text-base md:text-xl font-light text-black/80 line-clamp-2 my-4">{description}</p>
                      <CustomButton variant="secondary">Read More</CustomButton>
                  </article>
                )
              })
            }
          </div>
        </div>
    </section>
  )
}

export default Blogs