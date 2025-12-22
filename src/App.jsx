import AnnouncementBar from "@/components/layout/AnnouncementBar"
import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/home/Hero"
import BestSellers from "@/components/home/BestSellers"
import WhyMinimalist from "@/components/home/WhyMinimalist"
import Categories from "@/components/home/Categories"


export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <BestSellers />
      <WhyMinimalist />
      <Categories />
    </>
  )
}




