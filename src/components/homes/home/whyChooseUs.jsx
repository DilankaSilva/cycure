"use client"; // required for Framer Motion in App Router

import Image from "next/image";
import { motion } from "framer-motion";

const about_content = {
  about_img: "/assets/img/others/security_img.png",
  title: "Why Partner with Avesto?",
  des: (
    <>
      We provide comprehensive security and IT solutions tailored to your business needs, combining global expertise with local care.
    </>
  ),
  about_items: [
    {
      title: "Trusted Security",
      description:
        "Our Zero Trust frameworks and AI-driven threat detection keep your data safe from modern cyber threats.",
    },
    {
      title: "Microsoft Expertise",
      description:
        "Certified specialists in Microsoft 365 and Azure solutions for seamless productivity and cloud engineering.",
    },
    {
      title: "Innovative Solutions",
      description:
        "From AI automation to cloud optimization, we help you stay ahead with cutting-edge technology.",
    },
    {
      title: "Global Expertise, Local Care",
      description:
        "With a global presence, we deliver personalized IT solutions tailored to your unique needs.",
    },
    {
      title: "Simplified IT",
      description:
        "We make complex technology easy, so you can focus on growing your business, not managing IT.",
    },
    {
      title: "Sustainable Impact",
      description:
        "Our eco-friendly IT consulting ensures your tech aligns with a greener future.",
    },
  ],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };



const WhyChooseUs = () => {
  const { about_img, title, des, about_items } = about_content;

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image from Left */}
          <motion.div
            className="col-lg-6 mb-5 mb-lg-0"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="why-choose-us__image">
              <Image
                src={about_img}
                width={670}
                height={606}
                alt="Security illustration"
                className="img-fluid"
              />
            </div>
          </motion.div>

          {/* Content from Right */}
          <motion.div
            className="col-lg-6"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="why-choose-us__content">
              <h2 className="why-choose-us__title">{title}</h2>
              <p className="why-choose-us__description">{des}</p>

              <ul className="why-choose-us__list">
                {about_items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="why-choose-us__item"
                    variants={slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <i className="why-choose-us__icon fas fa-check-circle"></i>
                    <div className="why-choose-us__item-content">
                      <h3 className="why-choose-us__item-title">{item.title}</h3>
                      <p className="why-choose-us__item-description">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
