import type { Metadata } from 'next';
import { CheckList, Notice, PageHero, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Coaching personnel à Bordeaux',
	description:
		'Coaching personnel à Bordeaux et en visio : confiance en soi, choix, périodes de changement, priorités, limites et recherche de sens, dans un cadre confidentiel.',
	alternates: { canonical: '/coaching-personnel' },
};

const TOPICS = [
	'La confiance en soi',
	'Les choix et la prise de décision',
	'Les périodes de changement',
	'Les difficultés à passer à l’action',
	'Les priorités personnelles',
	'Les limites que l’on souhaite poser',
	'L’équilibre entre les différentes dimensions de sa vie',
	'La recherche de sens',
];

const PRIMARY = { label: 'Échanger sur votre situation', href: '/contact?motif=coaching-personnel' };

export default function CoachingPersonnelPage() {
	return (
		<>
			<PageHero
				title='Prendre du recul sur une situation et retrouver son propre chemin'
				subtitle='Coaching personnel à Bordeaux et à distance'
				image='/forest.jpg'
				imageAlt='Des pieds en chaussures de marche sur un sentier de forêt couvert de feuilles'
				actions={<HeroActions primary={PRIMARY} />}>
				<p>
					Certaines périodes de vie nous amènent à nous questionner. Nous savons parfois très bien ce que nous ne voulons plus,
					sans savoir encore ce que nous voulons à la place.
				</p>
				<p>Le coaching personnel offre un espace de réflexion et de mise en mouvement, dans un cadre confidentiel et sans jugement.</p>
			</PageHero>

			<Section title='Le coaching peut permettre de travailler sur'>
				<CheckList items={TOPICS} />
				<p className='font-caveat text-2xl text-blackOne lg:text-3xl'>
					Le coach n’apporte pas une réponse toute faite. Il vous aide à faire émerger la vôtre.
				</p>
			</Section>

			<Section tone='cream'>
				<Notice title='Ce que le coaching personnel n’est pas'>
					<p>
						Le coaching n’est pas une psychothérapie et ne se substitue pas à un suivi médical ou psychologique lorsque celui-ci
						est nécessaire. Son cadre est orienté vers une situation, un objectif et la capacité d’action de la personne.
					</p>
				</Notice>
			</Section>

			<ContactBand primary={PRIMARY} />
			<RelatedLinks
				links={[
					{ label: 'Coach ou psy ?', href: '/coaching/psy' },
					{ label: 'Coaching professionnel', href: '/coaching-professionnel' },
					{ label: 'Toutes les formes de coaching', href: '/coaching' },
				]}
			/>
		</>
	);
}
