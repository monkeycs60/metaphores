import type { Metadata } from 'next';
import { CheckList, PageHero, Prose, Quotes, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Transition professionnelle et reconversion à Bordeaux',
	description:
		'Coaching de transition professionnelle et de reconversion à Bordeaux et en visio : clarifier ce qui ne convient plus, explorer des pistes et passer à l’action.',
	alternates: { canonical: '/transition-professionnelle' },
};

const QUESTIONS = [
	'Je ne me reconnais plus dans mon travail.',
	'J’ai envie de changer mais je ne sais pas vers quoi.',
	'J’hésite entre plusieurs possibilités.',
	'Je veux évoluer sans repartir de zéro.',
	'J’ai un projet mais je n’arrive pas à passer à l’action.',
	'Je souhaite retrouver un meilleur équilibre entre travail et vie personnelle.',
];

const TOPICS = [
	'Clarifier ce qui ne convient plus et ce que vous recherchez',
	'Identifier vos besoins, valeurs, compétences et ressources',
	'Explorer des possibilités sans les idéaliser',
	'Travailler les freins, peurs et représentations',
	'Arbitrer et prendre des décisions',
	'Construire des étapes réalistes',
	'Passer progressivement de la réflexion à l’action',
];

const PRIMARY = { label: 'Échanger sur votre situation', href: '/contact?motif=transition-professionnelle' };

export default function TransitionPage() {
	return (
		<>
			<PageHero
				title='Transition professionnelle : quand continuer comme avant ne semble plus être la bonne solution'
				subtitle='Coaching de reconversion à Bordeaux et à distance'
				image='/v2/transition-professionnelle.webp'
				imageAlt='Une passerelle en bois qui traverse un marais brumeux vers une rive ensoleillée'
				actions={<HeroActions primary={PRIMARY} />}>
				<p>
					Vous n’avez pas nécessairement envie de tout quitter. Mais quelque chose ne vous convient plus : perte de sens,
					lassitude, envie d’évoluer, besoin d’un autre équilibre ou difficulté à imaginer la suite.
				</p>
				<p>
					Le coaching permet de sortir du face-à-face avec ses propres questions pour retrouver de la clarté et construire une
					direction choisie.
				</p>
			</PageHero>

			<Section tone='cream' title='Vous pouvez venir avec une question encore floue'>
				<Quotes items={QUESTIONS} />
			</Section>

			<Section title='Ce que nous pouvons travailler'>
				<CheckList items={TOPICS} />
			</Section>

			<Section tone='blue'>
				<div className='flex flex-col gap-4'>
					<h2 className='font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.25rem]'>
						Changer ne veut pas forcément dire tout recommencer
					</h2>
					<Prose>
						<p>
							Une transition professionnelle peut conduire à une reconversion, mais aussi à une évolution de poste, un changement
							d’environnement, une nouvelle manière d’exercer son métier ou un rééquilibrage de ses priorités.
						</p>
						<p>
							L’objectif n’est pas de provoquer le changement pour le changement. Il est de retrouver une situation
							professionnelle plus cohérente avec ce que vous souhaitez aujourd’hui.
						</p>
					</Prose>
				</div>
			</Section>

			<ContactBand title='Parlons de votre projet' primary={PRIMARY} />
			<RelatedLinks
				links={[
					{ label: 'Bilan de carrière', href: '/bilan-carriere' },
					{ label: 'Enseignants', href: '/coaching-enseignants' },
					{ label: 'Coaching professionnel', href: '/coaching-professionnel' },
				]}
			/>
		</>
	);
}
