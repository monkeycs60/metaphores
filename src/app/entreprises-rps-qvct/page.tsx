import Image from 'next/image';
import type { Metadata } from 'next';
import { Check, MessageCircle, ShieldCheck, UserCheck, Users } from 'lucide-react';
import {
	ButtonLink,
	CheckList,
	CtaBand,
	Notice,
	NumberedList,
	PageHero,
	Prose,
	RelatedLinks,
	Section,
	Steps,
	Story,
} from '@/components/v2/ui';
import { HeroActions } from '@/components/v2/blocks';
import { Scribble } from '@/components/v2/deco';
import { CTA } from '@/lib/site';

export const metadata: Metadata = {
	title: { absolute: 'Coaching entreprise Bordeaux | RPS & QVCT | Métaphore Coaching' },
	description:
		'Coaching de managers et d’équipes à Bordeaux : tensions, changements, prévention RPS, QVCT, espaces de dialogue et accompagnement des collectifs.',
	alternates: { canonical: '/entreprises-rps-qvct' },
};

const QUOTE = { label: 'Demander un devis', href: '/contact?motif=entreprise' };

const FORMATS = [
	{
		icon: UserCheck,
		title: 'Accompagner les managers',
		text: 'Prendre du recul sur son rôle, ses décisions et sa manière de communiquer.',
		image: '/photos/format-managers.webp',
		imageAlt: 'Une manageuse et un collègue échangent en souriant devant un ordinateur',
		items: [
			'Prise de poste et positionnement',
			'Relations, charge et priorités',
			'Confiance et accompagnement du changement',
		],
	},
	{
		icon: Users,
		title: 'Retrouver la coopération',
		text: 'Comprendre les tensions dans l’équipe et construire des pistes d’action.',
		image: '/photos/format-cooperation.webp',
		imageAlt: 'Trois collègues rient ensemble autour d’une table de travail',
		items: [
			'Cadrage et entretiens exploratoires si nécessaire',
			'1 à 3 ateliers collectifs',
			'Restitution et pistes d’action',
		],
	},
	{
		icon: ShieldCheck,
		title: 'Prévenir les RPS & soutenir la QVCT',
		text: 'Repérer les difficultés avant qu’elles ne s’installent.',
		image: '/photos/format-prevention.webp',
		imageAlt: 'Un atelier collaboratif dans un bureau ensoleillé, devant un tableau d’affichage',
		items: [
			'Charge de travail et signaux de fragilisation',
			'Perte de sens et désengagement',
			'Relations difficiles et management sans épuisement',
		],
	},
	{
		icon: MessageCircle,
		title: 'Ouvrir des espaces de parole',
		text: 'Prendre du recul collectivement sur les situations de travail.',
		image: '/photos/format-parole.webp',
		imageAlt: 'Un groupe échange, assis en cercle dans un salon lumineux',
		items: [
			'Groupes de 6 à 12 personnes',
			'Séances de 1 h 30 à 2 h',
			'Intervention ponctuelle ou cycle régulier',
		],
	},
];

const NEEDS = [
	{
		title: 'Soutien aux projets et défis de croissance',
		text: 'Accompagnement dans la gestion du changement, travail sur la motivation pour surmonter les défis de croissance et de restructuration.',
	},
	{
		title: 'Développement des compétences et libération du potentiel',
		text: 'Renforcement du leadership et gestion efficace des talents pour améliorer les compétences individuelles et collectives.',
	},
	{
		title: 'Amélioration de la collaboration et restauration de la confiance',
		text: 'Techniques pour renforcer l’esprit collaboratif, notamment en environnements mixtes, pour rétablir un climat de confiance boostant la performance globale.',
	},
	{
		title: 'Adaptation aux nouvelles technologies et communication intergénérationnelle',
		text: 'Aide à l’adaptation aux évolutions technologiques et amélioration de la communication entre différentes générations au sein de l’équipe.',
	},
	{
		title: 'Agilité et autonomie face aux mutations actuelles',
		text: 'Formation en gestion du temps et développement de l’autonomie pour mieux naviguer dans un environnement complexe et incertain, répondant aux enjeux futurs.',
	},
];

