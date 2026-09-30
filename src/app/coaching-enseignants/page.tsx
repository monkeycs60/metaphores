import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: 'Coaching pour enseignants à Bordeaux',
	description:
		'Coaching pour enseignants et personnels de l’Éducation nationale à Bordeaux et en visio : perte de sens, fatigue, évolution, bilan de carrière ou reconversion.',
	alternates: { canonical: '/coaching-enseignants' },
};

export default function Page() {
	return <ServicePage service={services['coaching-enseignants']} />;
}
