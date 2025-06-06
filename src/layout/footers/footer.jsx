"use client"
import Link from 'next/link'

const footer_data = [
    {
        id: 1,
        title: "Quick Links",
        class: "column-2",
        links: [
            { list: "About us", link: "/about-us" },
            { list: "Case Studies", link: "/srevices" },
            { list: "Terms & Conditions", link: "/contact" },
            { list: "Privacy Poilicy", link: "/contact" },
            { list: "Contact Us", link: "/contact" },
        ]
    },
    {
        id: 2,
        title: "Our Services",
        class: "column-3",
        links: [
            { list: "Microsoft 365 Solutions", link: "/services/microsoft-365-solutions" },
            { list: "Azure cloud Solution", link: "/services/azure-cloud-engineering" },
            { list: "Cybersecurity Solutions", link: "/services/cybersecurity-solutions" },
            { list: "CSP and Additional Solutions", link: "/services/csp-additional-solutions" },
            { list: " BCDR ", link: "/services/bcdr-services" },
        ]
    }
]
const footer_content = {
    number: "+94 78 246 5357",
    email: "agency@mail.com",
    des: (<>38 Queens Road, Colombo, <br/> Sri Lanka</>),
    icon: ["fab fa-linkedin","fa-x-twitter"]
    // "fab fa-twitter"
}
const { number, email, des, icon } = footer_content;
const Footer = () => {

    return (
        <footer className="footer-area footer-bg" style={{backgroundImage:`url(/assets/img/bg/footer_bg.jpg)`}}>
            <div className="container">
                <div className="footer-top-wrap">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-contact-info">
                                    <h4 className="number">{number}</h4>
                                    <h4 className="email">{email} </h4>
                                    <p>{des}</p>
                                    <ul className="footer-social list-wrap">
                                        {icon.map((li, i) => (
                                            <li key={i}><Link href="#"><i className={li}></i></Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {footer_data.map((item) => (
                            <div key={item.id} className={`col-xl-2 col-lg-3 col-md-6 col-sm-4 ${item.class}`}>
                                <div className="footer-widget">
                                    <h4 className="fw-title">{item.title}</h4>
                                    <ul className="footer-link">
                                        {item.links.map((li, index) => (
                                            <li key={index}><Link href={li.link}>{li.list}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-6 col-sm-7">
                            <div className="footer-widget">
                                <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
                                    <div className="form-grp">
                                        <input type="email" required placeholder="Your email address" />
                                    </div>
                                    <button type="submit" className="btn">Subscribe now <span className="shape"></span></button>
                                    <p className="newsletter-alert"><span>*</span> Don&apos;t worry, we don&apos;t spam</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <p className="copyright-text">© 2025 Avesto Global (Private) Limited.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
