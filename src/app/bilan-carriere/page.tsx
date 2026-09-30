import type { Metadata } from 'next';
import { CheckList, Notice, PageHero, Prose, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Bilan de carrière à Bordeaux',
	description:
		'Bilan de carrière à Bordeaux et en visio : relire son parcours, identifier compétences et motivations, et construire des pistes d’évolution concrètes.',
	alternates: { canonical: '/bilan-carriere' },
};

const TOPICS = [
	'Votre parcours et les étapes qui l’ont construit',
	'Vos compétences et ressources transférables',
	'Vos motivations et ce qui donne du sens à votre travail',
	'Vos valeurs et priorités actuelles',
	'Vos contraintes personnelles et professionnelles',
	'Les environnements et rôles dans lesquels vous fonctionnez le mieux',
	'Les pistes d’évolution à explorer',
	'Les premières actions permettant de tester ou préciser ces pistes',
];

const PRIMARY = { label: 'Échanger sur votre situation', href: '/contact?motif=bilan-carriere' };

export default function BilanCarrierePage() {
	return (
		<>
			<PageHero
				title='Bilan de carrière : faire le point avant de décider de la suite'
				subtitle='À Bordeaux et à distance'
				image='/v2/bilan-carriere.webp'
				imageAlt='Un carnet ouvert, une boussole et une carte posés sur une table en bois'
				actions={<HeroActions primary={PRIMARY} />}>
				<p>
					Vous n’avez pas forcément envie de changer de métier. Mais vous ressentez le besoin de comprendre où vous en êtes
					professionnellement et ce que vous souhaitez pour la suite.
				</p>
				<p>
					Le bilan de carrière permet de prendre de la hauteur sur votre parcours pour identifier ce que vous avez construit, ce
					que vous savez faire, ce qui vous motive encore, ce qui ne vous convient plus et ce que vous souhaitez désormais
					privilégier.
				</p>
			</PageHero>

			<Section title='Ce que nous explorons'>
				<CheckList items={TOPICS} />
			</Section>

			<Section tone='cream'>
				<div className='grid gap-12 lg:grid-cols-2'>
					<div className='flex flex-col gap-4'>
						<h2 className='font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.25rem]'>Un bilan orienté vers la suite</h2>
						<Prose>
							<p>
								L’objectif n’est pas de produire un inventaire de plus. Il est d’aboutir à une vision plus claire de votre
								situation, à des hypothèses d’évolution et à des pistes professionnelles concrètes.
							</p>
						</Prose>
					</div>
					<Notice title='Bilan de carrière ou bilan de compétences ?'>
						<p>
							Le bilan de carrière proposé par Métaphore Coaching est un accompagnement de coaching centré sur votre parcours et
							vos choix professionnels. Il ne s’agit pas d’un « bilan de compétences » au sens du dispositif réglementé.
						</p>
					</Notice>
				</div>
			</Section>

			<ContactBand title='Faire le point sur votre carrière' primary={PRIMARY} />
			<RelatedLinks
				links={[
					{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
					{ label: 'Enseignants', href: '/coaching-enseignants' },
					{ label: 'Coaching professionnel', href: '/coaching-professionnel' },
				]}
			/>
		</>
	);
}
