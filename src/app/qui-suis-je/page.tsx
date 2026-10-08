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
const PATH: {
	when: string;
	title: string;
	text: string;
	contribution: string;
	image: string;
	alt: string;
	position?: string;
}[] = [
	{
		when: 'D’abord',
		title: 'Changer de voie',
		text: 'Dans l’immobilier puis l’aéronautique, j’ai vécu plusieurs reconversions : changer de repères, m’adapter et faire le lien entre mes compétences et un nouveau métier.',
		contribution: 'Cette expérience nourrit le travail sur vos transitions : repérer ce que vous pouvez réutiliser, ce qui reste à explorer et les contraintes à prendre en compte.',
		image: '/photos/aile-avion.webp',
		alt: 'L’aile d’un avion au-dessus des nuages, dans un ciel bleu',
	},
	{
		when: 'Plus de dix ans',
		title: 'Transmettre',
		text: 'Enseigner la technologie pendant plus de dix ans m’a appris à accompagner des jeunes, à animer des groupes et à écouter ce qui se joue derrière une difficulté.',
		contribution: 'Avec un jeune, un parent ou un enseignant, cette connaissance du terrain aide à regarder au-delà des résultats : motivation, confiance, attentes et relations.',
		image: '/photos/avion-papier.webp',
		alt: 'Une main s’apprête à lancer un avion en papier vers le ciel',
	},
	{
		when: 'Aujourd’hui',
		title: 'Accompagner',
		text: 'Ma formation au coaching et au développement professionnel a donné un autre cadre à ce parcours : vous aider à réfléchir et à agir, en vous laissant décider.',
		contribution: 'En séance, nous clarifions ce qui compte, explorons les possibilités et définissons une prochaine étape concrète, à votre rythme.',
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
			<Section tone="cream" title="Ce que mon parcours apporte à votre accompagnement." className="journey-section">
				<ol className="journey">
					{PATH.map((step) => (
						<li key={step.title}>
							<div className="journey-photo">
								<Image
									src={step.image}
									alt={step.alt}
									width={720}
									height={400}
									quality={88}
									sizes="(min-width: 1200px) 360px, (min-width: 900px) 30vw, 96px"
									style={step.position ? { objectPosition: step.position } : undefined}
								/>
							</div>
							<div className="journey-copy">
								<Scribble tone="sky">{step.when}</Scribble>
								<h3>{step.title}</h3>
							</div>
							<div className="journey-detail">
								<p>{step.text}</p>
								<p>{step.contribution}</p>
							</div>
						</li>
					))}
				</ol>
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
