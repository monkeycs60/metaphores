import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, ReactNode } from 'react';
import {
	ArrowRight,
	Compass,
	Flag,
	Footprints,
	MessageCircle,
	ShieldCheck,
	type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Deco, Scribble } from './deco';

export function lines(text: string) {
	return text.split('\n').flatMap((line, i) => (i ? [<br key={i} />, line] : [line]));
}

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
	note,
	imagePosition,
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
	note?: ReactNode;
	imagePosition?: string;
}) {
	return (
		<header className={cn('page-hero', split && 'page-hero-split')}>
			<Deco shape="sky" size={74} className="deco-float" style={{ top: 36, left: '2.5%' }} />
			<Deco shape="ring" size={190} style={{ bottom: -70, left: -96 }} />
			<div className="page-hero-inner">
				<div className="page-hero-copy">
					{subtitle && <p className="hero-context">{subtitle}</p>}
					<h1>{title}</h1>
					{children && <div className="hero-description">{children}</div>}
					{actions && <div className="hero-actions">{actions}</div>}
				</div>
				<figure className="page-hero-media">
					{split && <Deco shape="sun" size={200} className="hero-media-deco" />}
					{media ??
						(image && (
							<Image
								src={image}
								alt={imageAlt}
								width={1100}
								height={1000}
								priority
								quality={90}
								sizes="(min-width: 900px) 48vw, 100vw"
								className={cn('hero-photo', split && 'polyptych')}
								style={imagePosition ? { objectPosition: imagePosition } : undefined}
							/>
						))}
					{caption && <figcaption>{caption}</figcaption>}
					{note}
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
	note,
	deco,
}: {
	title?: ReactNode;
	intro?: ReactNode;
	children?: ReactNode;
	tone?: 'plain' | 'blue' | 'cream';
	id?: string;
	className?: string;
	note?: ReactNode;
	deco?: ReactNode;
}) {
	return (
		<section id={id} className={cn('editorial-section', `tone-${tone}`, className)}>
			{deco}
			<div className="section-inner">
				{(title || intro) && (
					<div className="section-heading">
						{title && (
							<div className="section-title">
								{note}
								<h2>{title}</h2>
							</div>
						)}
						{intro && <div className="section-intro">{intro}</div>}
					</div>
				)}
				{children}
			</div>
		</section>
	);
}

export type ListItem = { text: string; icon: LucideIcon };

export function CheckList({ items, columns = 2 }: { items: ListItem[]; columns?: 1 | 2 }) {
	return (
		<ul className={cn('topic-list', columns === 1 && 'topic-single')}>
			{items.map(({ text, icon: Icon }) => (
				<li key={text}>
					<Icon size={28} strokeWidth={1.35} aria-hidden />
					<span>{text}</span>
				</li>
			))}
		</ul>
	);
}

export function Quotes({ items, variant = 'list' }: { items: string[]; variant?: 'list' | 'bubbles' }) {
	if (variant === 'bubbles') {
		return (
			<ul className="bubble-list">
				{items.map((item) => (
					<li key={item}>
						<p>{item}</p>
					</li>
				))}
			</ul>
		);
	}
	return (
		<ul className="question-list">
			{items.map((item) => (
				<li key={item}>
					<MessageCircle size={23} strokeWidth={1.3} aria-hidden />
					<p>«&nbsp;{item}&nbsp;»</p>
				</li>
			))}
		</ul>
	);
}

export type Offer = {
	title: string;
	tagline?: string;
	text: ReactNode;
	href: string;
	linkLabel?: string;
	image?: string;
	imageAlt?: string;
};

