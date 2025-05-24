"use client"
import { useState } from 'react';
import Header from "@/layout/headers/header";
import Breadcrumb from "@/common/breadcrumb";
import Blog from "@/common/blog"
import Link from "next/link";

const caseStudies = [
   {
    title: "Azure Virtual Desktop Deployment for a Global Design Firm",
    client: "Denmark Based Industrial Engineering Firm",
    industry: "Industrial Engineering",
    service: "Azure Cloud Engineering",
    challenge: `A Denmark-based graphic design firm with a global team of 50 designers relied on an expensive Citrix VDI DaaS solution. Their monthly costs were high, and they needed a high-availability solution with graphics-enabled VMs to support their design software, along with a robust Business Continuity and Disaster Recovery (BCDR) plan to ensure uninterrupted operations.`,
    solution: `Avesto Global designed, implemented, and deployed a full-scale Azure Virtual Desktop (AVD) solution. Graphics-enabled VMs were configured to support their design software with high performance. FSLogix optimized user profiles, and a high-availability architecture with automated failover was established. A BCDR plan was implemented using Azure’s disaster recovery capabilities. Post-deployment support and maintenance ensured smooth operations.`,
    results: [
      "Reduced monthly VDI costs by 40%",
      "Achieved 99.9% uptime",
      "Improved rendering times for designers",
      "Reduced potential downtime by 80%"
    ]
  },
  {
    title: "Zero Trust Implementation for a Financial Services Firm",
    client: "Financial Services Firm (Name withheld)",
    industry: "Financial Services",
    service: "Cybersecurity Solutions, Information Protection Solutions",
    challenge: `A financial services firm managing sensitive client data needed to enhance their cloud security posture. Their existing Azure and Microsoft 365 environments lacked strict access controls, making them vulnerable to insider and external threats.`,
    solution: `Avesto Global implemented a Zero Trust security framework. An in-depth cloud assessment revealed VM, network, and storage vulnerabilities. Using Microsoft Purview, Azure Security Center, and Microsoft Defender, strict access controls were enforced. Microsoft Sentinel was configured for monitoring and threat detection. Documentation and training empowered their team to uphold a security-first culture.`,
    results: [
      "Reduced security vulnerabilities by 60%",
      "Achieved 100% compliance with NIST 800-171",
      "Identified and mitigated 15 incidents in the first month",
      "Reduced insider threat risk by 30%"
    ]
  },
  {
    title: "MDM and Security Hardening for a Healthcare Provider",
    client: "Healthcare Provider",
    industry: "Healthcare",
    service: "Mobile Device Management (MDM) with Intune & Defender, Cybersecurity Solutions",
    challenge: `A healthcare provider with a distributed workforce needed to secure and manage devices accessing patient data. They also needed to comply with HIPAA/HITECH regulations.`,
    solution: `Avesto Global deployed Microsoft Intune and Defender. Intune managed device enrollment and enforced policies. Defender protected against malware. HIPAA/HITECH controls were implemented across Microsoft 365 and Azure. Azure Virtual Desktop was optimized for cost-saving, and Microsoft Sentinel enabled continuous monitoring. Staff were trained on best practices.`,
    results: [
      "Secured 100+ devices with Intune",
      "Achieved 100% HIPAA/HITECH compliance",
      "Reduced security incidents by 50%",
      "Saved 20% on operational costs"
    ]
  }
];


const resources = {
  caseStudies: caseStudies.map(study => ({
    title: study.title,
    description: `${study.client} - ${study.results[0].toLowerCase()}`,
    link: `/case-studies/${study.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}`
  }))
};

const CaseStudies = () => {
  const [expandedStudies, setExpandedStudies] = useState([]);

  const toggleStudy = (index) => {
    setExpandedStudies(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
    return (
    <>
      <Header />
      <main className="main-area fix">
        <Breadcrumb title="Resources" sm_title="Resources" />
        
        {/* Blog Section */}
        <section className="blog-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section-title text-center mb-60">
                  <h2 className="title">Insights for Your Digital Transformation</h2>
                </div>
              </div>
            </div>
            <Blog />
          </div>
        </section>

        {/* Guides/Downloads Section */}
   {/*     <section className="services-area gray-bg pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section-title text-center mb-60">
                  <h2 className="title">Free Resources & Guides</h2>
                  <p>Download our expert guides (requires email signup)</p>
                </div>
              </div>
            </div>
            <div className="row">
              {resources.guides.map((guide, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="services-item mb-30">
                    <div className="services-content">
                      <h3 className="title">{guide.title}</h3>
                      <p>{guide.description}</p>
                      <Link 
                        href={`/download?resource=${guide.download}`}
                        className="btn btn-secondary"
                      >
                        Download Guide
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>   */}

        {/* Case Studies Section */}
 <section className="case-studies-area pt-20 pb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7 col-md-10">
                <div className="section-title text-center mb-60">
                  <h2 className="title">Success Stories</h2>
                  <p>See how we've helped businesses like yours</p>
                </div>
              </div>
            </div>
            {/* className="pricing-item wow fadeInUp" data-wow-delay=".2s"
            case-study-item mb-30 */}
            <div className="row">
              {caseStudies.map((study, index) => (
                <div key={index} className="col-lg-6 col-md-6">
                  <div className="pricing-item wow fadeInUp" data-wow-delay=".2s">
                    <div className="case-study-content">
                      <h3 className="title">{study.title}</h3>
                      <p><strong>Client:</strong> {study.client}</p>
                      
                      {expandedStudies.includes(index) && (
                        <div className="study-details mt-3">
                          <h4 className="services-content-title">Challenge</h4>
                          <p>{study.challenge}</p>

                          <h4 className="services-content-title">Solution</h4>
                          <p>{study.solution}</p>

                          <h4 className="services-content-title">Results</h4>
                          <ul className="about-list">
                            {study.results.map((result, i) => (
                              <li key={i}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button 
                        className="btn btn-primary mt-3"
                        onClick={() => toggleStudy(index)}
                        aria-expanded={expandedStudies.includes(index)}
                      >
                        {expandedStudies.includes(index) ? 'Show Less' : 'Read Case Study'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudies;