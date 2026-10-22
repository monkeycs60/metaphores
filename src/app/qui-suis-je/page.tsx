import Image from 'next/image';
import type { Metadata } from 'next';
import {
	Book,
	Briefcase,
	Compass,
	Drama,
	Flag,
	Globe,
	GraduationCap,
	Image as Painting,
	PersonStanding,
	Pyramid,
	School,
	Sprout,
	Target,
	Trophy,
	Wrench,
} from 'lucide-react';
import { ButtonLink, CheckList, PageHero, Prose, Section, Story } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import ParcoursMap from '@/components/v2/ParcoursMap';
import { Scribble } from '@/components/v2/deco';

export const metadata: Metadata = {
	title: { absolute: 'Christophe Jacques | Coach professionnel à Bordeaux | Métaphore Coaching' },
	description:
		'Découvrez le parcours et l’approche de Christophe Jacques, coach professionnel à Bordeaux : enseignement, sciences de l’éducation, reconversions et accompagnement du changement.',
	alternates: { canonical: '/qui-suis-je' },
};

const EXPERIENCES = [
	{ icon: Wrench, text: 'Formation en ingénierie et mécanique.' },
	{ icon: Globe, text: 'Vie à l’étranger : Angleterre, Australie, Inde, et plus.' },
	{ icon: Briefcase, text: 'Multiples métiers : commercial, ingénieur, commerçant…' },
	{ icon: Book, text: 'Enseignant depuis une dizaine d’années.' },
	{ icon: School, text: '5 ans CPE en collège.' },
	{ icon: PersonStanding, text: 'Professeur de yoga.' },
	{ icon: Drama, text: 'Comédien professionnel ayant écrit et mis en scène plusieurs pièces.' },
	{ icon: Trophy, text: 'Sportif ayant fait de la compétition en football, handball, et beach-volley.' },
	{
		icon: GraduationCap,
		text: 'Reprise d’études en sciences de l’éducation et en coaching : un master en sciences de l’éducation, qui m’a permis d’acquérir de solides connaissances des concepts de psychologie et de sociologie.',
	},
];

const WAYS = [
	{ icon: Compass, text: 'Partir de votre réalité plutôt que d’un modèle préconçu' },
	{ icon: Painting, text: 'Créer un cadre accueillant et de confiance' },
	{ icon: Target, text: 'Questionner avec précision sans imposer de réponse' },
	{ icon: Pyramid, text: 'Prendre en compte vos particularités et besoins' },
	{ icon: Sprout, text: 'Chercher l’autonomie plutôt que la dépendance' },
	{
		icon: Flag,
		text: 'Savoir reconnaître les limites de mon accompagnement et orienter vers d’autres professionnels lorsque nécessaire',
	},
];

