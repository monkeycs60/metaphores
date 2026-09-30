import { testimoniesList } from '@/lib/testimoniesList';
import { CTA } from '@/lib/site';
import { ButtonLink, CtaBand, Principles } from './ui';

export const FRAME_PRINCIPLES = [
	{ icon: '/lock.svg', title: 'Confidentialité', text: 'Vos échanges restent confidentiels.' },
	{ icon: '/loupe.svg', title: 'Transparence', text: 'Un cadre et des objectifs explicites.' },
	{ icon: '/dove.svg', title: 'Liberté', text: 'Vous restez maître de vos décisions.' },
	{ icon: '/balance.svg', title: 'Équilibre', text: 'Un changement qui respecte votre vie.' },
];

export function FramePrinciples() {
	return <Principles items={FRAME_PRINCIPLES} />;
}

const EXCERPTS = [
	'D’une grande capacité d’écoute, il est doté d’une sensibilité lui permettant de créer une relation d’accompagnement',
	"ce coaching m'a appris à trouver mes propres réponses, à changer ma perception des situations, des gens et de ma vie.",
	'Une précieuse aide pour entamer une nouvelle année avec un nouveau projet de vie ! Merci à lui.',
];

export function Testimonies() {
	return (
		<ul className="testimonies">
			{testimoniesList.map((testimony, i) => (
				<li key={testimony.author}>
					<span className="quote-mark" aria-hidden>
						“
					</span>
					<blockquote>
						{i < 2 && '… '}
						{EXCERPTS[i]}
						{i === 0 && '…'}
					</blockquote>
					<p className="testimony-author">
						{testimony.author}
						<span>{testimony.position}</span>
					</p>
					{i < 2 && (
						<details className="testimony-full">
							<summary>Lire le témoignage complet</summary>
							<p>{testimony.text}</p>
						</details>
					)}
				</li>
			))}
		</ul>
	);
}

export function ContactBand({
	title = 'Et si nous faisions le point ?',
	text = 'Un premier échange gratuit de 30 minutes, pour parler de ce qui vous amène.',
	primary = CTA.primary,
}: {
	title?: string;
	text?: string;
	primary?: { label: string; href: string };
}) {
	return (
		<CtaBand
			title={title}
			actions={
				<>
					<ButtonLink href={CTA.booking.href}>{CTA.booking.label}</ButtonLink>
					<ButtonLink href={primary.href} variant="text">
						{primary.label}
					</ButtonLink>
				</>
			}
		>
			<p>{text}</p>
		</CtaBand>
	);
}

export function HeroActions({ primary = CTA.primary }: { primary?: { label: string; href: string } }) {
	return (
		<>
			<ButtonLink href={primary.href}>{primary.label}</ButtonLink>
			<ButtonLink href={CTA.booking.href} variant="text">
				{CTA.booking.label}
			</ButtonLink>
		</>
	);
}