export const OFFER_IMAGES: Record<string, { src: string; alt: string; note?: ReactNode; position?: string }> = {
	'/coaching-professionnel': {
		src: '/photos/carte-pro-echange.webp',
		alt: 'Deux collègues en veste échangent en souriant à leur bureau',
		position: '42% center',
		note: (
			<>
				Garder le <mark>cap</mark>
			</>
		),
	},
	'/coaching-personnel': {
		src: '/photos/carte-perso-canape.webp',
		alt: 'Deux personnes discutent, assises sur un canapé dans un intérieur clair',
		position: 'center 62%',
		note: (
			<>
				Prendre de la <mark>hauteur</mark>
			</>
		),
	},
	'/bilan-carriere': {
		src: '/photos/carte-bilan-serein.webp',
		alt: 'Un homme aux cheveux blancs sourit, détendu, dans la lumière du soir',
		position: '45% center',
		note: (
			<>
				Se laisser <mark>porter</mark>
			</>
		),
	},
	'/transition-professionnelle': {
		src: '/photos/carte-transition-elan.webp',
		alt: 'Un homme saute d’un rocher à l’autre, face aux montagnes',
		position: '55% center',
		note: (
			<>
				Rejoindre l’autre <mark>rive</mark>
			</>
		),
	},
	'/jeunes-parents': {
		src: '/photos/jeunes-parents-rire.webp',
		alt: 'Un père et son fils rient, assis dans l’herbe d’un parc ensoleillé',
	},
	'/coaching-enseignants': {
		src: '/photos/classe.webp',
		alt: 'Une salle de classe vide dans la lumière du soir',
	},
	'/entreprises-rps-qvct': {
		src: '/photos/entreprises-equipe.webp',
		alt: 'Quatre collègues sourient autour d’un ordinateur portable',
	},
};

export function OfferList({ offers, variant = 'portrait' }: { offers: Offer[]; variant?: 'portrait' | 'split' }) {
	const portrait = variant === 'portrait';
	return (
		<ul
			className={cn(
				'offer-gallery',
				offers.length === 4 && 'offer-gallery-four',
				portrait ? 'offer-gallery-portrait' : 'offer-gallery-split',
			)}
		>
			{offers.map((offer) => {
				const photo = OFFER_IMAGES[offer.href];
				return (
					<li key={offer.href}>
						<Link href={offer.href} className="offer-link">
							{(offer.image || photo) && (
								<div className="offer-image">
									<div className="offer-frame">
										<Image
											src={offer.image ?? photo.src}
											alt={offer.imageAlt ?? photo?.alt ?? ''}
											width={720}
											height={900}
											quality={88}
											sizes="(min-width: 1000px) 32vw, (min-width: 600px) 45vw, 100vw"
											className={cn(!portrait && 'polyptych polyptych-three')}
											style={photo?.position ? { objectPosition: photo.position } : undefined}
										/>
									</div>
									{portrait && photo?.note && <Scribble className="offer-note">{photo.note}</Scribble>}
								</div>
							)}
							<div className="offer-copy">
								<div className="offer-heading">
									<h3>{offer.title}</h3>
									<ArrowRight size={22} strokeWidth={1.5} aria-hidden />
								</div>
								{offer.tagline && <p>{offer.tagline}</p>}
							</div>
						</Link>
						{offer.text && <p className="offer-detail">{offer.text}</p>}
					</li>
				);
			})}
		</ul>
	);
}

