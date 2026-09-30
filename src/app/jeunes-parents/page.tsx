import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: 'Coaching jeunes & parents à Bordeaux',
	description:
		'Coaching pour adolescents, jeunes adultes et parents à Bordeaux : motivation, confiance, orientation scolaire, autonomie et relation parents-enfant.',
	alternates: { canonical: '/jeunes-parents' },
};

export default function Page() {
	return <ServicePage service={services['jeunes-parents']} />;
}
