"use client"; // required for Framer Motion in App Router

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from '@/data/services';

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

const ServicesDetailsArea = ({ slug }) => {
  // Get the specific service data
  const service = services[slug];

  if (!service) {
    return (
      <section className="services-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="services-details-content">
                <p>Service not found</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="services-details-area">
      <div className="container">
        <div className="row">
          {/* Image from Left */}
          <motion.div
            className="col-lg-8"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <Image
                  src={service.details_img}
                  width={950}
                  height={599}
                  alt={service.title}
                />
              </div>
              <div className="services-details-content">
                <h2 className="title">{service.title}</h2>
                <p>{service.des}</p>
                <p>{service.des_2}</p>
                <h4 className="services-content-title">{service.content_title}</h4>
                <ul className="about-list">
                  {service.about_list.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={slideInRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Sidebar from Right */}
          <motion.div
            className="col-lg-4"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <aside className="services-sidebar">
              <div className="widget services-widget">
                <ul className="sidebar-services-lists list-wrap">
                  {service.sidebar_lists.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={slideInRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Link href={`/services/${slug}`}>{item}</Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsArea;
