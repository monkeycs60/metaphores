import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { testimoniesList } from '@/lib/testimoniesList';
import { CTA } from '@/lib/site';
import { Scribble } from './deco';
import { ButtonLink, CtaBand, Principles } from './ui';

type Prompt = { question?: string; label: string; href: string };

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

export function ContactPrompt({ question, label, href }: Prompt) {
	return (
		<p className="contact-prompt">
			{question && <span>{question}</span>}
			<Link href={href}>
				{label}
				<ArrowRight size={18} aria-hidden />
			</Link>
		</p>
	);
}

export function ContactBand({
	title = 'Et si nous faisions le point ?',
	text = 'Vous n’avez pas besoin d’avoir déjà tout clarifié pour me contacter.',
	contact = CTA.contact,
}: {
	title?: string;
	text?: string;
	contact?: Prompt;
}) {
	return (
		<CtaBand title={title} actions={<HeroActions contact={contact} />}>
			<p>{text}</p>
		</CtaBand>
	);
}

export function HeroActions({ contact = CTA.contact }: { contact?: Prompt }) {
	return (
		<>
			<ButtonLink href={CTA.booking.href}>{CTA.booking.label}</ButtonLink>
			<ContactPrompt {...contact} />
		</>
	);
}

const WALK = [
	{
		title: 'Déambuler au rythme de ses pensées.',
		text: 'Le fait de voir les choses bouger aide l’esprit à changer.',
	},
	{
		title: 'Retrouver son équilibre',
		text: 'Le déséquilibre permanent de la marche aide l’esprit à sortir de ses blocages.',
	},
	{
		title: 'Trouver un nouveau chemin',
		text: 'La profondeur de vue permet de découvrir de nouveaux horizons.',
	},
];

export function WalkCoaching() {
	return (
		<div className="story walk-story">
			<div className="story-image">
				<Image
					src="/forest.jpg"
					alt="Des chaussures de marche avancent sur un sentier couvert de feuilles d’automne"
					width={1920}
					height={1280}
					quality={85}
					sizes="(min-width: 900px) 45vw, 100vw"
				/>
			</div>
			<div className="story-copy">
				<Scribble tone="sky">
					Mettre son esprit en <mark>mouvement</mark>
				</Scribble>
				<h2>Coaching en marchant</h2>
				<p className="walk-format">
					<strong>Le cheminement</strong> · 60 minutes
				</p>
				<ul className="walk-list">
					{WALK.map((item) => (
						<li key={item.title}>
							<Check size={16} aria-hidden />
							<span>
								<strong>{item.title}</strong>
								{item.text}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
