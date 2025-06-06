"use client"
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const options = {
    fullScreen: {
        enable: false,
        zIndex: -1,
    },
    fpsLimit: 300,
    particles: {
        number: {
            value: 0,
        },
        color: {
            value: "#73C9C6",
        },
        life: {
            duration: {
                value: 10,
                sync: false,
            },
            count: 1,
        },
        opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
                enable: true,
                speed: 3,
            },
        },
        size: {
            value: {
                min: 5,
                max: 10,
            },
        },
        move: {
            enable: true,
            speed: 5,
            random: true,
            size: true,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "trail",
            },
            resize: true,
        },
        modes: {
            trail: {
                delay: 0.5,
                pauseOnStop: true,
                quantity: 4,
            },
        },
    },
}


const Banner = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <section className="banner-area banner-three-bg fix" style={{ backgroundImage: `url("assets/img/banner/background.jpg")` }}>
            { /* Particles component only in the banner section */}
            <Particles
                id="particles-js"
                init={particlesInit}
                options={options}
            />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="banner-three-content text-center">
                            <h2 className="heading wow fadeInUp" data-wow-delay=".2s"> <span>Secure</span> Your Digital Future Now </h2>
                            <p className="wow fadeInUp" data-wow-delay=".4s">Avesto Global delivers Cloud Engineering, M365, Modern Workplace, Information Protection solutions within your reach. </p>
                            <Link href="/services/microsoft-365-solutions" className="btn wow fadeInUp" data-wow-delay=".6s" style={{marginRight:'6px'}}>
                                <span className="text">Explore Our Solutions</span>
                                <span className="shape"></span>
                            </Link>
                            <Link href="/contact" className="btn wow fadeInUp" data-wow-delay=".6s" style={{marginLeft:'6px'}}>
                                <span className="text">Contact Us</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
