import Image from 'next/image';
import type { Metadata } from 'next';
import { MapPin, Video } from 'lucide-react';
import { ButtonLink, OfferList, Section, Steps } from '@/components/v2/ui';
import { ContactBand, FramePrinciples, Testimonies } from '@/components/v2/blocks';
import { Deco, Scribble } from '@/components/v2/deco';

export const metadata: Metadata = {
	title: { absolute: 'Coach professionnel à Bordeaux | Métaphore Coaching' },
	description:
		'Coaching professionnel et personnel à Bordeaux et à distance : bilan de carrière, transition, jeunes, enseignants, managers et équipes.',
	alternates: { canonical: '/' },
};

const OFFERS = [
	{
		title: 'Coaching professionnel',
		tagline:
			'Faire face au changement, à une évolution de poste ou de compétences, retrouver du sens, gérer une crise ou un contexte anxiogène.',
		text: '',
		href: '/coaching-professionnel',
	},
	{
		title: 'Coaching personnel',
		tagline:
			'Prendre du recul, retrouver du sens et un équilibre, faire face à un changement de vie ou à des conflits.',
		text: '',
		href: '/coaching-personnel',
	},
	{
		title: 'Bilan de carrière',
		tagline: 'Faire le point, envisager une évolution, préparer un nouveau poste, anticiper sa retraite.',
		text: '',
		href: '/bilan-carriere',
	},
	{
		title: 'Transition professionnelle',
		tagline: 'Prendre le temps de se réinventer, de se projeter et de passer à l’action.',
		text: '',
		href: '/transition-professionnelle',
	},
];
const SPECIFIC_OFFERS = [
	{
		title: 'Jeunes & Parents',
		tagline:
			'Un espace neutre pour aider le jeune à mieux se comprendre, retrouver du sens, avancer dans son orientation et, lorsque c’est utile, travailler la relation avec ses parents.',
		text: '',
		href: '/jeunes-parents',
	},
	{
		title: 'Enseignants',
		tagline:
			'Perte de sens, fatigue, envie d’évolution ou de changement : un accompagnement nourri par une connaissance directe des réalités de l’Éducation nationale.',
		text: '',
		href: '/coaching-enseignants',
	},
	{
		title: 'Entreprises',
		tagline:
			'Coaching de managers, équipes sous tension, ateliers de prévention RPS / QVCT et espaces de dialogue autour des situations de travail.',
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
							Redonner du sens.
							<br />
							Dessiner votre <span>chemin.</span>
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
							src="/photos/accueil-chemin.webp"
							alt="Une personne marche sur un chemin de terre ensoleillé, bordé d’arbres"
							width={1800}
							height={1200}
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
				<div className="why-metaphore">
					<div className="why-copy">
						<h2>Pourquoi «&nbsp;Métaphore&nbsp;»&nbsp;?</h2>
						<p>
							Une métaphore permet parfois de regarder une situation connue sous un angle complètement
							différent. C’est cette idée qui est à l’origine de Métaphore Coaching.
						</p>
						<p>
							Nous partons de votre réalité : votre histoire, vos contraintes, vos ressources, vos envies et
							votre manière de voir le monde. Le coaching n’a pas vocation à vous transformer en quelqu’un
							d’autre ; il doit vous permettre d’avancer en restant cohérent avec qui vous êtes.
						</p>
						<Scribble tone="sky">
							Celui qui sait demander est <mark>libre</mark>
						</Scribble>
					</div>
					<aside className="coach-card">
						<div className="coach-card-photo">
							<Image
								src="/photos/christophe-veste-jaune-sourire.webp"
								alt="Christophe Jacques, veste jaune, sourit en plein air"
								width={1066}
								height={1600}
								quality={88}
								sizes="160px"
							/>
						</div>
						<div className="coach-card-copy">
							<p className="coach-card-name">Christophe Jacques</p>
							<p className="hero-context">Coach professionnel à Bordeaux</p>
							<p>
								Mon rôle est de vous aider à voir autrement votre situation et à trouver vos propres
								réponses.
							</p>
							<p>
								Plus de dix ans dans l’enseignement et plusieurs reconversions nourrissent ma manière
								d’accompagner : avec écoute, bienveillance et sans direction imposée.
							</p>
							<ButtonLink href="/qui-suis-je" variant="text">
								Découvrir mon parcours
							</ButtonLink>
						</div>
					</aside>
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
			<ContactBand
				title="Si vous avez des questions, n’hésitez pas !"
				text="Prenons le temps d’échanger, lors d’un entretien téléphonique, afin de faire connaissance et de mieux comprendre mon approche."
			/>
		</>
	);
}
