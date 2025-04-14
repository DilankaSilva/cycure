// app/services/[slug]/page.jsx
import { services } from '@/data/services';
import ServicesDetails from '@/components/services-details';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    const service = services[slug];

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Avesto`,
        description: service.summary,
    };
}

export default function ServicePage({ params }) {
    const { slug } = params;
    const service = services[slug];

    if (!service) {
        notFound();
    }

    return <ServicesDetails slug={slug} service={service} />;
}