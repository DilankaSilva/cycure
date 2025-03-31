import Link from "next/link";
import Image from "next/image";

const aboutContent = {
    title: "Avesto Global: Your Partner in Cloud Solutions",
    des: (
        <>
            At Avesto Global, we are dedicated to helping businesses harness the power of cloud technology. Our innovative solutions empower organizations to scale, secure, and streamline their operations effectively.
        </>
    ),
    list: [
        "Expertise in cloud computing and cybersecurity",
        "Customized solutions for unique business needs",
        "Commitment to data security and compliance"
    ],
    btn: "Let's contact us",
    // whyChooseUs: [
    //     "Expertise & Experience: Our team comprises seasoned professionals with extensive technical knowledge and practical experience in cloud computing and cybersecurity.",
    //     "Tailored Solutions: We recognize that every business has unique needs, which is why we customize our services to align with your specific requirements.",
    //     "Security & Compliance: We prioritize the security of your data and ensure compliance with industry standards to safeguard your business assets.",
    //     "Customer-Centric Approach: Your success is our top priority. We collaborate closely with you to deliver the best IT solutions tailored to your goals."
    // ],
    connectMessage: "Whether you’re looking to migrate to the cloud, enhance your security posture, or optimize your IT infrastructure, Avesto Global is here to assist you. Contact us today to take the first step toward a smarter, more secure digital future."
};

const { title, des, list, btn, whyChooseUs, connectMessage } = aboutContent;

const About = ({ style }) => {
    return (
        <section className={`${style ? "inner-about-padding" : "about-area"}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <Image src="/assets/img/others/about.png" width={705} height={567} alt="Avesto Global" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-11">
                        <div className="about-content">
                            <h2 className="title">{title}</h2>
                            <p>{des}</p>
                            <ul className="about-list">
                                {list.map((li, index) => (
                                    <li key={index}>{li}</li>
                                ))}
                            </ul>
                            <p>{connectMessage}</p>
                            <Link href="/contact" className="btn">
                                <span className="text">{btn}</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className="row mt-5">
                    <div className="col-lg-12">
                        <h2 className="title">Why Choose Us?</h2>
                        <ul className="about-list">
                            {whyChooseUs.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <h3 className="title">Let’s Connect</h3>
                        <p>{connectMessage}</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default About;