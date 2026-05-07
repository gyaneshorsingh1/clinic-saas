import Footer from "@/src/components/layout/Footer"
import Navbar from "@/src/components/layout/Navbar"


export default function PricingLayout({
    children,
}:{
    children: React.ReactNode
})
  {
    return(
        <>
          <Navbar />
          {children}
          <Footer />
        </>
    )
  }