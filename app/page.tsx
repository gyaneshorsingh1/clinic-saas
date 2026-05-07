import Hero from "@/src/components/layout/DashboardLayout";
import Features from "@/src/components/layout/Features";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import Image from "next/image";


export default function Home() {
  return(
    <>
      <div>
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  )
}
