import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: 'Bilan de carrière à Bordeaux',
	description:
		'Bilan de carrière à Bordeaux et en visio : relire son parcours, identifier compétences et motivations, et construire des pistes d’évolution concrètes.',
	alternates: { canonical: '/bilan-carriere' },
};

export default function Page() {
	return <ServicePage service={services['bilan-carriere']} />;
}
