import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: 'Coaching personnel à Bordeaux',
	description:
		'Coaching personnel à Bordeaux et en visio : confiance en soi, choix, périodes de changement, priorités, limites et recherche de sens, dans un cadre confidentiel.',
	alternates: { canonical: '/coaching-personnel' },
};

export default function Page() {
	return <ServicePage service={services['coaching-personnel']} />;
}
