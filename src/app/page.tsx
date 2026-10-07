import Image from 'next/image';
import type { Metadata } from 'next';
import { MapPin, Video } from 'lucide-react';
import { ButtonLink, OfferList, Section, Steps } from '@/components/v2/ui';
import { ContactBand, FramePrinciples, Testimonies } from '@/components/v2/blocks';
import { Deco, Scribble } from '@/components/v2/deco';

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
				<Deco shape="sky" size={88} className="deco-float" style={{ top: 48, left: '3%' }} />
				<Deco shape="ring" size={220} style={{ top: '46%', left: -150 }} />
				<div className="home-hero-inner">
					<div className="home-hero-content">
						<Scribble>
							<mark>Développer</mark> votre potentiel
						</Scribble>
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
					<figure className="home-hero-media">
						<Deco shape="sun" size={250} className="hero-media-deco" />
						<Image
							src="/v3/horizon.webp"
							alt="Un chemin de sable dans les dunes s’ouvre vers l’océan"
							width={1536}
							height={1024}
							priority
							sizes="(min-width: 900px) 52vw, 100vw"
							className="home-hero-photo polyptych"
						/>
						<Scribble tone="sky" className="hero-scribble">
							<mark>Accompagner</mark> votre cheminement
						</Scribble>
					</figure>
				</div>
			</header>

			<Section
				id="accompagnements"
				title="Un espace pour faire le point."
				note={
					<Scribble>
						Changer les <mark>possibles</mark>
					</Scribble>
				}
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
				note={
					<Scribble tone="ink">
						Qui mieux que <mark>vous</mark> connaît vos solutions ?
					</Scribble>
				}
				deco={<Deco shape="ring-gold" size={240} style={{ top: -60, right: -110 }} />}
				intro={<p>Certains parcours méritent une attention particulière.</p>}
			>
				<OfferList offers={SPECIFIC_OFFERS} variant="split" />
			</Section>

			<Section
				deco={<Deco shape="orbit" size={160} style={{ top: '18%', right: -60 }} />}
			>
				<div className="coach-story">
					<div className="coach-photo">
						<Deco shape="dots" size={110} className="portrait-deco" />
						<Image
							src="/chris-profile-light.webp"
							alt="Christophe Jacques, souriant, un carnet à la main"
							width={365}
							height={500}
							sizes="(min-width: 900px) 35vw, 80vw"
						/>
						<Scribble tone="ink" className="coach-scribble">
							Celui qui sait demander est <mark>libre</mark>
						</Scribble>
					</div>
					<div className="coach-copy">
						<p className="hero-context">Christophe Jacques · Votre coach à Bordeaux</p>
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
				deco={<Deco shape="dots" size={120} style={{ bottom: 60, left: -36 }} />}
				intro={<p>Un accompagnement pour avancer, puis retrouver votre autonomie.</p>}
			>
				<Steps steps={STEPS} />
				<div className="frame-panel">
					<div className="frame-panel-intro">
						<Scribble tone="sky">
							Le cadre de <mark>confiance</mark>
						</Scribble>
						<p>Quatre engagements tenus du premier échange à la dernière séance.</p>
						<ButtonLink href="/deontologie" variant="text">
							Lire la déontologie
						</ButtonLink>
					</div>
					<FramePrinciples />
				</div>
			</Section>

			<Section
				title="Ils ont trouvé leurs propres réponses."
				note={
					<Scribble tone="sky">
						Trouver du <mark>sens</mark> et en donner
					</Scribble>
				}
				deco={<Deco shape="sun" size={150} style={{ top: 90, right: -75 }} />}
			>
				<Testimonies />
			</Section>
			<ContactBand />
		</>
	);
}
