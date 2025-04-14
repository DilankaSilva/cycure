// components/services-details/index.jsx
import Breadcrumb from '@/common/breadcrumb'
import ServicesDetailsContent from './services-details-area'
import Header from '@/layout/headers/header'

const ServicesDetails = ({ slug, service }) => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb spyware={service?.title || 'Service'} sm_title="Services" />
                <ServicesDetailsContent service={service} slug={slug} />
            </main>
        </>
    )
}

export default ServicesDetails