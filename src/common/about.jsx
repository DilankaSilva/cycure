import Link from "next/link";
import Image from "next/image";

const about_content = {
    title: "Our Agency Experts in Cyber Security & Data Management",
    des: (<>Nam libero tempore, cum soluta nobis eligendi optio cumque quo minus quod maxime placeat facere possimus assumenda omnis dolor repellendu sautem Temporibus quibusdam et aut officiis nam libero tempore</>),
    list: ["Understand security and compliance", "Extremely low response time", "Always ready for your growth"],
    btn: "More About us"
}
const { title, des, list, btn } = about_content;
const About = ({ style }) => {
    return (
        <section className={`${style ? "inner-about-padding" : "about-area"}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                        <Image src="/assets/img/others/about.png" width={705} height={567} alt="theme-pure" />
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
                            <Link href="/about" className="btn">
                                <span className="text">{btn}</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
