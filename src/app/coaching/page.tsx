import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { OfferList, PageHero, Principles, Prose, Section, Steps } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { Scribble } from '@/components/v2/deco';

export const metadata: Metadata = {
	title: { absolute: 'Coaching professionnel & personnel Bordeaux | Métaphore Coaching' },
	description:
		'Coaching professionnel et personnel à Bordeaux et à distance : faire le point, retrouver du sens, décider, évoluer et se remettre en mouvement.',
	alternates: { canonical: '/coaching' },
};

const OFFERS = [
	{
		title: 'Coaching professionnel',
		tagline: 'Retrouver du sens et de la capacité d’action',
		text: 'Retrouver du sens et de la capacité d’action dans sa vie professionnelle : évolution, positionnement, relations, décisions, équilibre, prise de responsabilités ou transition.',
		href: '/coaching-professionnel',
	},
	{
		title: 'Coaching personnel',
		tagline: 'Prendre du recul sur une situation',
		text: 'Prendre du recul sur une situation personnelle, travailler la confiance, les choix, les changements, les priorités, les limites et la recherche de sens.',
		href: '/coaching-personnel',
	},
	{
		title: 'Bilan de carrière',
		tagline: 'Faire le point avant de décider',
		text: 'Faire le point sur son parcours, ses compétences, ses motivations et ses possibilités avant de décider de la suite.',
		href: '/bilan-carriere',
	},
	{
		title: 'Transition professionnelle',
		tagline: 'Construire un changement choisi',
		text: 'Explorer et construire un changement de métier, de secteur, de fonction ou de manière de travailler, sans idéaliser ni précipiter la décision.',
		href: '/transition-professionnelle',
	},
];

const FORMULAS = [
	{
		title: 'Coaching Pro',
		subtitle: 'Accompagnement professionnel',
		tagline: 'Cultivez votre potentiel professionnel avec un accompagnement respectueux et attentif.',
		href: '/coaching-professionnel',
		items: [
			'Clarification des objectifs de carrière et exploration de nouvelles avenues.',
			'Renforcement des aptitudes de communication dans le respect de votre style personnel.',
			'Stratégies personnalisées pour la gestion du stress et la résolution de conflits.',
			'Soutien dans la transition vers des rôles professionnels plus épanouissants.',
			'Appréhender des bouleversements professionnels : reconversion, changement de poste…',
		],
	},
	{
		title: 'Coaching de Vie',
		subtitle: 'Accompagnement personnel',
		tagline: 'Avancez vers une meilleure compréhension de vous-même et de ce qui compte vraiment pour vous.',
		href: '/coaching-personnel',
		items: [
			'Identification et mise en œuvre de projets de vie significatifs.',
			'Renforcement de la confiance en soi et valorisation de votre parcours unique.',
			'Accompagnement dans les transitions de vie et les décisions importantes.',
			'Écoute et outils pour mieux gérer les émotions et les périodes de deuil.',
			'Aide à la préparation et à l’adaptation aux changements de vie, comme la retraite.',
		],
	},
];

const STEPS = [
	{ title: 'Comprendre', text: 'Regarder votre situation sous un autre angle.' },
	{ title: 'Clarifier', text: 'Identifier vos ressources et ce qui compte pour vous.' },
	{ title: 'Expérimenter', text: 'Explorer des possibilités et questionner les freins.' },
	{ title: 'Agir', text: 'Construire vos prochaines étapes.' },
];

const WHY = [
	{
		icon: '/empathy.svg',
		title: 'Écoute active et empathique',
		text: 'L’assurance d’un espace d’écoute où vous êtes entendu et vos expériences, valorisées.',
	},
	{
		icon: '/guidance.svg',
		title: 'Guidance discrète',
		text: 'Mon rôle est de vous guider avec subtilité, en vous aidant à révéler vos propres réponses et solutions.',
	},
	{
		icon: '/rythm.svg',
		title: 'Respect de votre rythme',
		text: 'Il est très important pour moi de progresser à votre propre cadence, en assurant un suivi adapté à vos besoins.',
	},
	{
		icon: '/strength.svg',
		title: 'Approche basée sur vos forces',
		text: 'En mettant en lumière vos compétences et qualités pour vous aider à bâtir sur ce que vous avez déjà.',
	},
];

const WALK = [
	{
		title: 'Déambuler au rythme de ses pensées.',
		text: 'Le fait de voir les choses bouger aide l’esprit à changer.',
	},
	{
		title: 'Retrouver son équilibre',
		text: 'Le déséquilibre permanent de la marche aide l’esprit à sortir de ses blocages.',
	},
	{
		title: 'Trouver un nouveau chemin',
		text: 'La profondeur de vue permet de découvrir de nouveaux horizons.',
	},
];

