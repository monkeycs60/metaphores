import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero, Prose, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Ma vision du coaching',
	description:
		'Bienveillance, écoute, précision, concret, métaphores : les sept principes qui guident les accompagnements de Christophe Jacques, coach à Bordeaux.',
	alternates: { canonical: '/coaching/vision' },
};

const PRINCIPLES = [
	{
		title: 'Bienveillance & Écoute',
		icon: '/ecoute.svg',
		text: 'L’accueil et l’écoute sont centraux dans le coaching. Une écoute sans jugement, active, neutre et bienveillante ; pour vous aider à déposer et mieux rebondir.',
	},
	{
		title: 'Unique',
		icon: '/unique.svg',
		text: 'Chaque personne est différente ce qui fait que vos solutions sont uniques. Je ne les trouverai pas pour vous ! Par contre, je peux vous accompagner pour que vous les trouviez.',
	},
	{
		title: 'Droit au but',
		icon: '/direct.png',
		text: 'Actif, j’aime voir les choses avancer. Je suis un coach plutôt confrontant mais avec douceur et subtilité. À l’image d’une main de fer dans un gant de velours.',
	},
	{
		title: 'Chirurgical',
		icon: '/laser.svg',
		text: 'La précision est primordiale. Identifier et travailler sur une problématique demande à agir avec précision et à recentrer régulièrement pour offrir un accompagnement efficace et soigneux. À l’image d’un laser.',
	},
	{
		title: 'Concret',
		icon: '/strong.svg',
		text: 'Ancré dans la réalité. Votre démarche dépasse le cadre des entretiens et va se répercuter dans votre vie ; nous essayerons d’avancer pas à pas pour vous encourager à agir concrètement et atteindre vos objectifs.',
	},
	{
		title: 'Projection',
		icon: '/projection.svg',
		text: 'La métaphore est un outil puissant que j’utilise régulièrement. Il permet de sortir des méandres du mental. L’identification et l’utilisation de vos images et métaphores nous permettra de vous décentrer de votre problématique et de vous aider à entrevoir des solutions.',
	},
	{
		title: 'Cheminer',
		icon: '/pathway.svg',
		text: 'Nous créons ensemble un chemin personnalisé pour atteindre votre objectif final en prenant en compte votre univers personnel et vos images mentales.',
	},
];

export default function VisionPage() {
	return (
		<>
			<PageHero
				title="Ma vision."
				subtitle="Le coaching · Sept principes"
				image="/photos/pierres-gue.webp"
				imageAlt="Des pierres de gué tracent un passage à travers l’eau"
			>
				<p>
					Ma vision du coaching se nourrit à la fois de ma formation comme coach professionnel diplômé, de mes
					expériences personnelles et professionnelles. C’est pour cela qu’elle est à la fois unique et
					personnelle. Elle est aussi en constante évolution. Elle s’appuie sur 7 principes :
				</p>
			</PageHero>

			<Section tone="cream">
				<ol className="vision-cards">
					{PRINCIPLES.map((principle, i) => (
						<li key={principle.title}>
							<div className="vision-card-head">
								<span className="vision-number">{i + 1}.</span>
								<Image src={principle.icon} alt="" width={90} height={70} className="vision-icon" />
							</div>
							<h2>{principle.title}</h2>
							<Prose>
								<p>{principle.text}</p>
							</Prose>
						</li>
					))}
				</ol>
			</Section>

			<ContactBand />
			<RelatedLinks
				links={[
					{ label: 'C’est quoi le coaching ?', href: '/coaching/origines' },
					{ label: 'Coach ou psy ?', href: '/coaching/psy' },
					{ label: 'Qui suis-je ?', href: '/qui-suis-je' },
				]}
			/>
		</>
	);
}
