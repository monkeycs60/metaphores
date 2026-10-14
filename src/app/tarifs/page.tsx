import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { ButtonLink, CtaBand, Notice, PageHero, Section } from '@/components/v2/ui';
import { CTA } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Tarifs',
	description:
		'Tarifs des séances de coaching à Bordeaux et à distance : 65 € la séance individuelle, la bulle de coaching de 25 minutes à 35 €, interventions en entreprise sur devis.',
	alternates: { canonical: '/tarifs' },
};

export default function TarifsPage() {
	return (
		<>
			<PageHero
				title="Tarifs."
				subtitle="Bordeaux & à distance"
				image="/photos/carte-bilan-carriere.webp"
				imageAlt="Un homme prend des notes dans un carnet, assis à une table en bois"
				imagePosition="50% 35%"
			/>

			<Section tone="cream">
				<div className="price-cards">
					<article className="price-card price-card-main">
						<h2>Coaching individuel</h2>
						<p className="price-amount">
							65 €<span> la séance</span>
						</p>
						<p>
							Ce tarif s’applique à l’ensemble des accompagnements individuels : coaching personnel, coaching
							professionnel, bilan de carrière, transition professionnelle, ainsi qu’aux accompagnements des
							jeunes, des parents et des enseignants.
						</p>
						<p>
							Le nombre et le rythme des séances sont définis ensemble, en fonction de votre situation et de vos
							objectifs. Les séances sont facturées à l’unité.
						</p>
						<p>Les accompagnements sont proposés à Bordeaux ou à distance.</p>
						<ButtonLink href={CTA.booking.href}>{CTA.booking.label}</ButtonLink>
					</article>

					<article className="price-card price-card-bubble">
						<h2>La bulle de coaching</h2>
						<p className="price-amount">
							35 €<span> · 25 minutes</span>
						</p>
						<p>
							Si vous souhaitez une intervention éclair et très ciblée, ou simplement établir un premier contact
							avec votre accompagnant.
						</p>
						<ul>
							{['Coaching express', 'Changer de perspective', 'Identifier une problématique'].map((item) => (
								<li key={item}>
									<Check size={16} aria-hidden />
									{item}
								</li>
							))}
						</ul>
						<ButtonLink href={CTA.booking.href} variant="outline">
							{CTA.booking.label}
						</ButtonLink>
					</article>

					<article className="price-card">
						<h2>Groupes, entreprises et organisations</h2>
						<p className="price-amount">Sur devis</p>
						<p>
							Vous souhaitez organiser un accompagnement collectif, un atelier ou une intervention au sein de
							votre organisation ?
						</p>
						<p>
							Nous échangeons sur vos besoins, vos objectifs et le public concerné afin de construire une
							proposition adaptée. Un devis personnalisé vous est adressé en fonction du contenu, de la durée et
							des modalités de l’intervention.
						</p>
						<ButtonLink href="/contact?motif=entreprise" variant="outline">
							Demander un devis
						</ButtonLink>
					</article>
				</div>
			</Section>

			<Section>
				<Notice title="Tarifs spéciaux">
					<p>Nous appliquons des tarifs spéciaux pour les étudiants, les demandeurs d’emploi.</p>
					<p>
						<strong>Coaching solidaire :</strong> gratuité pour les publics en grande difficulté financière.
					</p>
				</Notice>
			</Section>

			<CtaBand title="Vous souhaitez en parler ?" actions={<ButtonLink href="/contact">Me contacter</ButtonLink>}>
				<p>
					Vous pouvez me contacter pour présenter votre situation ou votre projet et identifier l’accompagnement
					adapté.
				</p>
			</CtaBand>
		</>
	);
}