const BENEFITS = [
	{
		icon: '/enterprise1.svg',
		text: (
			<>
				Réconcilier la <strong>performance</strong> et la <strong>qualité de vie au travail</strong>. Prévenir
				les risques psychosociaux et créer un climat de confiance.
			</>
		),
	},
	{
		icon: '/enterprise2.svg',
		text: (
			<>
				Créer de la <strong>cohésion</strong> et de <strong>l’adhésion</strong>. Capter les signaux faibles et
				développer <strong>l’intelligence collective</strong> pour faire émerger les talents dans l’entreprise.
			</>
		),
	},
	{
		icon: '/enterprise3.svg',
		text: (
			<>
				Faire <strong>progresser</strong> l’ensemble des acteurs de l’entreprise. <strong>Clarifier</strong> la
				volonté des acteurs pour leur permettre de trouver leur meilleure place.
			</>
		),
	},
	{
		icon: '/enterprise4.svg',
		text: (
			<>
				Co-élaborer la structure organisationnelle en alignant sur la mission et la <strong>vision</strong> de
				l’entreprise, favorisant <strong>l’engagement</strong> des employés et la réussite organisationnelle.
			</>
		),
	},
];

const LEADER_POINTS = [
	{ title: 'Renforcement du leadership', text: 'Cultiver une capacité de leadership efficace et inspirante.' },
	{
		title: 'Accompagnement dans les nouvelles responsabilités',
		text: 'Soutien lors de la prise de nouvelles responsabilités.',
	},
	{
		title: 'Gestion des conflits et management',
		text: 'Stratégies pour surmonter les situations conflictuelles en management.',
	},
	{ title: 'Confiance et estime de soi', text: 'La confiance en soi pour prendre des décisions affirmées.' },
	{
		title: 'Prise de recul sur les situations complexes',
		text: 'Aide à la réflexion et à l’analyse pour des décisions difficiles.',
	},
	{
		title: 'Gestion des priorités et du stress',
		text: 'Méthodes pour mieux gérer le temps, les priorités et réduire le stress.',
	},
	{
		title: 'Délégation efficace',
		text: 'Apprendre à déléguer pour optimiser la performance et l’efficacité.',
	},
	{
		title: 'Préparation aux événements clés',
		text: 'Techniques pour se préparer à des événements importants, négociations, ou prises de parole.',
	},
];

const TEAM_GOALS = [
	'Développer le fonctionnement d’une équipe par l’intelligence collective pour lui permettre de donner toute son efficacité.',
	'Favoriser la communication et la coopération au sein de l’équipe : concourir ensemble à l’atteinte des objectifs, désamorcer les situations de conflits et de crises.',
	'Mobiliser les compétences collectives et améliorer les performances : une équipe est porteuse de compétences collectives dans lesquelles réside sa force.',
	'Transformer la diversité et la complémentarité des profils des équipiers en talent d’équipe.',
	'Accompagner les transformations et les équipes qui les vivent et les mettre en œuvre.',
	'Réussir la mise en œuvre des projets de changement et de transformation : nouvelle organisation, fusion, intégration d’un nouveau membre dans une équipe, démarrage d’un projet multidisciplinaire.',
];

const TEAM_STEPS = [
	{ text: 'Apprendre à se connaître et travailler ensemble.' },
	{
		text: 'Exprimer une vision partagée de la réalité (état des lieux), découverte de l’équipe afin de définir les objectifs, besoins et enjeux. Les objectifs sont définis en collaboration avec le responsable de l’équipe et l’équipe elle-même.',
	},
	{
		text: 'Restitution des besoins et demandes de l’équipe et du manager destinés à calibrer les objectifs et modalités de l’accompagnement. Construire la vision d’un avenir commun avec son plan d’action.',
	},
	{ text: 'Mettre en œuvre le plan, itérer et adapter en fonction des résultats constatés.' },
	{ text: 'Séance de bilan à l’issue de l’accompagnement.' },
];

