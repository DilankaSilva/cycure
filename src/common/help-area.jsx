"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import tabs_data from '@/data/tab-data';
import Image from 'next/image';

const tab_title = ["Technology Startups", "Financial Services", "Sustainable Businesses", "Healthcare", "E-Commerce", "Professional Services", "Manufacturing"];

const HelpArea = ({ style_3 }) => {
    // Define state to keep track of the active tab
    const [activeTab, setActiveTab] = useState(0);

    // Handle tab click event
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className={`cycure-help-area ${style_3 ? "cycure-help-two-area " : ""}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <motion.div
                            className="cycure-help-img"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <Image
                                src="/assets/img/others/help_img.png"
                                width={603}
                                height={654}
                                alt="img"
                                className="img-fluid"
                            />
                        </motion.div>
                    </div>

                    <div className="col-xl-6 col-lg-8">
                        <motion.div
                            className="section-title mb-25"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <h2 className="title">Experts Help You to Enhance Your Cyber Defenses</h2>
                        </motion.div>

                        <motion.ul
                            className="nav nav-tabs"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.2 }}
                            id="helpTab"
                            role="tablist"
                        >
                            {tab_title.map((tab, index) => (
                                <motion.li
                                    key={index}
                                    className="nav-item"
                                    role="presentation"
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeInUp}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <motion.button
                                        onClick={() => handleTabClick(index)}
                                        className={activeTab === index ? 'nav-link active' : 'nav-link'}
                                        id={`tab-${index}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {tab}
                                    </motion.button>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.div
                            className="tab-content"
                            id='helpTabContent'
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {tabs_data.map((item, index) => (
                                <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}>
                                    <div className="help-content">
                                        <h4 className="title">{item.title}</h4>
                                        <p>{item.des}</p>
                                        <ul className="about-list">
                                            {item.list.map((li, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    variants={fadeInUp}
                                                    viewport={{ once: false, amount: 0.3 }}
                                                    transition={{ delay: 0.1 * i }}
                                                >
                                                    {li}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpArea;
