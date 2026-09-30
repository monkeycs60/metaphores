import type { Metadata } from 'next';
import { ButtonLink, PageHero, Section, Steps, Story } from '@/components/v2/ui';
import { ContactBand } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'C’est quoi le coaching ?',
	description:
		'Définition et déroulement d’un coaching professionnel ou personnel : le cadre, les étapes et la durée.',
	alternates: { canonical: '/coaching/origines' },
};
const STEPS = [
	{ title: 'Accueillir', text: 'Faire le point sur votre situation et ce qu’elle soulève.' },
	{ title: 'Définir', text: 'Choisir un objectif qui compte pour vous.' },
	{ title: 'Explorer', text: 'Questionner, changer de perspective, expérimenter.' },
	{ title: 'Avancer', text: 'Mettre en œuvre vos solutions et gagner en autonomie.' },
];
export default function CoachingDefinitionPage() {
	return (
		<>
			<PageHero
				title="Faire un pas de côté. Voir autrement."
				subtitle="C’est quoi le coaching ?"
				image="/v2/chemin.webp"
				imageAlt="Un chemin dans les dunes ouvert vers l’océan"
			>
				<p>
					Un accompagnement pour dépasser une difficulté ou atteindre un objectif, en trouvant les solutions
					adaptées à qui vous êtes.
				</p>
			</PageHero>
			<Section>
				<Story
					title="Le coach, un miroir de votre parole."
					image="/v3/conversation.webp"
					imageAlt="Un carnet ouvert accompagne une conversation de coaching"
				>
					<p>
						Par l’écoute, les questions et la reformulation, le coach vous aide à entendre autrement votre
						histoire. Les métaphores peuvent ouvrir un autre point de vue sur une situation familière.
					</p>
					<p>
						Vous choisissez votre direction. Le coaching demande une volonté de changement et respecte votre
						équilibre de vie.
					</p>
				</Story>
			</Section>
			<Section tone="blue" title="Comment se déroule un coaching ?">
				<Steps steps={STEPS} />
			</Section>
			<Section
				title="Une durée limitée, adaptée à vous."
				intro={
					<p>
						En moyenne, un accompagnement dure six séances. Le nombre et le rythme dépendent de votre demande
						et de vos contraintes.
					</p>
				}
			>
				<ButtonLink href="/tarifs" variant="text">
					Consulter les tarifs et les formats courts
				</ButtonLink>
				<ButtonLink href="/coaching/psy" variant="text">
					Comprendre la différence entre coach et psy
				</ButtonLink>
			</Section>
			<ContactBand />
		</>
	);
}
