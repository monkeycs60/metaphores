import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const SLICE_OFFSETS = ['translate-y-[7%]', 'translate-y-[1%]', '-translate-y-[4%]', 'translate-y-[3%]', 'translate-y-[9%]'];

export function SlicedImage({
	src,
	alt,
	priority,
	className,
}: {
	src: string;
	alt: string;
	priority?: boolean;
	className?: string;
}) {
	return (
		<div role='img' aria-label={alt} className={cn('relative grid aspect-[4/3] grid-cols-5 gap-2', className)}>
			{SLICE_OFFSETS.map((offset, i) => (
				<div
					key={i}
					style={{ animationDelay: `${i * 90}ms` }}
					className={cn('slice relative h-full overflow-hidden', offset)}>
					<Image
						src={src}
						alt=''
						fill={false}
						width={1600}
						height={1200}
						priority={priority}
						sizes='(min-width: 1024px) 45vw, 90vw'
						style={{
							width: 'calc(500% + 2rem)',
							left: `calc(${-i * 100}% - ${i * 0.5}rem)`,
						}}
						className='absolute top-0 h-full max-w-none object-cover'
					/>
				</div>
			))}
		</div>
	);
}

export function Scribble({ children, tone = 'yellow' }: { children: ReactNode; tone?: 'yellow' | 'blue' | 'navy' }) {
	return (
		<span
			className={cn(
				'px-1.5',
				tone === 'yellow' && 'bg-primaryOne text-blackOne',
				tone === 'blue' && 'bg-secondaryOne text-blackOne',
				tone === 'navy' && 'bg-blackOne text-whiteOne'
			)}>
			{children}
		</span>
	);
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
		<Link
			href={href}
			className={cn(
				'inline-flex min-h-[48px] items-center justify-center text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blackOne',
				variant === 'primary' && 'rounded-xl bg-primaryOne px-7 py-3 text-blackOne hover:bg-blackOne hover:text-primaryOne',
				variant === 'outline' && 'rounded-xl border border-blackOne px-7 py-3 text-blackOne hover:bg-blackOne hover:text-whiteOne',
				variant === 'text' && 'min-h-0 underline decoration-primaryOne decoration-[3px] underline-offset-[6px] hover:decoration-blackOne',
				className
			)}>
			{children}
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
}: {
	title: ReactNode;
	subtitle?: ReactNode;
	children?: ReactNode;
	image?: string;
	imageAlt?: string;
	media?: ReactNode;
	caption?: ReactNode;
	actions?: ReactNode;
}) {
	return (
		<header className='relative mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-24 lg:pt-12'>
			<Image
				src='/shapes/blue-circle.svg'
				alt=''
				width={110}
				height={110}
				className='pointer-events-none absolute -left-10 top-0 -z-10 w-[110px] rotate-[120deg]'
			/>
			<div className='flex flex-col gap-6'>
				<h1 className='font-yeseva text-[2.1rem] leading-[1.15] text-blackOne sm:text-5xl lg:text-[3.25rem]'>{title}</h1>
				{subtitle && <p className='font-caveat text-2xl text-blackOne lg:text-3xl'>{subtitle}</p>}
				{children && <div className='flex max-w-[60ch] flex-col gap-4 text-[1.0625rem] leading-relaxed text-blackOne/85'>{children}</div>}
				{actions && <div className='mt-2 flex flex-wrap items-center gap-x-6 gap-y-4'>{actions}</div>}
			</div>
			<figure className='relative flex flex-col gap-4'>
				<Image
					src='/shapes/yellow-circle.svg'
					alt=''
					width={220}
					height={220}
					className='pointer-events-none absolute -right-4 -top-10 -z-10 w-[140px] sm:w-[160px] lg:-right-16 lg:w-[220px]'
				/>
				{media ?? (image && <SlicedImage src={image} alt={imageAlt} priority />)}
				{caption && <figcaption className='pl-2 pt-4 font-caveat text-2xl text-blackOne lg:text-3xl'>{caption}</figcaption>}
			</figure>
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
		<section
			id={id}
			className={cn(
				'relative w-full',
				tone === 'blue' && 'bg-secondaryOne/45',
				tone === 'cream' && 'bg-[#FFF1CE]/60',
				className
			)}>
			<div className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:px-10 lg:py-24'>
				{(title || intro) && (
					<div className='flex max-w-[62ch] flex-col gap-4'>
						{title && <h2 className='font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.25rem]'>{title}</h2>}
						{intro && <div className='flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-blackOne/85'>{intro}</div>}
					</div>
				)}
				{children}
			</div>
		</section>
	);
}

export function CheckList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
	return (
		<ul className={cn('grid gap-x-12 gap-y-4 text-[1.0625rem] text-blackOne', columns === 2 && 'md:grid-cols-2')}>
			{items.map((item) => (
				<li key={item} className='flex gap-4 border-b border-blackOne/10 pb-4'>
					<span aria-hidden className='mt-[0.45rem] h-3 w-3 shrink-0 rounded-full bg-primaryOne' />
					<span>{item}</span>
				</li>
			))}
		</ul>
	);
}

