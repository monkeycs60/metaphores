import type { Metadata } from 'next';
import { OfferList, PageHero, Section, Steps } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Coaching à Bordeaux : professionnel, personnel, bilan de carrière',
	description:
		'Coaching professionnel, coaching personnel, bilan de carrière et transition professionnelle à Bordeaux et en visio. Prendre du recul et choisir comment avancer.',
	alternates: { canonical: '/coaching' },
};
const OFFERS = [
	{
		title: 'Coaching professionnel',
		tagline: 'Retrouver du sens et de la capacité d’action au travail.',
		text: '',
		href: '/coaching-professionnel',
	},
	{
		title: 'Coaching personnel',
		tagline: 'Prendre du recul sur une situation de vie.',
		text: '',
		href: '/coaching-personnel',
	},
	{
		title: 'Bilan de carrière',
		tagline: 'Faire le point avant de décider de la suite.',
		text: '',
		href: '/bilan-carriere',
	},
	{
		title: 'Transition professionnelle',
		tagline: 'Explorer et construire un changement choisi.',
		text: '',
		href: '/transition-professionnelle',
	},
];
const STEPS = [
	{ title: 'Comprendre', text: 'Regarder votre situation sous un autre angle.' },
	{ title: 'Clarifier', text: 'Identifier vos ressources et ce qui compte pour vous.' },
	{ title: 'Expérimenter', text: 'Explorer des possibilités et questionner les freins.' },
	{ title: 'Agir', text: 'Construire vos prochaines étapes.' },
];
export default function CoachingPage() {
	return (
		<>
			<PageHero
				title="Prendre du recul. Choisir comment avancer."
				subtitle="Les accompagnements · Bordeaux & à distance"
				image="/v3/conversation.webp"
				imageAlt="Un temps d’échange autour d’un carnet dans un espace calme"
				actions={<HeroActions />}
			>
				<p>
					Une décision difficile, une envie de changement ou simplement le besoin de faire le point. Vous
					pouvez venir avec une question encore imprécise.
				</p>
			</PageHero>
			<Section title="Quel chemin souhaitez-vous explorer ?">
				<OfferList offers={OFFERS} />
			</Section>
			<Section
				tone="blue"
				title="Vos réponses, votre mouvement."
				intro={
					<p>Je vous accompagne pour retrouver votre capacité à choisir. La direction reste la vôtre.</p>
				}
			>
				<Steps steps={STEPS} />
			</Section>
			<ContactBand />
		</>
	);
}
