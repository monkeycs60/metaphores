import Image from 'next/image';
import type { Metadata } from 'next';
import { ButtonLink, CheckList, PageHero, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Qui suis-je ? Christophe Jacques, coach professionnel',
	description:
		'Enseignant en technologie pendant plus de dix ans, reconverti après l’immobilier et l’aéronautique : le parcours et la manière de travailler de Christophe Jacques, coach à Bordeaux.',
	alternates: { canonical: '/qui-suis-je' },
};
const PATH = [
	{
		title: 'Changer de voie',
		text: 'Immobilier, puis aéronautique : plusieurs reconversions et l’expérience concrète du changement.',
	},
	{
		title: 'Transmettre',
		text: 'Plus de dix ans comme enseignant en technologie, à accompagner des jeunes et animer des groupes.',
	},
	{
		title: 'Accompagner',
		text: 'Une formation au coaching et au développement professionnel, pour questionner sans imposer de réponse.',
	},
];
export default function QuiSuisJePage() {
	return (
		<>
			<PageHero
				title="Un parcours qui n’a pas suivi une ligne droite."
				subtitle="Christophe Jacques · Coach professionnel à Bordeaux"
				media={
					<Image
						src="/chris-profile-light.webp"
						alt="Christophe Jacques, souriant, un carnet à la main"
						width={365}
						height={500}
						priority
						sizes="(min-width: 900px) 45vw, 100vw"
						className="hero-photo portrait-photo"
					/>
				}
				actions={<HeroActions />}
			>
				<p>
					Des expériences, des reconversions, dix ans dans l’enseignement. Ce chemin nourrit aujourd’hui ma
					façon de vous accompagner.
				</p>
			</PageHero>
			<Section tone="cream" title="Apprendre. Transmettre. Accompagner.">
				<ol className="path">
					{PATH.map((step) => (
						<li key={step.title}>
							<h3>{step.title}</h3>
							<p>{step.text}</p>
						</li>
					))}
				</ol>
				<p className="editorial-prose">
					Je sais ce que les périodes de changement peuvent soulever : des doutes, des contraintes, mais aussi
					des ressources qu’on ne voit pas encore. Mon rôle est de vous aider à les reconnaître et à
					construire une direction qui vous correspond.
				</p>
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
