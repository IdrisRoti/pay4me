import BackgroundSpiral from "@/components/backround-spiral";
import Faq from "@/components/faq/Faq";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import LogoTicker from "@/components/LogoTicker";
import MakeAPayment from "@/components/make-a-payment/MakeAPayment";
import TrustedBy from "@/components/trusted-by/TrustedBy";
import WhyWeBuilt from "@/components/why-we-built/WhyWeBuilt";
import DownloadApp from "../components/download-app/DownloadApp";
import Footer from "@/components/footer/Footer";
import Blogs from "@/components/blog/Blogs";

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
          <Faq />
          <WhyWeBuilt />
          <Blogs />
          <DownloadApp />
        </main>
        <Footer />
    </div>
  );
}
  