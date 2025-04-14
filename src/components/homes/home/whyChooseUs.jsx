import Image from "next/image";

const about_content = {
    about_img: "/assets/img/others/security_img.png",
    title: "Why Partner with Avesto?",
    des: (<>We provide comprehensive security and IT solutions tailored to your business needs, combining global expertise with local care.</>),
    about_items: [
        {
            title: "Trusted Security",
            description: "Our Zero Trust frameworks and AI-driven threat detection keep your data safe from modern cyber threats."
        },
        {
            title: "Microsoft Expertise",
            description: "Certified specialists in Microsoft 365 and Azure solutions for seamless productivity and cloud engineering."
        },
        {
            title: "Innovative Solutions",
            description: "From AI automation to cloud optimization, we help you stay ahead with cutting-edge technology."
        },
        {
            title: "Global Expertise, Local Care",
            description: "With a global presence, we deliver personalized IT solutions tailored to your unique needs."
        },
        {
            title: "Simplified IT",
            description: "We make complex technology easy, so you can focus on growing your business, not managing IT."
        },
        {
            title: "Sustainable Impact",
            description: "Our eco-friendly IT consulting ensures your tech aligns with a greener future."
        }
    ]
}

const WhyChooseUs = () => {
    const { about_img, title, des, about_items } = about_content;

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Section */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="why-choose-us__image wow fadeInLeft" data-wow-delay=".2s">
                            <Image
                                src={about_img}
                                width={670}
                                height={606}
                                alt="Security illustration"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-lg-6">
                        <div className="why-choose-us__content">
                            <h2 className="why-choose-us__title">{title}</h2>
                            <p className="why-choose-us__description">{des}</p>

                            <ul className="why-choose-us__list">
                                {about_items.map((item, index) => (
                                    <li key={index} className="why-choose-us__item">
                                        <i className="why-choose-us__icon fas fa-check-circle"></i>
                                        <div className="why-choose-us__item-content">
                                            <h3 className="why-choose-us__item-title">{item.title}</h3>
                                            <p className="why-choose-us__item-description">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;