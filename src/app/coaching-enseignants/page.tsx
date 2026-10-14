import type { Metadata } from 'next';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { Scribble } from '@/components/v2/deco';
import { PageHero, Quotes, RelatedLinks, Section, Story } from '@/components/v2/ui';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Coaching enseignant & reconversion | Bordeaux | Métaphore Coaching' },
	description:
		'Enseignant en perte de sens ou en réflexion professionnelle ? Coaching à Bordeaux et à distance pour évoluer, faire un bilan ou préparer une transition.',
	alternates: { canonical: '/coaching-enseignants' },
};

const service = services['coaching-enseignants'];

const QUESTIONS = [
	'Comment retrouver du sens dans mon métier ?',
	'Est-ce le métier que je veux quitter ou la manière dont je l’exerce ?',
	'Quelles compétences ai-je réellement développées ?',
	'Que puis-je faire en dehors de l’enseignement ?',
	'Comment préparer une transition sans me mettre en difficulté ?',
	'Comment retrouver un équilibre plus satisfaisant ?',
];

export default function Page() {
	return (
		<>
			<PageHero
				title="Retrouver un équilibre et du sens dans l’éducation."
				subtitle={service.context}
				image={service.image}
				imageAlt={service.imageAlt}
				split
				note={
					<Scribble tone="sky" className="hero-scribble">
						Celui qui sait demander est <mark>libre</mark>
					</Scribble>
				}
				actions={<HeroActions primary={service.primary} />}
			>
				{service.description.map((text) => (
					<p key={text}>{text}</p>
				))}
			</PageHero>

			<Section
				tone="cream"
				title="Des questions que je connais de l’intérieur."
				intro={
					<p>
						Ces questionnements ne signifient pas nécessairement qu’il faut quitter l’Éducation nationale. Ils
						indiquent parfois qu’il est temps de prendre du recul sur sa place professionnelle.
					</p>
				}
			>
				<Quotes items={QUESTIONS} />
			</Section>

			<Section>
				<Story title="Rester, évoluer ou changer." image={service.storyImage} imageAlt={service.storyImageAlt}>
					<p>
						Aucune réponse n’est décidée à l’avance. Le coaching n’a pas pour objectif de vous pousser vers une
						reconversion. Nous pouvons tout autant travailler sur la manière de retrouver une place satisfaisante
						dans votre métier, réaliser un bilan de carrière, explorer une mobilité ou préparer un changement
						plus important.
					</p>
				</Story>
			</Section>

			<Section tone="blue">
				<Story
					title="Plus de dix ans d’expérience dans l’enseignement."
					image="/photos/christophe-veste-jaune-mur.webp"
					imageAlt="Christophe Jacques, veste jaune, sourit devant un mur bleu nuit"
					imagePosition="50% 20%"
					reverse
				>
					<p>
						Mon parcours d’enseignant en technologie me permet de connaître les réalités du métier, ses
						contraintes, ses satisfactions et les compétences qu’il développe : animation, pédagogie, gestion de
						groupe, création de contenus, adaptation, accompagnement et organisation.
					</p>
					<p>
						Avant l’enseignement, j’ai également connu plusieurs reconversions professionnelles réussies,
						notamment dans l’immobilier et l’aéronautique. Cette expérience personnelle du changement nourrit ma
						compréhension des questions de mobilité et de transition.
					</p>
				</Story>
			</Section>

			<ContactBand primary={service.primary} />
			<RelatedLinks links={service.related} />
		</>
	);
}