export default function QuiSuisJePage() {
	return (
		<>
			<PageHero
				title="Un parcours fait d’apprentissage, de transmission et de changement"
				subtitle="Christophe Jacques · Coach professionnel à Bordeaux"
				media={
					<div className="portrait-stage">
						<Image
							src="/photos/christophe-veste-jaune-mur.webp"
							alt="Christophe Jacques, de face, veste jaune, sourit devant un mur bleu nuit"
							width={1066}
							height={1600}
							priority
							quality={90}
							sizes="340px"
						/>
						<Scribble tone="ink" className="portrait-note">
							Celui qui sait demander est <mark>libre</mark>
						</Scribble>
					</div>
				}
				actions={<HeroActions />}
			>
				<p>
					Mon parcours professionnel ne s’est pas construit en ligne droite. Il s’est construit par expériences,
					questionnements, réussites, échecs, reprise d’études, doutes, réajustements et évolution. Cela me
					permet aujourd’hui de faire des choses que j’aime vraiment et de vous accompagner au mieux dans vos
					besoins.
				</p>
			</PageHero>

			<Section>
				<div className="hello">
					<div className="hello-copy">
						<h2>Enchanté, moi c’est Christophe !</h2>
						<Prose>
							<p>
								Bien choisir son accompagnant.e, c’est important. Voici mon portrait, pour apprendre à me
								connaître un peu plus.
							</p>
							<p>Vous trouverez ce qui m’a conduit à l’accompagnement, et à créer Métaphore coaching.</p>
						</Prose>
					</div>
					<p className="hello-signature">
						<strong>Christophe JACQUES</strong>
						<span>Master en coaching et développement professionnel</span>
						<span>Master en sciences de l’éducation</span>
					</p>
				</div>
			</Section>

			<Section tone="cream" title="Mon parcours">
				<div className="path-grid">
					<div className="path-copy">
						<Prose>
							<p>
								J’ai évolué dans diverses sphères privées (aéronautique, immobilier, théâtre…), avant de
								m’orienter vers l’enseignement depuis quelques années.
							</p>
							<p>
								La vie, pour moi, est une spirale faite de différents cycles, avec le coaching comme dernier
								virage. Mon expérience est riche et variée :
							</p>
						</Prose>
						<ul className="topic-list topic-single path-list">
							{EXPERIENCES.map((item) => (
								<li key={item.text}>
									<item.icon size={26} strokeWidth={1.35} aria-hidden />
									<span>{item.text}</span>
								</li>
							))}
						</ul>
					</div>
					<div className="path-image">
						<ParcoursMap />
					</div>
				</div>
			</Section>

			<Section>
				<Story
					title="Ma découverte du coaching"
					image="/chess-miror.png"
					imageAlt="Un pion d’échecs se reflète en roi dans un miroir"
				>
					<p>
						L’accompagnement est plus qu’un métier, c’est un sacerdoce pour moi. Bien que j’aie mis du temps à le
						mettre en œuvre officiellement, il a toujours été omniprésent dans mes activités professionnelles et
						personnelles.
					</p>
					<p>
						À l’écoute et accueillant, je m’efforce avec délicatesse, humour et dynamisme d’être efficace dans mes
						accompagnements.
					</p>
					<p>
						Les métaphores sont des outils que j’utilise fréquemment pour aider mes clients à{' '}
						<strong>changer d’univers</strong> et à visualiser leurs idéaux. À l’image d’un metteur en scène, je
						vous aiderai à reprendre le contrôle <strong>du rôle principal de votre vie,</strong> vous assurant
						d’être au centre de cette transformation.
					</p>
				</Story>
			</Section>

			<Section tone="blue">
				<Story
					title="La métaphore dans le coaching"
					image="/photos/montgolfieres.webp"
					imageAlt="Des montgolfières s’élèvent dans la lumière dorée d’un lever de soleil"
					imagePosition="55% center"
					reverse
				>
					<p>
						Notre cerveau fonctionne par images, et les métaphores que nous utilisons reflètent{' '}
						<strong>notre perception du monde.</strong> J’ai découvert la puissance des métaphores pendant ma
						formation et j’ai vu leurs effets positifs sur ceux que j’accompagne. Cet outil est au cœur de mon
						approche.
					</p>
					<p>
						<strong>Mon grand-père,</strong> un éminent professeur de grec ancien qui chérissait{' '}
						<strong>« Le Petit Prince »,</strong> m’a transmis cette passion. Je crois que les choses
						essentielles ne sont pas toujours évidentes à mettre en évidence. À travers le coaching, je
						souhaite <strong>vous aider à voir au-delà du visible,</strong> à découvrir le sens profond dans
						votre parcours de vie pour vous permettre de vous révéler pleinement.
					</p>
				</Story>
			</Section>

			<Section title="Ma manière de travailler">
				<CheckList items={WAYS} />
				<ButtonLink href="/deontologie" variant="text">
					Découvrir ma déontologie
				</ButtonLink>
			</Section>
			<ContactBand />
		</>
	);
}
