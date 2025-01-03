import BackgroundSpiral from "@/components/backround-spiral";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import LogoTicker from "@/components/LogoTicker";
import MakeAPayment from "@/components/make-a-payment/MakeAPayment";
import TrustedBy from "@/components/trusted-by/TrustedBy";

export default function Home() {
  return (
    <div className="relative bg-background overflow-hidden font-[Poppins]">
        <Header />
        <BackgroundSpiral className="-right-[40%] md:-right-[10%] -top-[10%]" />
        <main className="mt-[7rem] md:mt-[9.75rem]">
          <Hero />
          <LogoTicker />
          <MakeAPayment />
          <TrustedBy />
        </main>
    </div>
  );
}
  