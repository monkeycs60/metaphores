import type { Metadata } from 'next';
import ServicePage from '@/components/v2/ServicePage';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Coaching enseignant & reconversion | Bordeaux | Métaphore Coaching' },
	description:
		'Enseignant en perte de sens ou en réflexion professionnelle ? Coaching à Bordeaux et à distance pour évoluer, faire un bilan ou préparer une transition.',
	alternates: { canonical: '/coaching-enseignants' },
};

export default function Page() {
	return <ServicePage service={services['coaching-enseignants']} />;
}
