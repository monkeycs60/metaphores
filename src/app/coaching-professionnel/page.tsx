import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Coaching professionnel Bordeaux | Métaphore Coaching' },
	description:
		'Coach professionnel à Bordeaux et à distance : sens au travail, évolution, positionnement, prise de décision, équilibre et transition.',
	alternates: { canonical: '/coaching-professionnel' },
};

export default function Page() {
	return <ServicePage service={services['coaching-professionnel']} />;
}
