import Link from "next/link";
import Image from "next/image";

const aboutContent = {
    title: "Who We Are",
    des: (
        <>
            <p>Avesto Global is a trusted IT solutions provider specializing in Microsoft 365, Azure, cloud engineering, cybersecurity, and information protection. We empower businesses—from startups to enterprises—to secure their data, streamline operations, and innovate with confidence.</p>
            <p>Our name, inspired by ancient roots, symbolizes truth and innovation, reflecting our commitment to delivering reliable, cutting-edge technology solutions worldwide.</p>
            <p>With a passion for simplicity and security, we make IT work for you. Whether it's optimizing your Microsoft 365 environment, engineering a robust Azure cloud infrastructure, or protecting your sensitive information with advanced cybersecurity, Avesto is your partner for a safer, smarter digital future.</p>
        </>
    ),
    btn: "Let's contact us",
    connectMessage: "Whether you're looking to migrate to the cloud, enhance your security posture, or optimize your IT infrastructure, Avesto Global is here to assist you. Contact us today to take the first step toward a smarter, more secure digital future."
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
                            <h2 className="title mb-4">{title}</h2>
                            <p>{des}</p>
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