import Image from 'next/image';
import type { Metadata } from 'next';
import { MapPin, Video } from 'lucide-react';
import { ButtonLink, OfferList, Section, Steps } from '@/components/v2/ui';
import { ContactBand, FramePrinciples, Testimonies } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: { absolute: 'Coach professionnel à Bordeaux et à distance | Métaphore Coaching' },
	description:
		'Coaching professionnel, coaching personnel et bilan de carrière à Bordeaux et en visio. Accompagnements dédiés aux jeunes & parents, enseignants et entreprises.',
	alternates: { canonical: '/' },
};

const OFFERS = [
	{
		title: 'Coaching professionnel',
		tagline: 'Retrouver du sens dans votre travail.',
		text: '',
		href: '/coaching-professionnel',
	},
	{
		title: 'Coaching personnel',
		tagline: 'Prendre du recul. Retrouver votre équilibre.',
		text: '',
		href: '/coaching-personnel',
	},
	{
		title: 'Bilan de carrière',
		tagline: 'Faire le point avant de décider de la suite.',
		text: '',
		href: '/bilan-carriere',
	},
];
const SPECIFIC_OFFERS = [
	{
		title: 'Jeunes & Parents',
		tagline: 'Confiance, motivation et orientation.',
		text: '',
		href: '/jeunes-parents',
	},
	{
		title: 'Enseignants',
		tagline: 'Une place professionnelle qui vous ressemble.',
		text: '',
		href: '/coaching-enseignants',
	},
	{
		title: 'Entreprises',
		tagline: 'Du dialogue et de la coopération au travail.',
		text: '',
		href: '/entreprises-rps-qvct',
	},
];
const STEPS = [
	{ title: 'Se rencontrer', text: 'Faire connaissance et parler de votre situation.' },
	{ title: 'Clarifier', text: 'Définir ce que vous souhaitez faire évoluer.' },
	{ title: 'Avancer', text: 'Explorer, expérimenter et trouver vos solutions.' },
	{ title: 'Prendre son envol', text: 'Repartir avec des repères et de l’autonomie.' },
];

export default function Home() {
	return (
		<>
			<header className="home-hero">
				<Image
					src="/v3/horizon.webp"
					alt="Un chemin de sable dans les dunes s’ouvre vers l’océan"
					fill
					priority
					sizes="100vw"
					className="home-hero-photo"
				/>
				<div className="home-hero-veil" aria-hidden />
				<div className="home-hero-content">
					<p className="hero-context">Coaching professionnel & personnel</p>
					<h1>
						Retrouver du sens.
						<br />
						Trouver sa <span>direction.</span>
					</h1>
					<p className="home-hero-description">
						Prendre du recul, retrouver de la clarté et construire votre propre chemin.
					</p>
					<div className="hero-actions">
						<ButtonLink href="/rendez-vous">Prenons le temps d’échanger</ButtonLink>
						<ButtonLink href="#accompagnements" variant="text">
							Découvrir les accompagnements
						</ButtonLink>
					</div>
					<p className="hero-practical">
						<span>
							<MapPin size={16} aria-hidden />
							Bordeaux
						</span>
						<span>
							<Video size={17} aria-hidden />À distance
						</span>
						<span>Premier échange gratuit · 30 min</span>
					</p>
				</div>
				<div className="hero-bottom" aria-hidden>
					<span>À chacun son chemin.</span>
					<span>Métaphore Coaching</span>
				</div>
			</header>

			<Section
				id="accompagnements"
				title="Un espace pour faire le point."
				intro={
					<p>
						Un choix à faire, un équilibre à retrouver, une envie de changement. Nous partons de là où vous en
						êtes.
					</p>
				}
			>
				<OfferList offers={OFFERS} />
				<div className="section-tail">
					<p>Envie de faire évoluer votre vie professionnelle ?</p>
					<ButtonLink href="/transition-professionnelle" variant="text">
						Explorer une transition
					</ButtonLink>
				</div>
			</Section>

			<Section
				tone="blue"
				title="Votre situation est singulière."
				intro={<p>Certains parcours méritent une attention particulière.</p>}
			>
				<OfferList offers={SPECIFIC_OFFERS} variant="split" />
			</Section>

			<Section>
				<div className="coach-story">
					<div className="coach-photo">
						<Image
							src="/chris-profile-light.webp"
							alt="Christophe Jacques, souriant, un carnet à la main"
							width={365}
							height={500}
							sizes="(min-width: 900px) 35vw, 80vw"
						/>
						<span>Christophe Jacques</span>
					</div>
					<div className="coach-copy">
						<p className="hero-context">Votre coach à Bordeaux</p>
						<h2>Les bonnes questions ouvrent de nouveaux chemins.</h2>
						<p>
							Je ne suis pas là pour décider à votre place. Mon rôle est de vous aider à voir autrement votre
							situation et à trouver vos propres réponses.
						</p>
						<p>
							Plus de dix ans dans l’enseignement et plusieurs reconversions nourrissent ma manière
							d’accompagner : avec écoute, sans direction imposée.
						</p>
						<ButtonLink href="/qui-suis-je" variant="text">
							Découvrir mon parcours
						</ButtonLink>
					</div>
				</div>
			</Section>

			<Section
				tone="cream"
				title="À votre rythme, avec un cap."
				intro={<p>Un accompagnement pour avancer, puis retrouver votre autonomie.</p>}
			>
				<Steps steps={STEPS} />
				<div className="frame-strip">
					<FramePrinciples />
					<ButtonLink href="/deontologie" variant="text">
						Le cadre de confiance
					</ButtonLink>
				</div>
			</Section>

			<Section title="Ils ont trouvé leurs propres réponses.">
				<Testimonies />
			</Section>
			<ContactBand />
		</>
	);
}
