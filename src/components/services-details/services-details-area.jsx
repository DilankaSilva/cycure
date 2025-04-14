import Image from "next/image";
import Link from "next/link";
import { services } from '@/data/services';

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
        )
    }

    return (
        <section className="services-details-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
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
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="services-sidebar">
                            <div className="widget services-widget">
                                <ul className="sidebar-services-lists list-wrap">
                                    {service.sidebar_lists.map((item, i) => (
                                        <li key={i}>
                                            <Link href={`/services/${slug}`}>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesDetailsArea;