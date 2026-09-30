import type { Metadata } from 'next';
import { Clock3, HeartHandshake, Video } from 'lucide-react';
import CalBooking from '@/components/booking/CalBooking';
import { CAL_LINK, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Prendre rendez-vous',
	description:
		'Réservez en ligne un premier échange gratuit de 30 minutes avec Christophe Jacques, coach professionnel à Bordeaux, par téléphone ou en visio.',
	alternates: { canonical: '/rendez-vous' },
};
export default function RendezVousPage() {
	return (
		<div className="booking-layout">
			<div className="booking-heading">
				<div>
					<h1 className="booking-title">Prenons le temps d’échanger.</h1>
					<p>Un premier rendez-vous pour faire connaissance et voir comment je peux vous accompagner.</p>
				</div>
				<p className="booking-fallback">
					Aucun créneau ne vous convient ?<br />
					<a href={CONTACT.phoneHref}>{CONTACT.phone}</a> ou <a href="/contact">écrivez-moi</a>.
				</p>
			</div>
			<div className="booking-facts">
				<span>
					<Clock3 size={20} aria-hidden />
					30 minutes
				</span>
				<span>
					<HeartHandshake size={20} aria-hidden />
					Gratuit, sans engagement
				</span>
				<span>
					<Video size={20} aria-hidden />
					Téléphone ou visio
				</span>
			</div>
			<CalBooking calLink={CAL_LINK} />
			<p className="booking-external">
				Le calendrier ne s’affiche pas ?{' '}
				<a
					href={`https://cal.com/${CAL_LINK}`}
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-4"
				>
					Ouvrir la réservation sur Cal.com
				</a>
			</p>
		</div>
	);
}
