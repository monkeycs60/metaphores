import type { Metadata } from 'next';
import { OfferList, PageHero, Section } from '@/components/v2/ui';
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
		tagline: 'Retrouver du sens et de la capacité d’action',
		text: 'Retrouver du sens et de la capacité d’action dans sa vie professionnelle : évolution, positionnement, relations, décisions, équilibre, prise de responsabilités ou transition.',
		href: '/coaching-professionnel',
		linkLabel: 'Découvrir le coaching professionnel',
	},
	{
		title: 'Coaching personnel',
		tagline: 'Prendre du recul sur une situation',
		text: 'Prendre du recul sur une situation personnelle, travailler la confiance, les choix, les changements, les priorités, les limites et la recherche de sens.',
		href: '/coaching-personnel',
		linkLabel: 'Découvrir le coaching personnel',
	},
	{
		title: 'Bilan de carrière',
		tagline: 'Faire le point avant de décider',
		text: 'Faire le point sur son parcours, ses compétences, ses motivations et ses possibilités avant de décider de la suite.',
		href: '/bilan-carriere',
		linkLabel: 'Découvrir le bilan de carrière',
	},
	{
		title: 'Transition professionnelle & reconversion',
		tagline: 'Construire un changement choisi',
		text: 'Explorer et construire un changement de métier, de secteur, de fonction ou de manière de travailler, sans idéaliser ni précipiter la décision.',
		href: '/transition-professionnelle',
		linkLabel: 'Découvrir la transition professionnelle',
	},
];

const MOVEMENT = ['Comprendre', 'Clarifier', 'Expérimenter', 'Agir'];

export default function CoachingPage() {
	return (
		<>
			<PageHero
				title='Prendre du recul. Comprendre ce qui se joue. Choisir comment avancer.'
				image='/alone.jpg'
				imageAlt='Une personne debout face à l’horizon, au lever du jour'
				caption={
					<>
						Trouver du <span className='bg-blackOne px-1.5 text-whiteOne'>sens</span> et en donner
					</>
				}
				actions={<HeroActions />}>
				<p>
					Il n’est pas nécessaire d’être en crise pour faire appel à un coach. Parfois, quelque chose ne convient simplement plus :
					une situation professionnelle qui interroge, une décision difficile, une envie de changement encore imprécise, un
					équilibre à retrouver ou simplement le besoin de faire le point.
				</p>
				<p>Le coaching offre un espace pour s’arrêter, questionner ce que l’on vit et retrouver sa capacité à choisir et à agir.</p>
			</PageHero>

			<Section title='Quel accompagnement recherchez-vous ?'>
				<OfferList offers={OFFERS} />
			</Section>

			<Section
				tone='blue'
				title='Une même approche, quelle que soit votre situation'
				intro={
					<p>
						Je ne décide pas à votre place. Je ne vous explique pas ce que vous devriez devenir. Je vous aide à prendre
						suffisamment de recul pour mieux comprendre votre situation, identifier vos ressources, questionner certains freins
						et retrouver votre capacité à choisir.
					</p>
				}>
				<ol aria-label='Les étapes de l’approche' className='flex flex-wrap items-center gap-x-4 gap-y-3 font-yeseva text-2xl text-blackOne lg:text-3xl'>
					{MOVEMENT.map((word, i) => (
						<li key={word} className='flex items-center gap-4'>
							<span className={i === MOVEMENT.length - 1 ? 'bg-primaryOne px-2' : ''}>{word}</span>
							{i < MOVEMENT.length - 1 && <span aria-hidden className='h-[2px] w-8 bg-blackOne/40 lg:w-14' />}
						</li>
					))}
				</ol>
			</Section>

			<ContactBand />
		</>
	);
}
