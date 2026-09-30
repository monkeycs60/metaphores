import type { Metadata } from 'next';
import { Check, MessageCircle, ShieldCheck, UserCheck, Users } from 'lucide-react';
import { Notice, PageHero, RelatedLinks, Section, Story } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { CTA } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Coaching entreprise, prévention RPS et QVCT à Bordeaux',
	description:
		'Coaching de managers, équipes sous tension, ateliers de prévention RPS & QVCT et espaces de parole pour les entreprises et organisations de la région bordelaise.',
	alternates: { canonical: '/entreprises-rps-qvct' },
};
const FORMATS = [
	{
		icon: UserCheck,
		title: 'Accompagner les managers',
		text: 'Prendre du recul sur son rôle, ses décisions et sa manière de communiquer.',
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
		items: [
			'Groupes de 6 à 12 personnes',
			'Séances de 1 h 30 à 2 h',
			'Intervention ponctuelle ou cycle régulier',
		],
	},
];
export default function EntreprisesPage() {
	return (
		<>
			<PageHero
				title="Remettre du dialogue dans le travail."
				subtitle="Entreprises & organisations · Bordeaux et région"
				split
				image="/photos/entreprises.webp"
				imageAlt="Une équipe échange en cercle, dans un espace de travail lumineux"
				actions={<HeroActions primary={CTA.business} />}
			>
				<p>
					Prévenir les tensions, soutenir les managers et créer des espaces de recul, de dialogue et d’action.
				</p>
			</PageHero>
			<Section
				title="Quatre formats, un cadre sur mesure."
				intro={<p>Chaque intervention est construite avec vous et fait l’objet d’un devis.</p>}
			>
				<div className="formats">
					{FORMATS.map((format) => (
						<article className="format" key={format.title}>
							<format.icon size={36} strokeWidth={1.2} aria-hidden />
							<h3>{format.title}</h3>
							<p>{format.text}</p>
							<ul>
								{format.items.map((item) => (
									<li key={item}>
										<Check size={15} aria-hidden />
										{item}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</Section>
			<Section tone="cream">
				<Story
					title="Partir du travail réel."
					image="/photos/entreprises-atelier.webp"
					imageAlt="Un atelier d’équipe devant un tableau couvert de notes"
				>
					<p>
						Les difficultés peuvent aussi être organisationnelles. L’accompagnement tient compte du contexte
						et des contraintes du collectif.
					</p>
					<p>
						Plus de dix ans d’expérience dans l’enseignement et l’animation de groupes nourrissent mon écoute
						et ma manière de soutenir la coopération.
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
			<ContactBand
				title="Parlons de votre organisation."
				text="Présentez-moi votre contexte. Nous verrons ensemble quel format d’intervention peut être pertinent."
				primary={CTA.business}
			/>
			<RelatedLinks
				links={[
					{ label: 'Mon parcours', href: '/qui-suis-je' },
					{ label: 'Déontologie', href: '/deontologie' },
				]}
			/>
		</>
	);
}