export function Quotes({ items }: { items: string[] }) {
	return (
		<ul className='flex flex-col gap-3'>
			{items.map((item) => (
				<li key={item} className='font-caveat text-2xl text-blackOne lg:text-[1.9rem]'>
					« {item} »
				</li>
			))}
		</ul>
	);
}

export type Offer = { title: string; tagline: string; text: string; href: string; linkLabel?: string };

export function OfferList({ offers, shape = 'circle' }: { offers: Offer[]; shape?: 'circle' | 'square' }) {
	const marks = ['bg-primaryOne', 'bg-secondaryOne', 'bg-blackOne', 'border-2 border-blackOne'];
	return (
		<ul className='flex flex-col'>
			{offers.map((offer, i) => (
				<li key={offer.href} className='grid gap-4 border-t border-blackOne/15 py-8 md:grid-cols-[3rem_1fr_1.3fr] md:gap-8'>
					<span aria-hidden className={cn('mt-1 h-8 w-8', shape === 'circle' ? 'rounded-full' : '', marks[i % marks.length])} />
					<div className='flex flex-col gap-1'>
						<h3 className='font-yeseva text-2xl text-blackOne'>
							<Link href={offer.href} className='hover:underline hover:decoration-primaryOne hover:decoration-[3px] hover:underline-offset-4'>
								{offer.title}
							</Link>
						</h3>
						<p className='font-caveat text-2xl text-blackOne/80'>{offer.tagline}</p>
					</div>
					<div className='flex flex-col items-start gap-4 text-blackOne/85'>
						<p className='leading-relaxed'>{offer.text}</p>
						<ButtonLink href={offer.href} variant='text'>
							{offer.linkLabel ?? `Découvrir : ${offer.title.toLowerCase()}`}
						</ButtonLink>
					</div>
				</li>
			))}
		</ul>
	);
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
	return (
		<ol className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
			{steps.map((step, i) => (
				<li key={step.title} className='flex flex-col gap-3'>
					<span className='font-yeseva text-5xl text-primaryOne'>{i + 1}</span>
					<h3 className='text-lg font-semibold text-blackOne'>{step.title}</h3>
					<p className='leading-relaxed text-blackOne/80'>{step.text}</p>
				</li>
			))}
		</ol>
	);
}

export function Principles({ items }: { items: { icon: string; title: string; text: string }[] }) {
	return (
		<dl className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
			{items.map((item) => (
				<div key={item.title} className='flex flex-col gap-3'>
					<Image src={item.icon} alt='' width={44} height={44} className='h-11 w-11' />
					<dt className='text-lg font-semibold text-blackOne'>{item.title}</dt>
					<dd className='leading-relaxed text-blackOne/80'>{item.text}</dd>
				</div>
			))}
		</dl>
	);
}

export function CtaBand({ title, children, actions }: { title: ReactNode; children?: ReactNode; actions: ReactNode }) {
	return (
		<section className='mx-auto w-full max-w-6xl px-6 py-16 lg:px-10 lg:py-24'>
			<div className='containerBordureBriseeThree relative flex flex-col items-start gap-6 px-8 py-14 sm:px-14 lg:px-20 lg:py-20'>
				<h2 className='max-w-[24ch] font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.4rem]'>{title}</h2>
				{children && <div className='max-w-[58ch] text-[1.0625rem] leading-relaxed text-blackOne/85'>{children}</div>}
				<div className='flex flex-wrap items-center gap-x-6 gap-y-4'>{actions}</div>
			</div>
		</section>
	);
}

export function RelatedLinks({ title = 'Pour aller plus loin', links }: { title?: string; links: { label: string; href: string }[] }) {
	return (
		<nav aria-label={title} className='mx-auto w-full max-w-6xl px-6 lg:px-10'>
			<p className='mb-3 font-caveat text-2xl text-blackOne'>{title}</p>
			<ul className='flex flex-wrap gap-3'>
				{links.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							className='inline-flex min-h-[44px] items-center rounded-full border border-blackOne/25 px-5 text-sm font-medium text-blackOne hover:border-blackOne hover:bg-secondaryOne/40'>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export function Prose({ children }: { children: ReactNode }) {
	return <div className='flex max-w-[62ch] flex-col gap-4 text-[1.0625rem] leading-relaxed text-blackOne/85'>{children}</div>;
}

export function Notice({ title, children }: { title: string; children: ReactNode }) {
	return (
		<aside className='max-w-[70ch] border-l-4 border-secondaryOne bg-secondaryOne/15 px-6 py-5'>
			<h3 className='mb-2 font-semibold text-blackOne'>{title}</h3>
			<div className='leading-relaxed text-blackOne/85'>{children}</div>
		</aside>
	);
}