export default function EntreprisesPage() {
	return (
		<>
			<PageHero
				title="Remettre du dialogue dans le travail."
				subtitle="Entreprises & organisations · Bordeaux et région"
				split
				image="/photos/entreprises-equipe.webp"
				imageAlt="Quatre collègues sourient autour d’un ordinateur portable, dans un bureau lumineux"
				imagePosition="45% center"
				actions={<HeroActions primary={CTA.business} />}
			>
				<p>
					Prévenir les tensions, soutenir les managers et créer des espaces de recul, de dialogue et d’action.
				</p>
			</PageHero>

			<Section
				title="Coaching en entreprise."
				note={
					<Scribble tone="sky">
						Besoin de faire évoluer une personne ou un <mark>groupe</mark> ?
					</Scribble>
				}
			>
				<Prose>
					<p>
						Le coaching en entreprise sert de catalyseur pour débloquer le potentiel des équipes et des
						dirigeants, transformant les défis en opportunités. Ce processus enrichissant contribue à forger des
						leaders inspirants et à instaurer une dynamique d’équipe solide et solidaire, essentielle pour
						naviguer dans les eaux turbulentes du marché actuel. Le coaching en entreprise peut donc être vu
						comme une des pierres angulaires d’une organisation aspirant à l’excellence et à l’innovation.
					</p>
				</Prose>
			</Section>

			<Section
				tone="cream"
				title="Quatre formats, un cadre sur mesure."
				intro={<p>Chaque intervention est construite avec vous.</p>}
			>
				<div className="format-cards">
					{FORMATS.map((format) => (
						<article className="format-card" key={format.title}>
							<div className="format-card-image">
								<Image
									src={format.image}
									alt={format.imageAlt}
									width={1000}
									height={667}
									quality={85}
									sizes="(min-width: 900px) 40vw, 100vw"
								/>
							</div>
							<div className="format-card-body">
								<h3>
									<format.icon size={26} strokeWidth={1.4} aria-hidden />
									<span>{format.title}</span>
								</h3>
								<p>{format.text}</p>
								<ul>
									{format.items.map((item) => (
										<li key={item}>
											<Check size={15} aria-hidden />
											{item}
										</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</Section>

			<Section title="Identifier les besoins de votre entreprise.">
				<NumberedList items={NEEDS} />
			</Section>

			<Section tone="blue" title="Les apports du coaching d’entreprise.">
				<ul className="benefits">
					{BENEFITS.map((benefit) => (
						<li key={benefit.icon}>
							<Image src={benefit.icon} alt="" width={64} height={64} />
							<p>{benefit.text}</p>
						</li>
					))}
				</ul>
			</Section>

			<Section>
				<Story
					title="Coaching de dirigeant."
					image="/photos/conversation.webp"
					imageAlt="Deux hommes échangent face à face, dans la lumière d’une baie vitrée"
				>
					<p>
						Le rôle d’un <strong>dirigeant d’entreprise</strong> est souvent comparé à celui d’un chef
						d’orchestre, orchestrant les talents et compétences au sein de son organisation. Cependant, malgré
						l’entourage et le soutien des collaborateurs, le dirigeant peut <strong>se sentir isolé</strong> face
						aux défis stratégiques, aux pressions et aux incertitudes.
					</p>
					<p>
						Que ce soit dans le cadre d’une nouvelle nomination, la gestion de situations complexes, ou la prise
						de décisions critiques, il est essentiel pour un dirigeant de{' '}
						<strong>disposer des ressources nécessaires pour surmonter ces défis</strong>.
					</p>
					<p>
						Un coach professionnel spécialisé dans l’accompagnement et le développement peut jouer un rôle clé en
						offrant un <strong>soutien sur mesure</strong> pour atteindre les objectifs fixés tout en gérant les
						problématiques opérationnelles quotidiennes.
					</p>
					<p>
						Chez Métaphore Coaching, nous nous engageons à établir un{' '}
						<strong>climat de confiance et de sérénité,</strong> pour vous guider vers des résultats efficaces et
						personnalisés.
					</p>
				</Story>
				<div className="subsection">
					<h3 className="situation-title">Les points clés du coaching de dirigeant</h3>
					<NumberedList items={LEADER_POINTS} />
				</div>
			</Section>

			<Section
				tone="cream"
				title="Coaching collectif."
				note={
					<Scribble tone="sky">
						Envie de créer de la <mark>cohésion</mark> ou d’en retrouver ?
					</Scribble>
				}
				intro={
					<p>
						Club de sport, association, fédération, troupe de théâtre…{' '}
						<strong>Le coaching d’équipe peut vous aider !</strong>
					</p>
				}
			>
				<Prose>
					<p>
						L’efficacité d’une équipe dépend de la synergie entre les talents individuels de ses membres et de
						leur capacité collective à opérer de manière efficiente et coordonnée. Le coaching d’équipe, à
						l’instar du coaching individuel, joue un rôle crucial en intégrant la préparation mentale pour
						renforcer l’unité du groupe et réaliser les objectifs fixés.
					</p>
				</Prose>
				<div className="subsection">
					<Scribble>
						Augmentez les performances de votre équipe grâce à des individus <mark>épanouis</mark>
					</Scribble>
					<h3 className="situation-title">Les objectifs d’un coaching d’équipe</h3>
					<CheckList items={TEAM_GOALS} />
				</div>
				<Prose>
					<p>
						Un vrai travail d’équipe repose sur la volonté de ses membres de mettre en commun leurs talents
						individuels au profit du collectif. L’accompagnement est bien sûr adapté à la situation, aux enjeux
						et aux objectifs. C’est pourquoi un coaching d’équipe s’inscrit dans la durée et se déroule en
						plusieurs phases de montée en puissance.
					</p>
				</Prose>
				<div className="subsection">
					<h3 className="situation-title">Déroulement d’un coaching d’équipe</h3>
					<Steps steps={TEAM_STEPS} />
				</div>
				<Prose>
					<p>
						Les entretiens de débriefing sont une part essentielle de la réussite ! Ils entretiennent la
						motivation. C’est en revenant à ces objectifs régulièrement que l’on arrive à garder la motivation et
						à les atteindre.
					</p>
				</Prose>
			</Section>

			<Section
				title="Une approche centrée sur le travail réel."
				intro={
					<p>
						L’objectif n’est pas de faire porter aux individus la responsabilité de difficultés qui peuvent
						aussi être organisationnelles.
					</p>
				}
			>
				<Story
					title="Partir du travail réel."
					image="/photos/christophe-portrait-entreprise.webp"
					imageAlt="Portrait de Christophe Jacques en veste grise devant un immeuble de bureaux"
				>
					<p>
						Les difficultés peuvent aussi être organisationnelles. L’accompagnement tient compte du contexte et
						des contraintes du collectif.
					</p>
					<p>
						Plus de dix ans d’expérience dans l’enseignement et l’animation de groupes nourrissent mon écoute et
						ma manière de soutenir la coopération.
					</p>
					<p>
						Mon master en sciences de l’éducation m’a aussi permis d’acquérir une connaissance sociologique
						solide, notamment en dynamique de groupe, que mon parcours de metteur en scène m’a permis de
						développer.
					</p>
				</Story>
				<Notice title="Les limites de l’intervention">
					<p>
						Métaphore Coaching n’a pas vocation à se substituer au service de prévention et de santé au
						travail, aux professionnels de santé, aux représentants du personnel ou aux spécialistes de
						l’évaluation réglementaire des risques. Lorsque la situation nécessite une expertise médicale,
						psychologique, juridique ou réglementaire, l’intervention s’inscrit en complémentarité avec les
						professionnels concernés.
					</p>
				</Notice>
			</Section>

			<CtaBand
				title="Demander un devis."
				actions={
					<>
						<ButtonLink href={QUOTE.href}>{QUOTE.label}</ButtonLink>
						<ButtonLink href={CTA.booking.href} variant="text">
							{CTA.booking.label}
						</ButtonLink>
					</>
				}
			>
				<p>
					Vous souhaitez organiser un accompagnement collectif, un atelier ou une intervention au sein de votre
					organisation ? Nous échangeons sur vos besoins, vos objectifs et le public concerné afin de construire
					une proposition adaptée. Un devis personnalisé vous est adressé en fonction du contenu, de la durée et
					des modalités de l’intervention.
				</p>
			</CtaBand>
			<RelatedLinks
				links={[
					{ label: 'Mon parcours', href: '/qui-suis-je' },
					{ label: 'Déontologie', href: '/deontologie' },
				]}
			/>
		</>
	);
}
