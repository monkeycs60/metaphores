import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowDown, Clock, Euro, MapPin } from 'lucide-react';
import CalBooking from '@/components/booking/CalBooking';
import { ButtonLink, PageHero } from '@/components/v2/ui';
import { Scribble } from '@/components/v2/deco';
import { CAL_LINK, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Prendre rendez-vous',
	description:
		'Prenez rendez-vous avec Christophe Jacques, coach professionnel à Bordeaux : séances d’environ une heure, à l’Espace Beaulieu, en forêt ou à distance.',
	alternates: { canonical: '/rendez-vous' },
};

export default function RendezVousPage() {
	return (
		<>
			<PageHero
				title="Le premier pas, c’est d’en parler"
				subtitle="Rendez-vous · Bordeaux & à distance"
				media={
					<div className="portrait-stage portrait-stage-small">
						<Image
							src="/photos/christophe-carnet.webp"
							alt="Christophe Jacques, en chemise à carreaux, sourit un carnet à la main"
							width={560}
							height={767}
							priority
							quality={90}
							sizes="280px"
						/>
						<Scribble tone="ink" className="portrait-note">
							Faisons <mark>connaissance</mark>
						</Scribble>
					</div>
				}
				actions={
					<>
						<a href="#calendrier" className="action action-primary">
							Choisir un créneau
							<ArrowDown size={18} aria-hidden />
						</a>
						<ButtonLink href="/contact" variant="text">
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
				<div className="booking-facts">
					<span>
						<Clock size={19} aria-hidden />
						Une séance dure environ 1&nbsp;h. La première séance peut aller jusqu’à 1&nbsp;h&nbsp;30 pour mieux
						faire connaissance.
					</span>
					<span>
						<Euro size={19} aria-hidden />
						<Link href="/tarifs">Voir les tarifs</Link>
					</span>
					<span>
						<MapPin size={19} aria-hidden />
						Espace Beaulieu à Bordeaux, en forêt ou à distance
					</span>
				</div>
			</PageHero>
			<section className="booking-options" aria-label="Réserver un créneau">
				<CalBooking calLink={CAL_LINK} />
				<p className="booking-fallback-line">
					Aucun créneau ne vous convient ? Appelez-moi au <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> ou{' '}
					<Link href="/contact">écrivez-moi</Link>.
				</p>
			</section>
		</>
	);
}
