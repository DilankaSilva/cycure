'use client';

import Link from 'next/link';

const service_data = [
  {
    id: 1,
    title: 'Microsoft 365 Solutions',
    description: 'Boost team collaboration with Microsoft 365 tools.',
    link: '/services/microsoft-365-solutions',
    icon: 'fas fa-cloud'
  },
  {
    id: 2,
    title: 'Azure Cloud Engineering',
    description: 'Scale your business using secure Azure cloud services.',
    link: '/services/azure-cloud-engineering',
    icon: 'fas fa-server'
  },
  {
    id: 3,
    title: 'Cybersecurity Solutions',
    description: 'Protect your data with advanced cybersecurity solutions.',
    link: '/services/cybersecurity-solutions',
    icon: 'fas fa-shield-alt'
  },
  {
    id: 4,
    title: 'CSP and Additional Solutions',
    description: 'Simplify licensing and empower teams with tailored training. We offer CSP License Management, Training and Adoption.',
    link: '/services/csp-additional-solutions',
    icon: 'fas fa-lock'
  },
  {
    id: 5,
    title: 'Business Continuity and Disaster Recovery (BCDR)',
    description: 'Ensure resilience with robust backup and recovery strategies & offer BCDR Planning',
    link: '/services/bcdr-services',
    icon: 'fas fa-cogs'
  }
];

const Services = ({ style = false, inner_pricing = false }) => {
  return (
    <section className={`pricing-area ${style ? "pricing-padding-two" : ""} ${inner_pricing ? "inner-pricing-padding" : ""}`}>
      <div className="container">
        <div className={`${inner_pricing ? "d-none" : "row justify-content-center"}`}>
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section-title text-center mb-60">
              <h2 className="title">Explore your Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {service_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
              <div className="pricing-item wow fadeInUp" data-wow-delay=".2s">
                <div className="pricing-head text-center">
                  <div className="icon-wrapper mb-3">
                    <i className={`${item.icon} fa-2x`}></i>
                  </div>
                  <h2 className="price">{item.title}</h2>
                  <p>{item.description}</p>
                  <Link href={item.link} className="btn">
                    <span className="text">Learn More</span>
                    <span className="shape"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;