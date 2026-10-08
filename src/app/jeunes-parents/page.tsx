import type { Metadata } from 'next';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { Scribble } from '@/components/v2/deco';
import { CheckList, PageHero, Quotes, RelatedLinks, Section, Steps, Story } from '@/components/v2/ui';
import { services } from '@/lib/accompagnements';

export const metadata: Metadata = {
	title: { absolute: 'Coach adolescent & parents à Bordeaux | Orientation & motivation | Métaphore Coaching' },
	description:
		'Accompagnement des adolescents et de leurs parents à Bordeaux : motivation, orientation, confiance, perte de sens, autonomie et relation familiale.',
	alternates: { canonical: '/jeunes-parents' },
};

const service = services['jeunes-parents'];

const YOUTH_SITUATIONS = [
	'Perte de motivation ou de sens',
	'Difficultés à se projeter',
	'Orientation scolaire ou professionnelle',
	'Manque de confiance, difficulté à faire des choix',
	'Besoin d’autonomie et d’organisation',
	'Difficultés d’intégration ou de relation',
];

const FAMILY_SITUATIONS = [
	'Tensions ou incompréhensions entre parents et enfant',
	'Des conseils qui ne passent plus',
	'Des discussions qui tournent vite au conflit',
	'Des attentes différentes sur l’avenir',
	'Le sentiment de ne plus savoir comment l’aider',
	'La difficulté à trouver la bonne distance',
];

const TRIO = [
	{
		who: 'Le jeune',
		title: 'Un espace à lui',
		text: 'Un lieu neutre, différent de la famille et de l’école, pour dire ce qu’il vit, comprendre ce qui le freine et reprendre progressivement la responsabilité de ses choix.',
	},
	{
		who: 'Entre vous',
		title: 'Le lien',
		text: 'Clarifier la place de chacun, améliorer la communication et retrouver des échanges où l’on s’écoute vraiment, sans que tout se joue sur les notes ou l’orientation.',
	},
	{
		who: 'Les parents',
		title: 'Un appui pour vous',
		text: 'Des temps spécifiques pour prendre du recul, déposer vos inquiétudes et soutenir son autonomie sans vous désengager de votre rôle de parent.',
	},
];

const PARENT_NEEDS = [
	{
		title: 'Comprendre ce qui se joue',
		text: 'Prendre du recul sur la situation : ce qui relève de votre enfant, de la famille, de l’école, et ce qui peut évoluer.',
	},
	{
		title: 'Trouver votre juste place',
		text: 'Soutenir sans décider à sa place, encourager sans ajouter de pression, laisser de l’espace sans vous sentir à l’écart.',
	},
	{
		title: 'Renouer le dialogue',
		text: 'Sortir des échanges qui tournent en rond, mettre des mots sur les tensions et vous accorder sur ce qui compte pour chacun.',
	},
	{
		title: 'Traverser les choix d’orientation',
		text: 'Aborder les décisions scolaires et les projets d’avenir sans qu’ils deviennent un sujet de conflit permanent.',
	},
];

const PARENT_QUESTIONS = [
	'Comment l’aider sans le pousser ?',
	'Pourquoi chaque discussion finit-elle en dispute ?',
	'Faut-il le laisser choisir seul son orientation ?',
	'Comment lui faire confiance sans me désintéresser ?',
];

const STEPS = [
	{
		title: 'Un premier échange avec vous',
		text: '30 minutes offertes pour comprendre la situation, vos inquiétudes et vos attentes.',
	},
	{
		title: 'Une rencontre avec votre enfant',
		text: 'Pour vérifier qu’il est partie prenante : le coaching avance quand le jeune le choisit.',
	},
	{
		title: 'Des séances à son rythme',
		text: 'Votre enfant travaille sur ses propres objectifs ; le contenu des séances reste confidentiel.',
	},
	{
		title: 'Des temps parents et des points à trois',
		text: 'Selon la situation, des séances pour vous et des échanges réunissant parents et jeune pour faire évoluer la relation.',
	},
];

export default function Page() {
	return (
		<>
			<PageHero
				title="Un jeune qui doute, c’est toute une famille qui cherche."
				subtitle={service.context}
				image={service.image}
				imageAlt={service.imageAlt}
				split
				note={
					<Scribble tone="sky" className="hero-scribble">
						<mark>Grandir</mark> à son rythme
					</Scribble>
				}
				actions={<HeroActions primary={service.primary} />}
			>
				<p>
					Quand un enfant ou un adolescent se démotive, doute de lui ou ne sait plus pourquoi il travaille, les
					conseils supplémentaires ne suffisent pas toujours. Le coaching offre au jeune un espace neutre pour
					parler librement, et aux parents un appui pour retrouver leur juste place à ses côtés.
				</p>
			</PageHero>

			<Section title="Pour quelles situations ?">
				<div className="situation-groups">
					<div>
						<h3 className="situation-title">Chez le jeune</h3>
						<CheckList items={YOUTH_SITUATIONS} columns={1} />
					</div>
					<div>
						<h3 className="situation-title">Dans la relation parents-enfant</h3>
						<CheckList items={FAMILY_SITUATIONS} columns={1} />
					</div>
				</div>
			</Section>

			<Section
				tone="blue"
				title="Une dynamique à trois."
				intro={
					<p>
						Une difficulté ne concerne jamais seulement le jeune. Elle s’installe dans les échanges du quotidien,
						les inquiétudes des parents et les attentes de chacun. L’accompagnement tient compte de ces trois
						dimensions.
					</p>
				}
			>
				<ol className="trio">
					{TRIO.map((item) => (
						<li key={item.who}>
							<p className="trio-who">{item.who}</p>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</li>
					))}
				</ol>
			</Section>

			<Section tone="cream">
				<Story title="Un accompagnement qui ne décide pas à sa place." image={service.storyImage} imageAlt={service.storyImageAlt}>
					<p>
						L’objectif n’est pas de dire au jeune quelle filière choisir, comment travailler ou ce qu’il devrait
						devenir. Nous cherchons plutôt à comprendre ce qui compte pour lui, ce qui le freine, ce qui le met en
						mouvement et comment il peut reprendre progressivement la responsabilité de ses choix.
					</p>
					<p>
						Plus de dix ans dans l’enseignement de la technologie m’ont appris à écouter ce qui se joue derrière
						une difficulté apparente. Le coaching apporte un autre cadre : moins centré sur les résultats
						scolaires, davantage sur la personne, ses ressources et sa capacité à choisir.
					</p>
				</Story>
			</Section>

			<Section
				title="Et les parents ?"
				note={
					<Scribble tone="sky">
						Une place pour <mark>chacun</mark>
					</Scribble>
				}
				intro={
					<p>
						Les parents sont souvent directement concernés par les difficultés de leur enfant. Vous avez votre
						place dans l’accompagnement, sans prendre la sienne.
					</p>
				}
			>
				<ul className="parent-grid">
					{PARENT_NEEDS.map((need) => (
						<li key={need.title}>
							<h3>{need.title}</h3>
							<p>{need.text}</p>
						</li>
					))}
				</ul>
				<div className="parent-questions">
					<h3 className="situation-title">Des questions que se posent souvent les parents</h3>
					<Quotes items={PARENT_QUESTIONS} />
				</div>
			</Section>

			<Section tone="cream" title="Comment se déroule l’accompagnement ?">
				<Steps steps={STEPS} />
			</Section>

			<ContactBand primary={service.primary} />
			<RelatedLinks links={service.related} />
		</>
	);
}
