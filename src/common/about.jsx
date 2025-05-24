import Link from "next/link";
import Image from "next/image";
import Team from "./team";

const aboutContent = {
  title: "Who We Are",
  des: (
    <>
      <p>
        Founded in Sri Lanka, Avesto Global is a trusted IT partner delivering
        innovative cloud and cybersecurity solutions globally. Bridging European
        expertise with Sri Lankan innovation, we bring a unique perspective to
        secure and scalable technology.
      </p>
    </>
  ),
  btn: "Let's contact us",
  connectMessage:
    "Whether you're looking to migrate to the cloud, enhance your security posture, or optimize your IT infrastructure, Avesto Global is here to assist you. Contact us today to take the first step toward a smarter, more secure digital future.",
  title1: "Our Mission",
  des1: "Empowering businesses with secure, simple, and scalable technology solutions.",
  coreValues: {
    title: "Our Core Values",
    values: [
      {
        title: "Security",
        text: "Protecting your data with enterprise-grade safeguards.",
      },
      {
        title: "Innovation",
        text: "Pioneering cutting-edge tools for tomorrow's challenges.",
      },
      {
        title: "Trust",
        text: "Building partnerships through transparency and results.",
      },
      {
        title: "Global Reach",
        text: "Delivering localized solutions with international expertise.",
      },
      {
        title: "Simplicity",
        text: "Streamlining complexity into user-friendly systems.",
      },
    ],
  },
  cta: {
    title: "Ready to Transform Your IT Strategy?",
    btnText: "Discover Our Solutions",
  },
};

const { title, des, title1, des1, btn, connectMessage, coreValues } =
  aboutContent;

const ValueCard = ({ title, text }) => {
  return (
    <div
      className="value-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </h3>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#555",
          maxWidth: "300px",
        }}
      >
        {text}
      </p>
    </div>
  );
};

const About = ({ style }) => {
  const firstRowValues = coreValues.values.slice(0, 3);
  const secondRowValues = coreValues.values.slice(3);

  return (
    <section className={`${style ? "inner-about-padding" : "about-area"}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <Image
                src="/assets/img/others/about.png"
                width={705}
                height={567}
                alt="Avesto Global"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-11">
            <div className="about-content">
              <h2 className="title mb-4">{title}</h2>
              <p>{des}</p>
            </div>
          </div>
        </div>

        <div className="align-items-center">
          <div className="mission-content">
            <div style={{ textAlign: "center" }}>
              <h2 className="title mb-4">{title1}</h2>
            </div>
            <p style={{ textAlign: "center" }}>{des1}</p>
          </div>
        </div>

        <div className="values-area" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-lg-12">
              <div className="mission-content" style={{ margin: "0 0 50px" }}>
                <h2 className="title mb-4" style={{ textAlign: "center" }}>
                  {coreValues.title}
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            {firstRowValues.map((value, index) => (
              <div key={index} className="col-lg-4 col-md-4 mb-5 text-center">
                <ValueCard title={value.title} text={value.text} />
              </div>
            ))}
          </div>

          <div className="row justify-content-center">
            {secondRowValues.map((value, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-4 mb-5 mx-3 text-center"
              >
                <ValueCard title={value.title} text={value.text} />
              </div>
            ))}
          </div>
        </div>
        <div>
            <Team/>
        </div>
        <div className="row mt-20 mb-100">
          <div className="col-lg-12 text-center">
            <div className="about-cta">
              <h3>{aboutContent.cta.title}</h3>
              <Link href="/services/microsoft-365-solutions" className="btn mt-40">
                <span className="text">{aboutContent.cta.btnText}</span>
                <span className="shape"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
