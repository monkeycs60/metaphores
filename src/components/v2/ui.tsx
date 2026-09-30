import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
	ArrowRight,
	Compass,
	Flag,
	Footprints,
	HeartHandshake,
	MessageCircle,
	Route,
	ShieldCheck,
	Sprout,
	Target,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function ButtonLink({
	href,
	children,
	variant = 'primary',
	className,
}: {
	href: string;
	children: ReactNode;
	variant?: 'primary' | 'outline' | 'text';
	className?: string;
}) {
	return (
		<Link href={href} className={cn('action', `action-${variant}`, className)}>
			{children}
			<ArrowRight size={18} aria-hidden />
		</Link>
	);
}

export function PageHero({
	title,
	subtitle,
	children,
	image,
	imageAlt = '',
	media,
	caption,
	actions,
	split = false,
}: {
	title: ReactNode;
	subtitle?: ReactNode;
	children?: ReactNode;
	image?: string;
	imageAlt?: string;
	media?: ReactNode;
	caption?: ReactNode;
	actions?: ReactNode;
	split?: boolean;
}) {
	return (
		<header className="page-hero">
			<div className="page-hero-inner">
				<div className="page-hero-copy">
					{subtitle && <p className="hero-context">{subtitle}</p>}
					<h1>{title}</h1>
					{children && <div className="hero-description">{children}</div>}
					{actions && <div className="hero-actions">{actions}</div>}
				</div>
				<figure className="page-hero-media">
					{media ??
						(image && (
							<Image
								src={image}
								alt={imageAlt}
								width={1100}
								height={1000}
								priority
								sizes="(min-width: 900px) 48vw, 100vw"
								className={cn('hero-photo', split && 'polyptych')}
							/>
						))}
					{caption && <figcaption>{caption}</figcaption>}
				</figure>
			</div>
		</header>
	);
}

export function Section({
	title,
	intro,
	children,
	tone = 'plain',
	id,
	className,
}: {
	title?: ReactNode;
	intro?: ReactNode;
	children?: ReactNode;
	tone?: 'plain' | 'blue' | 'cream';
	id?: string;
	className?: string;
}) {
	return (
		<section id={id} className={cn('editorial-section', `tone-${tone}`, className)}>
			<div className="section-inner">
				{(title || intro) && (
					<div className="section-heading">
						{title && <h2>{title}</h2>}
						{intro && <div className="section-intro">{intro}</div>}
					</div>
				)}
				{children}
			</div>
		</section>
	);
}

export function CheckList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
	const icons = [Compass, Target, Sprout, HeartHandshake, Route, Flag];
	return (
		<ul className={cn('topic-list', columns === 1 && 'topic-single')}>
			{items.map((item, i) => {
				const Icon = icons[i % icons.length];
				return (
					<li key={item}>
						<Icon size={28} strokeWidth={1.35} aria-hidden />
						<span>{item}</span>
					</li>
				);
			})}
		</ul>
	);
}

export function Quotes({ items }: { items: string[] }) {
	return (
		<ul className="question-list">
			{items.map((item) => (
				<li key={item}>
					<MessageCircle size={23} strokeWidth={1.3} aria-hidden />
					<p>« {item} »</p>
				</li>
			))}
		</ul>
	);
}

export type Offer = {
	title: string;
	tagline: string;
	text: string;
	href: string;
	linkLabel?: string;
	image?: string;
	imageAlt?: string;
};

const OFFER_IMAGES: Record<string, { src: string; alt: string }> = {
	'/coaching-professionnel': {
		src: '/photos/coaching-professionnel.webp',
		alt: 'Une femme pensive regarde par la fenêtre de son bureau',
	},
	'/coaching-personnel': {
		src: '/photos/coaching-personnel.webp',
		alt: 'Deux personnes discutent au bord de l’eau',
	},
	'/bilan-carriere': { src: '/photos/bilan-carriere.webp', alt: 'Un carnet marqué d’une rose des vents' },
	'/transition-professionnelle': {
		src: '/photos/transition-professionnelle.webp',
		alt: 'Une longue passerelle en bois à travers un marais',
	},
	'/jeunes-parents': { src: '/photos/jeunes-parents.webp', alt: 'Un père et son fils marchent côte à côte' },
	'/coaching-enseignants': {
		src: '/photos/classe.webp',
		alt: 'Une salle de classe vide dans la lumière du soir',
	},
	'/entreprises-rps-qvct': {
		src: '/photos/entreprises.webp',
		alt: 'Une équipe échange en cercle, dans un espace de travail',
	},
};

