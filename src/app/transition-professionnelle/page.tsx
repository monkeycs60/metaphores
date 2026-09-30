import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: 'Transition professionnelle et reconversion à Bordeaux',
	description:
		'Coaching de transition professionnelle et de reconversion à Bordeaux et en visio : clarifier ce qui ne convient plus, explorer des pistes et passer à l’action.',
	alternates: { canonical: '/transition-professionnelle' },
};

export default function Page() {
	return <ServicePage service={services['transition-professionnelle']} />;
}