export default function CoachingPage() {
	return (
		<>
			<PageHero
				title="Prendre du recul. Comprendre ce qui se joue. Choisir comment avancer."
				subtitle="Coaching individuel · Bordeaux & à distance"
				image="/photos/coaching-echange.webp"
				imageAlt="Deux hommes échangent autour d’une table, dans une lumière chaude"
				imagePosition="35% center"
				actions={<HeroActions />}
			>
				<p>
					Il n’est pas nécessaire d’être en crise pour faire appel à un coach. Parfois, quelque chose ne convient
					simplement plus : une situation professionnelle qui interroge, une décision difficile, une envie de
					changement encore imprécise, un équilibre à retrouver ou simplement le besoin de faire le point.
				</p>
				<p>
					Le coaching offre un espace pour s’arrêter, questionner ce que l’on vit et retrouver sa capacité à
					choisir et à agir.
				</p>
			</PageHero>

			<Section title="Quel accompagnement recherchez-vous ?">
				<OfferList offers={OFFERS} />
			</Section>

			<Section
				tone="cream"
				title="Coaching individuel."
				intro={
					<p>
						Explorez nos formules de coaching <strong>individuel</strong>, conçues pour vous soutenir dans la
						découverte de vos propres solutions. Nous sommes ici pour vous accompagner, à chaque pas, sur le
						chemin de l’autonomie et de la compréhension personnelle.
					</p>
				}
			>
				<div className="formula-cards">
					{FORMULAS.map((formula) => (
						<article key={formula.title} className="formula-card">
							<p className="formula-subtitle">{formula.subtitle}</p>
							<h3>{formula.title}</h3>
							<p className="formula-tagline">{formula.tagline}</p>
							<ul>
								{formula.items.map((item) => (
									<li key={item}>
										<Check size={16} aria-hidden />
										{item}
									</li>
								))}
							</ul>
							<Link href={formula.href} className="action action-text">
								En savoir plus
							</Link>
						</article>
					))}
				</div>
			</Section>

			<Section
				tone="blue"
				title="Une même approche, quelle que soit votre situation."
				intro={
					<p>
						Je ne décide pas à votre place. Je ne vous explique pas ce que vous devriez devenir. Je vous aide à
						prendre suffisamment de recul pour mieux comprendre votre situation, identifier vos ressources,
						questionner certains freins et retrouver votre capacité à choisir.
					</p>
				}
			>
				<Steps steps={STEPS} />
			</Section>

			<Section title="Pourquoi choisir le coaching individuel ?">
				<Principles items={WHY} />
			</Section>

			<Section tone="cream">
				<div className="story walk-story">
					<div className="story-image">
						<Image
							src="/forest.jpg"
							alt="Des chaussures de marche avancent sur un sentier couvert de feuilles d’automne"
							width={1920}
							height={1280}
							quality={85}
							sizes="(min-width: 900px) 45vw, 100vw"
						/>
					</div>
					<div className="story-copy">
						<Scribble tone="sky">
							Mettre son esprit en <mark>mouvement</mark>
						</Scribble>
						<h2>Coaching en marchant.</h2>
						<p className="walk-format">
							<strong>Le cheminement</strong> · 60 minutes
						</p>
						<ul className="walk-list">
							{WALK.map((item) => (
								<li key={item.title}>
									<Check size={16} aria-hidden />
									<span>
										<strong>{item.title}</strong>
										{item.text}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Section>

			<Section title="Modalités et questions fréquentes.">
				<Prose>
					<p>
						Le coaching individuel se déroule habituellement en sessions de 60 minutes. Les séances se déroulent
						en visio ou en présentiel - en intérieur ou en extérieur -, selon votre préférence.
					</p>
					<p>
						Pour en savoir plus sur la structure de nos séances, les options de forfaits et les tarifs, veuillez
						visiter notre page <Link href="/tarifs">Tarifs</Link>. Nous proposons une variété de formules pour
						s’adapter à différents besoins et préférences.
					</p>
					<p>
						Si vous hésitez sur la formule qui vous conviendrait le mieux ou si vous souhaitez obtenir plus
						d’informations, n’hésitez pas à nous contacter. Notre page <Link href="/contact">Contact</Link> est
						le moyen le plus rapide pour nous joindre et pour que nous puissions répondre à toutes vos questions.
						Vous pouvez également programmer une première consultation pour discuter de vos attentes et voir
						comment le coaching individuel peut vous être bénéfique.
					</p>
				</Prose>
			</Section>

			<ContactBand />
		</>
	);
}
