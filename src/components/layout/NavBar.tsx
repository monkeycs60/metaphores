'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AlignJustify, ChevronDown, X } from 'lucide-react';
import { COACHING_SUBNAV, CTA, MAIN_NAV } from '@/lib/site';
import { cn } from '@/lib/utils';
import useScrollPosition from '@/hooks/useScrollPosition';

const COACHING_PATHS = ['/coaching', ...COACHING_SUBNAV.map((item) => item.href)];

const NavBar = () => {
	const pathname = usePathname();
	const isScrolled = useScrollPosition() > 40;
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCoachingOpen, setIsCoachingOpen] = useState(false);

	const isActive = (href: string) =>
		href === '/coaching' ? COACHING_PATHS.includes(pathname) : pathname === href;

	return (
		<header
			className={cn(
				'sticky top-0 z-[60] w-full bg-white/95 backdrop-blur transition-shadow',
				isScrolled && 'shadow-[0_1px_0_rgba(13,6,48,0.08)]'
			)}>
			<div className='mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-10'>
				<Link href='/' aria-label='Métaphore Coaching, accueil' className='shrink-0'>
					<Image src='/Logo.svg' alt='Métaphore Coaching' width={580} height={208} priority className='w-[150px] lg:w-[170px]' />
				</Link>

				<nav aria-label='Navigation principale' className='hidden xl:block'>
					<ul className='flex items-center gap-1 text-[15px] font-medium text-blackOne'>
						{MAIN_NAV.filter((item) => item.href !== '/').map((item) =>
							item.href === '/coaching' ? (
								<li
									key={item.href}
									className='relative'
									onMouseEnter={() => setIsCoachingOpen(true)}
									onMouseLeave={() => setIsCoachingOpen(false)}>
									<div className='flex items-center'>
										<Link
											href='/coaching'
											aria-current={isActive('/coaching') ? 'page' : undefined}
											className={cn('rounded-lg px-3 py-2 hover:bg-primaryOne/25', isActive('/coaching') && 'bg-primaryOne/30')}>
											Coaching
										</Link>
										<button
											type='button'
											aria-expanded={isCoachingOpen}
											aria-label='Afficher les accompagnements de coaching'
											onClick={() => setIsCoachingOpen((open) => !open)}
											className='-ml-2 rounded-lg p-2 hover:bg-primaryOne/25'>
											<ChevronDown className={cn('h-4 w-4 transition-transform', isCoachingOpen && 'rotate-180')} />
										</button>
									</div>
									{isCoachingOpen && (
										<div className='absolute left-0 top-full pt-2'>
											<ul className='grid w-[520px] grid-cols-2 gap-1 rounded-xl border border-blackOne/10 bg-white p-3 shadow-xl shadow-blackOne/10'>
												{COACHING_SUBNAV.map((sub) => (
													<li key={sub.href}>
														<Link
															href={sub.href}
															onClick={() => setIsCoachingOpen(false)}
															className='flex flex-col gap-1 rounded-lg p-3 hover:bg-primaryOne/20'>
															<span className='font-semibold'>{sub.label}</span>
															<span className='text-sm font-normal text-blackOne/65'>{sub.description}</span>
														</Link>
													</li>
												))}
											</ul>
										</div>
									)}
								</li>
							) : (
								<li key={item.href}>
									<Link
										href={item.href}
										aria-current={isActive(item.href) ? 'page' : undefined}
										className={cn('rounded-lg px-3 py-2 hover:bg-primaryOne/25', isActive(item.href) && 'bg-primaryOne/30')}>
										{item.label}
									</Link>
								</li>
							)
						)}
					</ul>
				</nav>

				<div className='flex items-center gap-3'>
					<Link
						href={CTA.booking.href}
						className='hidden rounded-xl bg-primaryOne px-5 py-3 text-[15px] font-semibold text-blackOne hover:bg-blackOne hover:text-primaryOne sm:inline-flex'>
						{CTA.booking.label}
					</Link>
					<button
						type='button'
						aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						aria-expanded={isMenuOpen}
						onClick={() => setIsMenuOpen((open) => !open)}
						className='rounded-lg p-2 text-blackOne xl:hidden'>
						{isMenuOpen ? <X className='h-7 w-7' /> : <AlignJustify className='h-7 w-7' />}
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<nav aria-label='Menu mobile' className='h-[calc(100dvh-76px)] overflow-y-auto border-t border-blackOne/10 bg-white px-6 pb-10 pt-4 xl:hidden'>
					<ul className='flex flex-col text-lg font-medium text-blackOne'>
						{MAIN_NAV.map((item) => (
							<li key={item.href} className='border-b border-blackOne/10'>
								<Link href={item.href} onClick={() => setIsMenuOpen(false)} className='block py-4'>
									{item.label}
								</Link>
								{item.href === '/coaching' && (
									<ul className='mb-4 flex flex-col gap-1 border-l-2 border-primaryOne pl-4 text-base font-normal'>
										{COACHING_SUBNAV.map((sub) => (
											<li key={sub.href}>
												<Link href={sub.href} onClick={() => setIsMenuOpen(false)} className='block py-2'>
													{sub.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
					<Link
						href={CTA.booking.href}
						onClick={() => setIsMenuOpen(false)}
						className='mt-8 flex min-h-[52px] items-center justify-center rounded-xl bg-primaryOne font-semibold text-blackOne'>
						{CTA.booking.label}
					</Link>
				</nav>
			)}
		</header>
	);
};

export default NavBar;
