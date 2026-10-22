import Link from 'next/link';
import type { Metadata } from 'next';
import { Bird, Compass, Footprints, MessageCircle, RefreshCw } from 'lucide-react';
import { OfferList, PageHero, Principles, Prose, Section, Steps } from '@/components/v2/ui';
import { ContactBand, HeroActions, WalkCoaching } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: { absolute: 'Coaching professionnel & personnel Bordeaux | Métaphore Coaching' },
	description:
		'Coaching professionnel et personnel à Bordeaux et à distance : faire le point, retrouver du sens, décider, évoluer et se remettre en mouvement.',
	alternates: { canonical: '/coaching' },
};

const OFFERS = [
	{
		title: 'Coaching professionnel',
		text: (
			<>
				<strong>Retrouver du sens et de la capacité d’action</strong> dans sa vie professionnelle : évolution,
				positionnement, relations, décisions, équilibre, prise de responsabilités ou transition.
			</>
		),
		href: '/coaching-professionnel',
	},
	{
		title: 'Coaching personnel',
		text: (
			<>
				<strong>Prendre du recul sur une situation</strong> personnelle, travailler la confiance, les choix, les
				changements, les priorités, les limites et la recherche de sens.
			</>
		),
		href: '/coaching-personnel',
	},
	{
		title: 'Bilan de carrière',
		text: (
			<>
				<strong>Faire le point</strong> sur son parcours, ses compétences, ses motivations et ses possibilités{' '}
				<strong>avant de décider</strong> de la suite.
			</>
		),
		href: '/bilan-carriere',
	},
	{
		title: 'Transition professionnelle',
		text: (
			<>
				Explorer et <strong>construire un changement</strong> de métier, de secteur, de fonction ou de manière de
				travailler, sans idéaliser ni précipiter la décision.
			</>
		),
		href: '/transition-professionnelle',
	},
];

const STEPS = [
	{ title: 'Comprendre', text: 'Regarder votre situation sous un autre angle.', icon: MessageCircle },
	{ title: 'Clarifier', text: 'Identifier vos ressources et ce qui compte pour vous.', icon: Compass },
	{ title: 'Expérimenter', text: 'Explorer des possibilités et questionner les freins.', icon: Footprints },
	{ title: 'Consolider', text: 'Revenir sur vos actions, réajuster, consolider.', icon: RefreshCw },
	{ title: 'S’envoler', text: 'Reprendre les rênes et votre autonomie.', icon: Bird },
];

const WHY = [
	{
		icon: '/empathy.svg',
		title: 'Écoute active et empathique',
		text: 'L’assurance d’un espace d’écoute où vous êtes entendu et vos expériences, valorisées.',
	},
	{
		icon: '/guidance.svg',
		title: 'Guidance discrète',
		text: 'Mon rôle est de vous guider avec subtilité, en vous aidant à révéler vos propres réponses et solutions.',
	},
	{
		icon: '/rythm.svg',
		title: 'Respect de votre rythme',
		text: 'Il est très important pour moi de progresser à votre propre cadence, en assurant un suivi adapté à vos besoins.',
	},
	{
		icon: '/strength.svg',
		title: 'Approche basée sur vos forces',
		text: 'En mettant en lumière vos compétences et qualités pour vous aider à bâtir sur ce que vous avez déjà.',
	},
];

export default function CoachingPage() {
	return (
		<>
			<PageHero
				title={
					<>
						<span className="title-line">Prendre du recul</span>
						<span className="title-line">Comprendre ce qui se joue</span>
						<span className="title-line">Choisir comment avancer</span>
					</>
				}
				subtitle="Coaching individuel · Bordeaux & à distance"
				image="/photos/christophe-seance-duo.webp"
				imageAlt="Christophe Jacques, carnet en main, en séance face à une cliente qui lui sourit"
				imagePosition="center 30%"
				actions={<HeroActions />}
			>
				<p>
					Il n’est pas nécessaire d’être en crise pour faire appel à un coach. Parfois, quelque chose ne convient
					simplement plus : une situation professionnelle qui interroge, une décision difficile, une envie de
					changement encore imprécise, un équilibre à retrouver ou simplement le besoin de faire le point.
				</p>
				<p>
					Le coaching offre un espace pour s’arrêter, questionner ce que l’on vit et retrouver sa capacité à
					choisir et à agir.
				</p>
			</PageHero>

			<Section title="Quel accompagnement recherchez-vous ?">
				<OfferList offers={OFFERS} />
			</Section>

			<Section
				tone="blue"
				title="Une même approche, quelle que soit votre situation"
				intro={
					<p>
						Je ne décide pas à votre place. Je ne vous explique pas ce que vous devriez devenir. Je vous aide à
						prendre suffisamment de recul pour mieux comprendre votre situation, identifier vos ressources,
						questionner certains freins et retrouver votre capacité à choisir.
					</p>
				}
			>
				<Steps steps={STEPS} />
			</Section>

			<Section title="Pourquoi choisir le coaching individuel ?">
				<Principles items={WHY} />
			</Section>

			<Section tone="cream">
				<WalkCoaching />
			</Section>

			<Section title="Modalités et questions fréquentes">
				<Prose>
					<p>
						Le coaching individuel se déroule habituellement en sessions de 60 minutes. Les séances se déroulent
						en visio ou en présentiel - en intérieur ou en extérieur -, selon votre préférence.
					</p>
					<p>
						Pour en savoir plus sur la structure de nos séances, les options de forfaits et les tarifs, veuillez
						visiter notre page <Link href="/tarifs">Tarifs</Link>. Nous proposons une variété de formules pour
						s’adapter à différents besoins et préférences.
					</p>
					<p>
						Si vous hésitez sur la formule qui vous conviendrait le mieux ou si vous souhaitez obtenir plus
						d’informations, n’hésitez pas à nous contacter. Notre page <Link href="/contact">Contact</Link> est
						le moyen le plus rapide pour nous joindre et pour que nous puissions répondre à toutes vos questions.
						Vous pouvez également programmer une première consultation pour discuter de vos attentes et voir
						comment le coaching individuel peut vous être bénéfique.
					</p>
				</Prose>
			</Section>

			<ContactBand />
		</>
	);
}
