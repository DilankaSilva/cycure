import Header from "@/layout/headers/header";
import Breadcrumb from "@/common/breadcrumb";
import About from "@/common/about";

const AboutMain = () => {
  return (
    <>
      <Header />
      <main className="main-area fix">
        <Breadcrumb title="About Us" sm_title="About Us" />
        <About style={true} />
      </main>
    </>
  )
}

export default AboutMain;