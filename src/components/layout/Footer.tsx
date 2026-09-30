import Image from 'next/image';
import Link from 'next/link';
import { COACHING_SUBNAV, CONTACT, LOCATIONS, MAIN_NAV } from '@/lib/site';

const PRACTICAL_LINKS = [
	{ label: 'Déontologie', href: '/deontologie' },
	{ label: 'Tarifs', href: '/tarifs' },
	{ label: 'C’est quoi le coaching ?', href: '/coaching/origines' },
	{ label: 'Coach ou psy ?', href: '/coaching/psy' },
	{ label: 'Mentions légales et confidentialité', href: '/mentions-legales' },
];

const Footer = () => {
	return (
		<footer className='mt-8 bg-primaryOne/25 text-blackOne'>
			<div className='mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-10'>
				<div className='flex flex-col gap-4'>
					<Image src='/Logo.svg' alt='Métaphore Coaching' width={580} height={208} className='w-[160px]' />
					<p className='font-caveat text-2xl'>Coaching professionnel et personnel à Bordeaux et à distance</p>
					<div className='flex flex-col gap-1 text-[15px]'>
						<a href={CONTACT.phoneHref} className='hover:underline'>
							{CONTACT.phone}
						</a>
						<a href={`mailto:${CONTACT.email}`} className='hover:underline'>
							{CONTACT.email}
						</a>
					</div>
					<div className='flex gap-3'>
						<a href={CONTACT.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn de Christophe Jacques'>
							<Image src='/linkedin.svg' alt='' width={28} height={28} />
						</a>
						<a href={CONTACT.instagram} target='_blank' rel='noopener noreferrer' aria-label='Instagram de Métaphore Coaching'>
							<Image src='/insta.svg' alt='' width={28} height={28} />
						</a>
					</div>
				</div>

				<nav aria-label='Accompagnements' className='flex flex-col gap-3 text-[15px]'>
					<p className='font-semibold'>Accompagnements</p>
					<Link href='/coaching' className='hover:underline'>
						Coaching
					</Link>
					{COACHING_SUBNAV.map((item) => (
						<Link key={item.href} href={item.href} className='pl-3 hover:underline'>
							{item.label}
						</Link>
					))}
					{MAIN_NAV.slice(2, 5).map((item) => (
						<Link key={item.href} href={item.href} className='hover:underline'>
							{item.label}
						</Link>
					))}
				</nav>

				<nav aria-label='Informations pratiques' className='flex flex-col gap-3 text-[15px]'>
					<p className='font-semibold'>Informations pratiques</p>
					<Link href='/qui-suis-je' className='hover:underline'>
						Qui suis-je ?
					</Link>
					{PRACTICAL_LINKS.map((item) => (
						<Link key={item.href} href={item.href} className='hover:underline'>
							{item.label}
						</Link>
					))}
				</nav>

				<div className='flex flex-col gap-3 text-[15px]'>
					<p className='font-semibold'>Lieux de rendez-vous</p>
					{LOCATIONS.map((location) => (
						<div key={location.title} className='flex flex-col gap-1'>
							<p className='font-medium'>{location.title}</p>
							{location.lines.map((line) => (
								<p key={line} className='text-blackOne/75'>
									{line}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
			<p className='border-t border-blackOne/10 px-6 py-5 text-center text-sm text-blackOne/60'>
				© {new Date().getFullYear()} Métaphore Coaching — Christophe Jacques, coach professionnel à Bordeaux
			</p>
		</footer>
	);
};

export default Footer;
