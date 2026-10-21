import Image from 'next/image';
import type { Metadata } from 'next';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { Scribble } from '@/components/v2/deco';
import { PageHero, Quotes, RelatedLinks, Section, Story } from '@/components/v2/ui';
import { contactFor } from '@/lib/site';

export const metadata: Metadata = {
	title: { absolute: 'Coaching enseignant & reconversion | Bordeaux | Métaphore Coaching' },
	description:
		'Enseignant en perte de sens ou en réflexion professionnelle ? Coaching à Bordeaux et à distance pour évoluer, faire un bilan ou préparer une transition.',
	alternates: { canonical: '/coaching-enseignants' },
};

const contact = contactFor('enseignant');

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
				title="Retrouver un équilibre et du sens"
				subtitle="Coaching enseignants · Bordeaux & à distance"
				image="/photos/classe.webp"
				imageAlt="Une salle de classe vide, baignée de la lumière du soir"
				split
				note={
					<Scribble tone="sky" className="hero-scribble">
						Celui qui sait demander est <mark>libre</mark>
					</Scribble>
				}
				actions={<HeroActions contact={contact} />}
			>
				<p>
					On peut aimer transmettre et ne plus se reconnaître dans ses conditions de travail. On peut être
					compétent et pourtant ressentir de la fatigue, de la frustration ou une perte de sens.
				</p>
			</PageHero>

			<Section
				tone="cream"
				title="Le métier d’enseignant n’a jamais autant questionné"
				intro={
					<blockquote className="intro-quote">
						Ces questionnements ne signifient pas nécessairement qu’il faut quitter l’Éducation nationale. Ils
						indiquent parfois qu’il est temps de prendre du recul sur sa place professionnelle.
					</blockquote>
				}
			>
				<div className="bubbles-with-photo">
					<div className="bubbles-photo">
						<Image
							src="/photos/enseignant-questionne.webp"
							alt="Une enseignante, pensive, à son bureau devant le tableau"
							width={1800}
							height={1200}
							sizes="(min-width: 900px) 34vw, 90vw"
						/>
					</div>
					<Quotes items={QUESTIONS} variant="bubbles" />
				</div>
			</Section>

			<Section>
				<Story
					title="Rester, évoluer ou changer"
					image="/photos/enseignant-tableau.webp"
					imageAlt="Un enseignant, de dos, écrit des équations sur un grand tableau noir"
				>
					<p className="prose-large">
						Aucune réponse n’est décidée à l’avance. Le coaching n’a pas pour objectif de vous pousser vers une
						reconversion. Nous pouvons tout autant travailler sur la manière de retrouver une place satisfaisante
						dans votre métier, réaliser un bilan de carrière, explorer une mobilité ou préparer un changement
						plus important.
					</p>
				</Story>
			</Section>

			<Section tone="blue">
				<Story
					title="Plus de dix ans d’expérience dans l’enseignement"
					image="/photos/christophe-veste-jaune-mur.webp"
					imageAlt="Christophe Jacques, veste jaune, sourit devant un mur bleu nuit"
					imagePosition="50% 20%"
					reverse
					compact
				>
					<p>
						Mon parcours d’enseignant en technologie et de faisant fonction de CPE me permet de connaître les
						réalités du métier, ses contraintes, ses satisfactions et les compétences qu’il développe :
						animation, pédagogie, gestion de groupe, création de contenus, adaptation, accompagnement et
						organisation.
					</p>
					<p>
						Avant l’enseignement, j’ai également connu plusieurs reconversions professionnelles, notamment dans
						l’immobilier et l’aéronautique. Cette expérience personnelle du changement nourrit ma compréhension
						des questions de mobilité et de transition.
					</p>
				</Story>
			</Section>

			<ContactBand contact={contact} />
			<RelatedLinks
				links={[
					{ label: 'Bilan de carrière', href: '/bilan-carriere' },
					{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
					{ label: 'Mon parcours', href: '/qui-suis-je' },
				]}
			/>
		</>
	);
}
