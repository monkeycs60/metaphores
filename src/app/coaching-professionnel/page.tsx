import type { Metadata } from 'next';
import { CheckList, PageHero, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Coaching professionnel à Bordeaux',
	description:
		'Coaching professionnel à Bordeaux et en visio : retrouver du sens au travail, préparer une évolution, prendre une décision, améliorer ses relations professionnelles.',
	alternates: { canonical: '/coaching-professionnel' },
};

const TOPICS = [
	'Retrouver du sens dans votre travail',
	'Prendre confiance dans votre positionnement professionnel',
	'Préparer une évolution ou une prise de responsabilités',
	'Améliorer certaines relations professionnelles',
	'Prendre une décision importante',
	'Mieux définir vos priorités',
	'Retrouver un équilibre satisfaisant',
	'Préparer une transition ou une reconversion',
];

export default function CoachingProfessionnelPage() {
	return (
		<>
			<PageHero
				title='Retrouver du sens et de la capacité d’action dans sa vie professionnelle'
				subtitle='Coaching professionnel à Bordeaux et à distance'
				image='/v2/coaching-professionnel.webp'
				imageAlt='Une personne de dos près d’une grande fenêtre, dans un espace de travail calme'
				actions={<HeroActions primary={{ label: 'Échanger sur votre situation', href: '/contact?motif=coaching-professionnel' }} />}>
				<p>
					Le coaching professionnel peut être utile lorsque vous souhaitez faire évoluer une situation sans toujours savoir
					comment vous y prendre. Il ne s’agit pas nécessairement de changer de métier : il s’agit d’abord de comprendre ce que
					vous souhaitez réellement faire évoluer.
				</p>
			</PageHero>

			<Section title='Nous pouvons notamment travailler sur'>
				<CheckList items={TOPICS} />
			</Section>

			<Section
				tone='cream'
				title='Un accompagnement ancré dans votre réalité'
				intro={
					<p>
						Nous travaillons à partir de votre contexte, de vos contraintes, de vos ressources et de ce qui compte pour vous. Le
						coaching n’apporte pas une solution standard : il vous aide à clarifier vos choix et à construire des actions qui vous
						ressemblent.
					</p>
				}
			/>

			<ContactBand
				title='Parlons de votre situation professionnelle'
				primary={{ label: 'Échanger sur votre situation', href: '/contact?motif=coaching-professionnel' }}
			/>
			<RelatedLinks
				links={[
					{ label: 'Bilan de carrière', href: '/bilan-carriere' },
					{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
					{ label: 'Coaching personnel', href: '/coaching-personnel' },
					{ label: 'Toutes les formes de coaching', href: '/coaching' },
				]}
			/>
		</>
	);
}
