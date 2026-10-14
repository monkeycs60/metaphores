import type { Metadata } from 'next';
import { ArrowUpRight, Clock, Euro, MapPin } from 'lucide-react';
import CalBooking from '@/components/booking/CalBooking';
import { ButtonLink, PageHero } from '@/components/v2/ui';
import { CAL_LINK, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Prendre rendez-vous',
	description:
		'Prenez rendez-vous avec Christophe Jacques, coach professionnel à Bordeaux : séance individuelle à 65 €, à Bordeaux ou à distance.',
	alternates: { canonical: '/rendez-vous' },
};
export default function RendezVousPage() {
	return (
		<>
			<PageHero
				title='Le premier pas, c’est d’en parler.'
				subtitle='Rendez-vous · Bordeaux & à distance'
				image='/photos/coaching-echange.webp'
				imageAlt='Deux hommes échangent autour d’une table, dans une lumière chaude'
				imagePosition='35% center'
				actions={
					<>
						<a
							href={`https://cal.com/${CAL_LINK}`}
							target='_blank'
							rel='noopener noreferrer'
							className='action action-primary'
						>
							Prendre rendez-vous
							<ArrowUpRight size={18} aria-hidden />
						</a>
						<ButtonLink href='/contact' variant='text'>
							Écrivez-moi
						</ButtonLink>
					</>
				}
			>
				<p>
					Une question, une décision à prendre ou une envie de changement ? Vous n’avez pas besoin d’avoir déjà
					tout clarifié pour me contacter.
				</p>
				<p>
					<strong>Faisons connaissance.</strong> Échangeons sur votre situation et voyons ensemble comment je peux
					vous accompagner.
				</p>
				<div className='booking-facts'>
					<span>
						<Clock size={19} aria-hidden />
						Premier échange gratuit · 30 min
					</span>
					<span>
						<Euro size={19} aria-hidden />
						Séance individuelle : 65 €
					</span>
					<span>
						<MapPin size={19} aria-hidden />À Bordeaux ou à distance
					</span>
				</div>
			</PageHero>
			<section className='booking-options' aria-label='Autres possibilités de réservation'>
				<p>
					Aucun créneau ne vous convient ? Appelez le <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
				</p>
				<CalBooking calLink={CAL_LINK} />
			</section>
		</>
	);
}
