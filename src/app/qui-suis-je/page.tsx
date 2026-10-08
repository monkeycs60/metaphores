import Image from 'next/image';
import type { Metadata } from 'next';
import { ButtonLink, CheckList, PageHero, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { Scribble } from '@/components/v2/deco';

export const metadata: Metadata = {
	title: { absolute: 'Christophe Jacques | Coach professionnel à Bordeaux | Métaphore Coaching' },
	description:
		'Découvrez le parcours et l’approche de Christophe Jacques, coach professionnel à Bordeaux : enseignement, reconversions et accompagnement du changement.',
	alternates: { canonical: '/qui-suis-je' },
};
const PATH: { when: string; title: string; text: string; image: string; alt: string; position?: string }[] = [
	{
		when: 'D’abord',
		title: 'Changer de voie',
		text: 'Immobilier, puis aéronautique : plusieurs reconversions et l’expérience concrète du changement.',
		image: '/photos/aile-avion.webp',
		alt: 'L’aile d’un avion au-dessus des nuages, dans un ciel bleu',
	},
	{
		when: 'Dix ans',
		title: 'Transmettre',
		text: 'Plus de dix ans comme enseignant en technologie, à accompagner des jeunes et animer des groupes.',
		image: '/photos/avion-papier.webp',
		alt: 'Une main s’apprête à lancer un avion en papier vers le ciel',
	},
	{
		when: 'Aujourd’hui',
		title: 'Accompagner',
		text: 'Une formation au coaching et au développement professionnel, pour questionner sans imposer de réponse.',
		image: '/photos/christophe-veste-jaune-mur.webp',
		alt: 'Christophe Jacques, veste jaune, sourit devant un mur bleu nuit',
		position: '50% 4%',
	},
];
export default function QuiSuisJePage() {
	return (
		<>
			<PageHero
				title="Un parcours qui n’a pas suivi une ligne droite."
				subtitle="Christophe Jacques · Coach professionnel à Bordeaux"
				media={
					<div className="portrait-stage">
						<Image
							src="/photos/christophe-sourire.webp"
							alt="Christophe Jacques, en veste grise, sourit dans une cour arborée"
							width={1066}
							height={1600}
							priority
							quality={88}
							sizes="340px"
						/>
						<Scribble tone="ink" className="portrait-note">
							Un chemin fait de <mark>détours</mark>
						</Scribble>
					</div>
				}
				actions={<HeroActions />}
			>
				<p>
					Des expériences, des reconversions, dix ans dans l’enseignement. Ce chemin nourrit aujourd’hui ma
					façon de vous accompagner.
				</p>
			</PageHero>
			<Section tone="cream" title="Apprendre. Transmettre. Accompagner.">
				<ol className="journey">
					{PATH.map((step) => (
						<li key={step.title}>
							<div className="journey-photo">
								<Image
									src={step.image}
									alt={step.alt}
									width={720}
									height={576}
									quality={88}
									sizes="(min-width: 900px) 40vw, 100vw"
									style={step.position ? { objectPosition: step.position } : undefined}
								/>
							</div>
							<div className="journey-copy">
								<Scribble tone="sky">{step.when}</Scribble>
								<h3>{step.title}</h3>
								<p>{step.text}</p>
							</div>
						</li>
					))}
				</ol>
				<figure className="journey-quote">
					<blockquote>
						Je sais ce que les périodes de changement peuvent soulever : des doutes, des contraintes, mais aussi
						des ressources qu’on ne voit pas encore. Mon rôle est de vous aider à les reconnaître et à
						construire une direction qui vous correspond.
					</blockquote>
					<figcaption>
						<Scribble>Christophe</Scribble>
					</figcaption>
				</figure>
			</Section>
			<Section title="Ma manière de travailler.">
				<CheckList
					items={[
						'Partir de votre réalité',
						'Créer un cadre de confiance',
						'Questionner sans imposer de réponse',
						'Tenir compte de vos contraintes',
						'Chercher votre autonomie',
						'Reconnaître les limites du coaching',
					]}
				/>
				<ButtonLink href="/deontologie" variant="text">
					Découvrir ma déontologie
				</ButtonLink>
			</Section>
			<ContactBand />
		</>
	);
}
