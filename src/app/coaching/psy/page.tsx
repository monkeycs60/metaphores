import type { Metadata } from 'next';
import { ButtonLink, Notice, PageHero, Section, Story } from '@/components/v2/ui';

export const metadata: Metadata = {
	title: 'Coach ou psy ?',
	description:
		'Ce qui distingue le coaching d’une psychothérapie, et quand orienter vers un autre professionnel.',
	alternates: { canonical: '/coaching/psy' },
};
export default function CoachOuPsyPage() {
	return (
		<>
			<PageHero
				title="Coach ou psy ? Comprendre le cadre."
				subtitle="Choisir son accompagnement"
				image="/v3/conversation.webp"
				imageAlt="Deux personnes prennent le temps d’échanger autour d’un carnet"
			>
				<p>
					Le coaching se concentre sur une situation, un objectif et votre capacité d’action. Il repose sur
					l’écoute, le questionnement et la reformulation.
				</p>
			</PageHero>
			<Section>
				<Story
					title="Clarifier le présent, préparer la suite."
					image="/v2/chemin.webp"
					imageAlt="Un chemin de dune se prolonge vers l’horizon"
				>
					<p>
						Le coach vous aide à regarder autrement ce que vous traversez, à différencier les faits et vos
						représentations, puis à explorer vos propres pistes.
					</p>
					<p>
						Votre passé peut être évoqué pour éclairer une situation actuelle. Le travail du coach reste
						orienté vers vos choix et vos prochaines actions.
					</p>
				</Story>
			</Section>
			<Section tone="cream">
				<Notice title="Le coaching ne remplace pas un suivi médical ou psychologique">
					<p>
						Le coaching n’est pas une psychothérapie. Lorsqu’un suivi médical ou psychologique est nécessaire,
						il doit être assuré par les professionnels concernés. Le coach reconnaît les limites de son
						intervention et peut vous orienter vers eux.
					</p>
					<p>Les deux approches peuvent être complémentaires, selon votre situation et vos besoins.</p>
				</Notice>
				<ButtonLink href="/coaching-personnel" variant="text">
					Découvrir le coaching personnel
				</ButtonLink>
			</Section>
		</>
	);
}
