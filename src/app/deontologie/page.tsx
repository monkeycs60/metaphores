import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Éthique et déontologie',
	description:
		'Confidentialité, transparence, liberté, écologie intérieure : le cadre déontologique des accompagnements Métaphore Coaching.',
	alternates: { canonical: '/deontologie' },
};

const PILLARS = [
	{
		icon: '/lock.svg',
		title: 'Confidentialité',
		text: 'Aussi bien sur l’identité que sur le contenu des échanges. En tant que coach je suis tenu au secret professionnel et garde strictement confidentiels le contenu et l’identité de la personne accompagnée.',
	},
	{
		icon: '/loupe.svg',
		title: 'Transparence',
		text: 'Tout sera pleinement exposé et explicité pour garantir un sentiment de sécurité et de tranquillité.',
	},
	{
		icon: '/dove.svg',
		title: 'Liberté',
		text: 'Vous aurez le choix plein et entier à tout moment de vos actions pour vous garantir une parfaite autonomie et vous laisser la responsabilité de vos décisions.',
	},
	{
		icon: '/balance.svg',
		title: 'Écologie intérieure',
		text: 'L’écologie intérieure c’est-à-dire votre équilibre de vie. C’est peut-être le plus essentiel. Nous ferons extrêmement attention à ce que la démarche soit inscrite dans ce cadre afin de vous permettre de ressortir plus apaisé.',
	},
];

export default function DeontologiePage() {
	return (
		<>
			<PageHero
				title="Éthique et déontologie."
				subtitle="Le coaching · Déontologie"
				media={
					<div className="emcc-stage">
						<Image
							src="/emcc.png"
							alt="EMCC, association de professionnels de l’accompagnement"
							width={1181}
							height={762}
							priority
						/>
					</div>
				}
			>
				<p>
					<em>Métaphore coaching adhère et respecte les chartes déontologiques de la profession (type EMCC).</em>
				</p>
			</PageHero>
			<Section tone="cream" title="Les 4 points suivants sont fondamentaux à nos yeux.">
				<ol className="pillars">
					{PILLARS.map((pillar, i) => (
						<li key={pillar.title}>
							<Image src={pillar.icon} alt="" width={44} height={44} />
							<div>
								<h3>
									{i + 1}. {pillar.title}
								</h3>
								<p>{pillar.text}</p>
							</div>
						</li>
					))}
				</ol>
				<Image
					src="/handshake.png"
					alt="Deux mains se serrent en signe de confiance"
					width={400}
					height={305}
					className="pillars-image"
				/>
			</Section>
			<ContactBand />
			<RelatedLinks
				links={[
					{ label: 'C’est quoi le coaching ?', href: '/coaching/origines' },
					{ label: 'Ma vision du coaching', href: '/coaching/vision' },
					{ label: 'Coach ou psy ?', href: '/coaching/psy' },
				]}
			/>
		</>
	);
}
