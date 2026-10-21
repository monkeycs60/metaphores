import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, MapPin, Trees, Video } from 'lucide-react';
import { ButtonLink, CtaBand, Notice, PageHero, Section } from '@/components/v2/ui';
import { WalkCoaching } from '@/components/v2/blocks';
import { CTA } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Tarifs',
	description:
		'Tarifs des séances de coaching à Bordeaux et à distance : 65 € la séance d’environ une heure, la bulle de coaching de 25 minutes à 35 €, interventions en entreprise sur devis.',
	alternates: { canonical: '/tarifs' },
};

export default function TarifsPage() {
	return (
		<>
			<PageHero
				title="Tarifs"
				subtitle="Bordeaux & à distance"
				image="/photos/tarifs-tournesols.webp"
				imageAlt="Une femme lève les bras en riant au milieu d’un champ de tournesols"
				imagePosition="center 44%"
			>
				<ul className="hero-places">
					<li>
						<MapPin size={20} aria-hidden />
						Espace Beaulieu, Bordeaux
					</li>
					<li>
						<Trees size={20} aria-hidden />
						Coaching en marchant, en forêt
					</li>
					<li>
						<Video size={20} aria-hidden />À distance, en visioconférence
					</li>
				</ul>
			</PageHero>

			<Section tone="cream">
				<div className="price-stack">
					<article className="price-main">
						<p className="price-amount price-amount-lead">
							65&nbsp;€<span> la séance (environ 1&nbsp;h)</span>
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
						<ButtonLink href={CTA.booking.href}>{CTA.booking.label}</ButtonLink>
					</article>

					<article className="price-quote">
						<h2>Organisations, entreprises et groupes : sur devis</h2>
						<p>
							Vous souhaitez organiser un accompagnement collectif, un atelier ou une intervention au sein de
							votre organisation ? Nous échangeons sur vos besoins, vos objectifs et le public concerné afin de
							construire une proposition adaptée. Un devis personnalisé vous est adressé en fonction du contenu,
							de la durée et des modalités de l’intervention.
						</p>
						<ButtonLink href={CTA.quote.href} variant="outline">
							{CTA.quote.label}
						</ButtonLink>
					</article>

					<article className="price-bubble">
						<div className="price-bubble-copy">
							<h2>La bulle de coaching</h2>
							<p className="price-amount">
								35&nbsp;€<span> · 25&nbsp;minutes</span>
							</p>
							<p>
								Si vous souhaitez une intervention éclair et très ciblée, ou simplement établir un premier
								contact avec votre accompagnant.
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
						</div>
						<div className="price-bubble-deco" aria-hidden>
							<Image src="/bulle.svg" alt="" width={106} height={102} />
							<Image src="/bulle.svg" alt="" width={106} height={102} />
							<Image src="/bulle.svg" alt="" width={106} height={102} />
						</div>
					</article>
				</div>
			</Section>

			<Section>
				<WalkCoaching />
			</Section>

			<Section tone="cream">
				<Notice title="Tarifs spéciaux">
					<p>
						Tarifs spéciaux pour les étudiants et les demandeurs d’emploi. <Link href="/contact">Me contacter</Link>{' '}
						pour en savoir plus.
					</p>
					<p>
						<strong>Coaching solidaire :</strong> vous n’avez pas les moyens mais vous souhaitez faire un
						coaching ? L’argent ne devant pas être une barrière à l’accès à des services, nous pouvons en discuter
						et trouver une solution qui vous conviendra.
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
