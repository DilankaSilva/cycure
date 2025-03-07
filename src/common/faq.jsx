"use client"
import answer_question_data from "@/data/faq";
import Link from "next/link";
import { useEffect, useState } from "react"

const FAQ = ({ style_3, inner_faq }) => {
    const [faqData, setFaqData] = useState([])

    useEffect(() => {
        const initialFaqData = answer_question_data.map((faq, index) => ({
            ...faq,
            showAnswer: index === 0,
        }));
        setFaqData(initialFaqData);
    }, []);

    const toggleAnswer = (index) => {
        setFaqData((prevFaqData) => {
            const updatedFaqData = prevFaqData.map((faq, i) => ({
                ...faq,
                showAnswer: i === index ? !faq.showAnswer : false,
            }));
            return updatedFaqData;
        });
    };

    return (
        <section className={`faq-area faq-padding ${style_3 ? "faq-two-padding" : "" || inner_faq ? "inner-faq-padding" : ""}`}>
            <div className="container">
                <div className={`row justify-content-center ${inner_faq ? "" : "justify-content-xl-between"}`}>
                    <div className={`${inner_faq ? "d-none" : "col-xl-4 col-lg-8"}`}>
                        <div className="section-title text-center text-xl-start mb-40">
                            <h2 className="title">Here Are the Most Common Questions From Clients</h2>
                        </div>
                        <div className="faq-btn text-center text-xl-start">
                            <Link href="/contact" className="btn">
                                <span className="text">Ask question</span>
                                <span className="shape"></span>
                            </Link>
                        </div>
                    </div>
                    <div className={`${inner_faq ? "col-xxl-8 col-xl-9 col-lg-11" : "col-xl-7 col-lg-10"}`}>
                        <div className="accordion" id="accordionExample">
                            {faqData.map((faq, index) => (
                                <div key={faq.id} className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className={`accordion-button ${faq.showAnswer ? "active" : ""}`} onClick={() => toggleAnswer(index)}>
                                            {index + 1 > 9 ? index + 1 : `0${index + 1 + "." + " " + faq.question}`}
                                            <span className="line"></span>
                                        </button>
                                    </h2>
                                    {faq.showAnswer && (
                                        <div className="accordion-body">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;