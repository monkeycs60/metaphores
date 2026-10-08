import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Transition professionnelle à Bordeaux | Coaching | Métaphore Coaching' },
	description:
		'Coaching de transition professionnelle à Bordeaux : perte de sens, évolution, reconversion, choix professionnels et passage de la réflexion à l’action.',
	alternates: { canonical: '/transition-professionnelle' },
};

export default function Page() {
	return <ServicePage service={services['transition-professionnelle']} />;
}
