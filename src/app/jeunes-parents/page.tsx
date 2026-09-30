import type { Metadata } from 'next';
import { CheckList, PageHero, Prose, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Coaching jeunes & parents à Bordeaux',
	description:
		'Coaching pour adolescents, jeunes adultes et parents à Bordeaux : motivation, confiance, orientation scolaire, autonomie et relation parents-enfant.',
	alternates: { canonical: '/jeunes-parents' },
};

const SITUATIONS = [
	'Perte de motivation ou de sens',
	'Difficultés à se projeter',
	'Orientation scolaire ou professionnelle',
	'Manque de confiance',
	'Difficulté à faire des choix',
	'Besoin d’autonomie et d’organisation',
	'Difficultés d’intégration ou de relation',
	'Tensions ou incompréhensions avec les parents',
];

const PRIMARY = { label: 'Échanger sur la situation de votre enfant', href: '/contact?motif=jeunes-parents' };

export default function JeunesParentsPage() {
	return (
		<>
			<PageHero
				title='Aider un jeune à retrouver du sens, de la confiance et une direction'
				subtitle='Coaching jeunes & parents à Bordeaux'
				image='/v2/jeunes-parents.webp'
				imageAlt='Un adolescent et son parent marchant de dos sur un chemin de dune vers la mer'
				actions={<HeroActions primary={PRIMARY} />}>
				<p>
					Quand un enfant ou un adolescent se démotive, doute de lui ou ne sait plus pourquoi il travaille, les conseils
					supplémentaires ne suffisent pas toujours.
				</p>
				<p>
					Le coaching lui offre un espace neutre, différent de la famille et de l’école, pour parler librement, mieux comprendre
					ce qu’il vit et retrouver du sens et une capacité d’action.
				</p>
			</PageHero>

			<Section title='Pour quelles situations ?'>
				<CheckList items={SITUATIONS} />
			</Section>

			<Section tone='cream'>
				<div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
					<div className='flex flex-col gap-4'>
						<h2 className='font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.1rem]'>
							Un accompagnement qui ne décide pas à sa place
						</h2>
						<Prose>
							<p>
								L’objectif n’est pas de dire au jeune quelle filière choisir, comment travailler ou ce qu’il devrait devenir. Nous
								cherchons plutôt à comprendre ce qui compte pour lui, ce qui le freine, ce qui le met en mouvement et comment il
								peut reprendre progressivement la responsabilité de ses choix.
							</p>
						</Prose>
					</div>
					<div className='flex flex-col gap-4'>
						<h2 className='font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.1rem]'>Et les parents ?</h2>
						<Prose>
							<p>
								Les parents sont souvent directement concernés par les difficultés rencontrées par leur enfant. Selon la
								situation, des temps spécifiques peuvent permettre de clarifier la place de chacun, d’améliorer la communication
								et de soutenir l’autonomie du jeune sans se désengager de son rôle de parent.
							</p>
						</Prose>
					</div>
				</div>
			</Section>

			<Section
				title='Pourquoi mon parcours est utile'
				intro={
					<>
						<p>
							Pendant plus de dix ans dans l’enseignement de la technologie, j’ai appris à transmettre, animer des groupes,
							accompagner des jeunes, créer des contenus, m’adapter et écouter ce qui se joue derrière une difficulté apparente.
						</p>
						<p>
							Le coaching apporte un autre cadre : moins centré sur les résultats scolaires, davantage sur la personne, ses
							représentations, ses ressources et sa capacité à choisir.
						</p>
					</>
				}
			/>

			<ContactBand title='Parlons de la situation de votre enfant' primary={PRIMARY} />
			<RelatedLinks
				links={[
					{ label: 'Qui suis-je ?', href: '/qui-suis-je' },
					{ label: 'Coaching personnel', href: '/coaching-personnel' },
					{ label: 'Déontologie', href: '/deontologie' },
				]}
			/>
		</>
	);
}
