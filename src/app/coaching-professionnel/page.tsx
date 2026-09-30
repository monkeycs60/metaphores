import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: 'Coaching professionnel à Bordeaux',
	description:
		'Coaching professionnel à Bordeaux et en visio : retrouver du sens au travail, préparer une évolution, prendre une décision, améliorer ses relations professionnelles.',
	alternates: { canonical: '/coaching-professionnel' },
};

export default function Page() {
	return <ServicePage service={services['coaching-professionnel']} />;
}
