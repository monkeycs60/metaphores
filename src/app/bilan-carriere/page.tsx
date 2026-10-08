import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Bilan de carrière Bordeaux | Faire le point | Métaphore Coaching' },
	description:
		'Bilan de carrière à Bordeaux et à distance : parcours, compétences, motivations, priorités et pistes d’évolution professionnelle.',
	alternates: { canonical: '/bilan-carriere' },
};

export default function Page() {
	return <ServicePage service={services['bilan-carriere']} />;
}
