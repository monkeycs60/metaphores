import type { Metadata } from 'next';
import { PageHero, Prose, Quotes, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Coaching pour enseignants à Bordeaux',
	description:
		'Coaching pour enseignants et personnels de l’Éducation nationale à Bordeaux et en visio : perte de sens, fatigue, évolution, bilan de carrière ou reconversion.',
	alternates: { canonical: '/coaching-enseignants' },
};

const QUESTIONS = [
	'Comment retrouver du sens dans mon métier ?',
	'Est-ce le métier que je veux quitter ou la manière dont je l’exerce ?',
	'Quelles compétences ai-je réellement développées ?',
	'Que puis-je faire en dehors de l’enseignement ?',
	'Comment préparer une transition sans me mettre en difficulté ?',
	'Comment retrouver un équilibre plus satisfaisant ?',
];

const PRIMARY = { label: 'Échanger sur votre situation', href: '/contact?motif=enseignant' };

export default function EnseignantsPage() {
	return (
		<>
			<PageHero
				title='Enseigner… et se demander si l’on veut encore continuer de la même manière'
				subtitle='Coaching pour enseignants à Bordeaux et à distance'
				image='/v2/enseignants.webp'
				imageAlt='Une salle de classe vide en fin de journée, baignée de lumière dorée'
				actions={<HeroActions primary={PRIMARY} />}>
				<p>
					On peut aimer transmettre et ne plus se reconnaître dans ses conditions de travail. On peut être compétent et pourtant
					ressentir de la fatigue, de la frustration ou une perte de sens.
				</p>
				<p>
					Ces questionnements ne signifient pas nécessairement qu’il faut quitter l’Éducation nationale. Ils indiquent parfois
					qu’il est temps de prendre du recul sur sa place professionnelle.
				</p>
			</PageHero>

			<Section tone='cream' title='Des questions que je connais de l’intérieur'>
				<Quotes items={QUESTIONS} />
			</Section>

			<Section
				title='Plus de dix ans d’expérience dans l’enseignement'
				intro={
					<>
						<p>
							Mon parcours d’enseignant en technologie me permet de connaître les réalités du métier, ses contraintes, ses
							satisfactions et les compétences qu’il développe : animation, pédagogie, gestion de groupe, création de contenus,
							adaptation, accompagnement et organisation.
						</p>
						<p>
							Avant l’enseignement, j’ai également connu plusieurs reconversions professionnelles réussies, notamment dans
							l’immobilier et l’aéronautique. Cette expérience personnelle du changement nourrit ma compréhension des questions de
							mobilité et de transition.
						</p>
					</>
				}
			/>

			<Section tone='blue'>
				<div className='flex flex-col gap-4'>
					<h2 className='max-w-[30ch] font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.25rem]'>
						Rester, évoluer, faire un bilan ou partir : aucune réponse n’est décidée à l’avance
					</h2>
					<Prose>
						<p>
							Le coaching n’a pas pour objectif de vous pousser vers une reconversion. Nous pouvons tout autant travailler sur la
							manière de retrouver une place satisfaisante dans votre métier, réaliser un bilan de carrière, explorer une mobilité
							ou préparer un changement plus important.
						</p>
					</Prose>
				</div>
			</Section>

			<ContactBand title='Prendre un premier rendez-vous' primary={PRIMARY} />
			<RelatedLinks
				links={[
					{ label: 'Bilan de carrière', href: '/bilan-carriere' },
					{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
					{ label: 'Qui suis-je ?', href: '/qui-suis-je' },
				]}
			/>
		</>
	);
}
