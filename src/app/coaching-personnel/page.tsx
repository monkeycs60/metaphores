import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Coaching personnel Bordeaux | Métaphore Coaching' },
	description:
		'Coaching personnel à Bordeaux et à distance : confiance, choix, changement, équilibre, limites et recherche de sens.',
	alternates: { canonical: '/coaching-personnel' },
};

export default function Page() {
	return <ServicePage service={services['coaching-personnel']} />;
}