export function OfferList({ offers, variant = 'portrait' }: { offers: Offer[]; variant?: 'portrait' | 'split' }) {
	return (
		<ul
			className={cn(
				'offer-gallery',
				offers.length === 4 && 'offer-gallery-four',
				variant === 'split' && 'offer-gallery-split',
			)}
		>
			{offers.map((offer) => {
				const photo = OFFER_IMAGES[offer.href];
				return (
					<li key={offer.href}>
						<Link href={offer.href} className="offer-link">
							{(offer.image || photo) && (
								<div className="offer-image">
									<Image
										src={offer.image ?? photo.src}
										alt={offer.imageAlt ?? photo?.alt ?? ''}
										width={720}
										height={540}
										sizes="(min-width: 1000px) 32vw, (min-width: 600px) 45vw, 100vw"
										className={cn(variant === 'split' && 'polyptych polyptych-three')}
									/>
								</div>
							)}
							<div className="offer-copy">
								<div className="offer-heading">
									<h3>{offer.title}</h3>
									<ArrowRight size={22} strokeWidth={1.5} aria-hidden />
								</div>
								<p>{offer.tagline}</p>
							</div>
						</Link>
						{offer.text && <p className="offer-detail">{offer.text}</p>}
					</li>
				);
			})}
		</ul>
	);
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
	const icons = [MessageCircle, Compass, Footprints, Flag];
	return (
		<ol className="steps">
			{steps.map((step, i) => {
				const Icon = icons[i % icons.length];
				return (
					<li key={step.title}>
						<div className="step-mark">
							<Icon size={31} strokeWidth={1.3} aria-hidden />
							<span>0{i + 1}</span>
						</div>
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</li>
				);
			})}
		</ol>
	);
}

export function Principles({ items }: { items: { icon: string; title: string; text: string }[] }) {
	return (
		<dl className="principles">
			{items.map((item) => (
				<div key={item.title}>
					<Image src={item.icon} alt="" width={32} height={32} />
					<dt>{item.title}</dt>
					<dd>{item.text}</dd>
				</div>
			))}
		</dl>
	);
}

export function CtaBand({
	title,
	children,
	actions,
}: {
	title: ReactNode;
	children?: ReactNode;
	actions: ReactNode;
}) {
	return (
		<section className="cta-band">
			<div className="cta-inner">
				<div>
					<h2>{title}</h2>
					{children && <div className="cta-description">{children}</div>}
					<div className="hero-actions">{actions}</div>
				</div>
				<div className="cta-symbol" aria-hidden>
					<Compass size={140} strokeWidth={0.6} />
				</div>
			</div>
		</section>
	);
}

export function RelatedLinks({
	title = 'À découvrir aussi',
	links,
}: {
	title?: string;
	links: { label: string; href: string }[];
}) {
	return (
		<nav aria-label={title} className="related-links">
			<p>{title}</p>
			<ul>
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>
							{link.label}
							<ArrowRight size={16} aria-hidden />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export function Prose({ children }: { children: ReactNode }) {
	return <div className="editorial-prose">{children}</div>;
}

export function Notice({ title, children }: { title: string; children: ReactNode }) {
	return (
		<aside className="editorial-notice">
			<ShieldCheck size={25} strokeWidth={1.4} aria-hidden />
			<div>
				<h3>{title}</h3>
				<div>{children}</div>
			</div>
		</aside>
	);
}

export function Story({
	title,
	children,
	image,
	imageAlt,
}: {
	title: string;
	children: ReactNode;
	image: string;
	imageAlt: string;
}) {
	return (
		<div className="story">
			<div className="story-image">
				<Image src={image} alt={imageAlt} width={800} height={650} sizes="(min-width: 900px) 45vw, 100vw" />
			</div>
			<div className="story-copy">
				<h2>{title}</h2>
				<Prose>{children}</Prose>
			</div>
		</div>
	);
}
