"use client"
import testi_data from '@/data/testi-data'
import Image from 'next/image'
import Slider from 'react-slick'

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
}
const Testimonial = ({ style }) => {
    return (
        <section className={`${style ? "testimonial-area " : "testimonial-two-area"}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="testimonial-active">
                            <Slider {...settings}>
                                {testi_data.map((item) => (
                                    <div key={item.id} className="testimonial-item text-center">
                                        <div className="testi-quote">
                                            <Image src={item.quite} width={80} height={56} alt="icon" />
                                        </div>
                                        <p>{item.des}</p>
                                        <div className="testimonial-avatar">
                                            <div className="testi-avatar-img">
                                                <Image src={item.avatar} width={80} height={80} alt="img" />
                                            </div>
                                            <div className="testi-avatar-info">
                                                <h5 className="name">{item.name}</h5>
                                                <div className="testi-rating">
                                                    {item.rating.map((icon, index) => (
                                                        <i key={index} className={icon}></i>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