export function Steps({ steps }: { steps: { title?: string; text: string; icon?: LucideIcon }[] }) {
	const icons = [MessageCircle, Compass, Footprints, Flag];
	return (
		<ol className="steps" style={{ '--steps': steps.length } as CSSProperties}>
			{steps.map((step, i) => {
				const Icon = step.icon ?? icons[i % icons.length];
				return (
					<li key={step.title ?? step.text} style={{ '--i': i } as CSSProperties}>
						<div className="step-mark">
							<Icon size={24} strokeWidth={1.4} aria-hidden />
						</div>
						{i < steps.length - 1 && (
							<svg className="step-path" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden>
								<path d="M0 40 C 45 40, 55 0, 100 0" vectorEffect="non-scaling-stroke" />
							</svg>
						)}
						<p className="step-index">Étape {i + 1}</p>
						{step.title && <h3>{step.title}</h3>}
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

function FocusMark() {
	return (
		<div className="focus">
			<span className="focus-ring" />
			<span className="focus-sky" />
			<span className="focus-hatch" />
			<span className="focus-sun" />
			<span className="focus-dot" />
		</div>
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
					<FocusMark />
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
	note,
	lead,
	children,
	image,
	imageAlt,
	reverse = false,
	compact = false,
	imagePosition,
}: {
	title?: ReactNode;
	note?: ReactNode;
	lead?: ReactNode;
	children: ReactNode;
	image: string;
	imageAlt: string;
	reverse?: boolean;
	compact?: boolean;
	imagePosition?: string;
}) {
	return (
		<div className={cn('story', reverse && 'story-reverse', compact && 'story-compact')}>
			<div className="story-image">
				<Image
					src={image}
					alt={imageAlt}
					width={800}
					height={650}
					quality={88}
					sizes={compact ? '(min-width: 900px) 30vw, 100vw' : '(min-width: 900px) 45vw, 100vw'}
					style={imagePosition ? { objectPosition: imagePosition } : undefined}
				/>
			</div>
			<div className="story-copy">
				{note}
				{lead && <p className="story-lead">{lead}</p>}
				{title && <h2>{title}</h2>}
				<Prose>{children}</Prose>
			</div>
		</div>
	);
}

export function ListFrame({
	note,
	title,
	intro,
	lead,
	items,
	image,
}: {
	note?: ReactNode;
	title: string;
	intro?: string;
	lead?: string;
	items: ListItem[];
	image?: { src: string; alt: string; position?: string };
}) {
	const frame = (
		<article className="list-frame">
			<header className="list-frame-head">
				{note}
				<h2>{title}</h2>
				{intro && <p className="list-frame-intro">{intro}</p>}
			</header>
			{lead && <p className="list-frame-lead">{lead}</p>}
			<CheckList items={items} columns={image ? 1 : 2} />
		</article>
	);
	if (!image) return frame;
	return (
		<div className="list-frame-split">
			<div className="list-frame-photo">
				<Image
					src={image.src}
					alt={image.alt}
					width={900}
					height={1100}
					sizes="(min-width: 900px) 38vw, 100vw"
					style={image.position ? { objectPosition: image.position } : undefined}
				/>
			</div>
			{frame}
		</div>
	);
}

export function ReadingBlock({
	title,
	image,
	imageAlt,
	imageWidth,
	imageHeight,
	reverse = false,
	children,
}: {
	title?: string;
	image: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	reverse?: boolean;
	children: ReactNode;
}) {
	return (
		<div className={cn('reading-block', reverse && 'reading-block-reverse')}>
			<div className="reading-image">
				<Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight} sizes="(min-width: 900px) 30vw, 80vw" />
			</div>
			<div className="reading-copy">
				{title && <h3>{title}</h3>}
				{children}
			</div>
		</div>
	);
}

export function PhotoQuote({
	image,
	imageAlt,
	imagePosition,
	reverse = false,
	children,
}: {
	image: string;
	imageAlt: string;
	imagePosition?: string;
	reverse?: boolean;
	children: ReactNode;
}) {
	return (
		<figure className={cn('photo-quote', reverse && 'photo-quote-reverse')}>
			<div className="photo-quote-image">
				<Image
					src={image}
					alt={imageAlt}
					width={1200}
					height={900}
					sizes="(min-width: 900px) 40vw, 100vw"
					style={imagePosition ? { objectPosition: imagePosition } : undefined}
				/>
			</div>
			<blockquote>{children}</blockquote>
		</figure>
	);
}

export function Exergue({ children, author }: { children: ReactNode; author?: string }) {
	return (
		<figure className="exergue">
			<blockquote>{children}</blockquote>
			{author && <figcaption>{author}</figcaption>}
		</figure>
	);
}

export function NumberedList({
	items,
	aside,
}: {
	items: { title?: string; text: ReactNode }[];
	aside?: ReactNode;
}) {
	return (
		<ul className={cn('parent-grid', !items.some((item) => item.title) && 'parent-grid-plain')}>
			{items.map((item, i) => (
				<li key={item.title ?? i}>
					{item.title && <h3>{item.title}</h3>}
					<p>{item.text}</p>
				</li>
			))}
			{aside && <li className="parent-grid-aside">{aside}</li>}
		</ul>
	);
}
