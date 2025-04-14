import Banner from "./banner"
import Brand from "@/common/brand"
import Service from "./services"
import StepsArea from "@/common/steps-area"
import VideoArea from "./video-area"
import WhyChooseUs from "@/components/homes/home/whyChooseUs"
import Team from "@/common/team"
import Marquee from "@/common/marquee"
import Blog from "@/common/blog"
import PriceArea from "@/common/price-area"
import Header from "@/layout/headers/header"

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Banner />
        <Service />
        <WhyChooseUs />
        <Marquee style={true} />
        <StepsArea />
        <Team />
        <VideoArea />
        <PriceArea style={true} />
        <Brand style_2={true} />
        <Blog />
      </main>
    </>
  )
}

export default Home
