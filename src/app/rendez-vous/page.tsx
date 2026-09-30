import type { Metadata } from 'next';
import { ArrowUpRight, Clock3, HeartHandshake, Video } from 'lucide-react';
import CalBooking from '@/components/booking/CalBooking';
import { ButtonLink, PageHero } from '@/components/v2/ui';
import { CAL_LINK, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Prendre rendez-vous',
	description:
		'Réservez en ligne un premier échange gratuit de 30 minutes avec Christophe Jacques, coach professionnel à Bordeaux, par téléphone ou en visio.',
	alternates: { canonical: '/rendez-vous' },
};
export default function RendezVousPage() {
	return (
		<>
			<PageHero
				title='Prenons le temps d’échanger.'
				subtitle='Premier échange · Bordeaux & à distance'
				image='/v3/conversation.webp'
				imageAlt='Un carnet et une conversation pour faire connaissance'
				actions={
					<>
						<a
							href={`https://cal.com/${CAL_LINK}`}
							target='_blank'
							rel='noopener noreferrer'
							className='action action-primary'
						>
							Choisir un créneau
							<ArrowUpRight size={18} aria-hidden />
						</a>
						<ButtonLink href='/contact' variant='text'>
							Écrivez-moi
						</ButtonLink>
					</>
				}
			>
				<p>Un premier rendez-vous pour faire connaissance et voir comment je peux vous accompagner.</p>
				<div className='booking-facts'>
					<span>
						<Clock3 size={19} aria-hidden />
						30 minutes
					</span>
					<span>
						<HeartHandshake size={19} aria-hidden />
						Gratuit, sans engagement
					</span>
					<span>
						<Video size={19} aria-hidden />
						Téléphone ou visio
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
