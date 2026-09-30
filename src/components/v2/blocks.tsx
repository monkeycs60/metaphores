import { testimoniesList } from '@/lib/testimoniesList';
import { CTA } from '@/lib/site';
import { ButtonLink, CtaBand, Principles } from './ui';

export const FRAME_PRINCIPLES = [
	{ icon: '/lock.svg', title: 'Confidentialité', text: 'Le contenu des séances reste confidentiel.' },
	{ icon: '/loupe.svg', title: 'Transparence', text: 'Le cadre et les objectifs sont clairement définis.' },
	{ icon: '/dove.svg', title: 'Liberté', text: 'Vous restez maître de vos décisions.' },
	{
		icon: '/balance.svg',
		title: 'Respect de votre équilibre',
		text: 'L’évolution recherchée doit pouvoir s’intégrer à votre vie.',
	},
];

export function FramePrinciples() {
	return <Principles items={FRAME_PRINCIPLES} />;
}

export function Testimonies() {
	return (
		<ul className='grid gap-10 lg:grid-cols-3'>
			{testimoniesList.map((testimony) => (
				<li key={testimony.author} className='flex flex-col gap-4'>
					<span aria-hidden className='font-yeseva text-6xl leading-none text-primaryOne'>“</span>
					<blockquote className='leading-relaxed text-blackOne/85'>{testimony.text}</blockquote>
					<p className='font-caveat text-2xl text-blackOne'>
						{testimony.author}, <span className='text-blackOne/70'>{testimony.position.toLowerCase()}</span>
					</p>
				</li>
			))}
		</ul>
	);
}

export function ContactBand({
	title = 'Vous n’avez pas besoin d’avoir déjà toutes les réponses.',
	text = 'Un premier échange permettra de comprendre ce qui vous amène et de voir si un accompagnement par le coaching peut réellement vous être utile.',
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
					<ButtonLink href={primary.href}>{primary.label}</ButtonLink>
					<ButtonLink href={CTA.booking.href} variant='text'>
						{CTA.booking.label}
					</ButtonLink>
				</>
			}>
			<p>{text}</p>
		</CtaBand>
	);
}

export function HeroActions({ primary = CTA.primary }: { primary?: { label: string; href: string } }) {
	return (
		<>
			<ButtonLink href={primary.href}>{primary.label}</ButtonLink>
			<ButtonLink href={CTA.booking.href} variant='text'>
				{CTA.booking.label}
			</ButtonLink>
		</>
	);
}
