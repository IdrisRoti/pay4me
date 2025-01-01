import BackgroundSpiral from "@/components/backround-spiral";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="relative bg-background max-w-[90rem] overflow-hidden mx-auto font-[Poppins] px-4">
        <Header />
        <BackgroundSpiral className="-right-[40%] md:-right-[10%] -top-[10%]" />
        <main className="mt-[7rem] md:mt-[9.75rem]">
          <Hero />
        </main>
    </div>
  );
}
  