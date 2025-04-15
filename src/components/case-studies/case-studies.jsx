import Header from "@/layout/headers/header";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/common/breadcrumb";

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

const CaseStudies = () => {
  return (
    <>
    <Header />
    <main className="main-area fix">
    <Breadcrumb title="Case Studies" sm_title="Case Studies" />
    <section className="services-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="services-details-wrap">
              {caseStudies.map((study, index) => (
                <div key={index} className="services-details-content mb-5">
                  <h2 className="title">{study.title}</h2>
                  <p><strong>Client:</strong> {study.client}</p>
                  <p><strong>Industry:</strong> {study.industry}</p>
                  <p><strong>Service Highlighted:</strong> {study.service}</p>

                  <h4 className="services-content-title mt-4">Challenge</h4>
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
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </main>
    </>
  );
};

export default CaseStudies;