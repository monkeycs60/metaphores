import type { Metadata } from 'next';
import { Notice, PageHero, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Tarifs et formules',
	description:
		'Tarifs des séances de coaching à Bordeaux et en visio : tarif horaire, formules sur plusieurs séances, coaching court et tarifs spéciaux.',
	alternates: { canonical: '/tarifs' },
};
const OFFERS = [
	['Laser', '3 heures', '60 €/h', 'Ressources et organisation'],
	['Pas de côté', '6 heures', '55 €/h', 'Confiance et équilibre'],
	['Parenthèse', '9 heures', '50 €/h', 'Estime de soi et évolution'],
	['Les bulles', '25 minutes', '35 €', 'Coaching express, ciblé'],
];
export default function TarifsPage() {
	return (
		<>
			<PageHero
				title="Un accompagnement à votre mesure."
				subtitle="Tarifs & formules"
				image="/photos/bilan-carriere.webp"
				imageAlt="Un carnet marqué d’une rose des vents, pour faire le point"
				actions={<HeroActions />}
			>
				<p>
					Des séances individuelles et des formules adaptées à votre situation. Les interventions en
					entreprise font l’objet d’un devis.
				</p>
			</PageHero>
			<Section tone="cream">
				<div className="price-lead">
					<strong>
						65 €<span className="text-xl"> / h</span>
					</strong>
					<p>
						Une séance dure environ une heure. Les tarifs sont dégressifs selon la durée de l’accompagnement.
					</p>
				</div>
			</Section>
			<Section title="Les formules.">
				<table className="price-table">
					<caption className="sr-only">Durées et tarifs des formules de coaching</caption>
					<thead>
						<tr>
							<th scope="col">Formule</th>
							<th scope="col">Durée</th>
							<th scope="col">Tarif</th>
							<th scope="col" className="hidden sm:table-cell">
								Pour travailler
							</th>
						</tr>
					</thead>
					<tbody>
						{OFFERS.map((offer) => (
							<tr key={offer[0]}>
								{offer.map((value, i) => (
									<td key={value} className={i === 3 ? 'hidden sm:table-cell' : undefined}>
										{value}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<Notice title="Tarifs adaptés & coaching solidaire">
					<p>
						Des tarifs spéciaux sont proposés aux étudiants et aux demandeurs d’emploi. Le coaching solidaire
						est gratuit pour les publics en grande difficulté financière. Parlons de votre situation.
					</p>
				</Notice>
			</Section>
			<ContactBand />
		</>
	);
}
