'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState, useSyncExternalStore } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { COACHING_SUBNAV, CTA, MAIN_NAV } from '@/lib/site';
import { cn } from '@/lib/utils';

const COACHING_PATHS = ['/coaching', ...COACHING_SUBNAV.map((item) => item.href)];

const subscribeToScroll = (onChange: () => void) => {
	window.addEventListener('scroll', onChange, { passive: true });
	return () => window.removeEventListener('scroll', onChange);
};
const useScrolled = () =>
	useSyncExternalStore(
		subscribeToScroll,
		() => window.scrollY > 60,
		() => false,
	);

export default function NavBar() {
	const pathname = usePathname();
	const scrolled = useScrolled();
	const [menuOpen, setMenuOpen] = useState(false);
	const [coachingOpen, setCoachingOpen] = useState(false);
	const menuButton = useRef<HTMLButtonElement>(null);
	const coachingButton = useRef<HTMLButtonElement>(null);
	const active = (href: string) =>
		href === '/coaching' ? COACHING_PATHS.includes(pathname) : pathname === href;
	const close = () => {
		setMenuOpen(false);
		setCoachingOpen(false);
	};

	return (
		<header
			className='site-nav'
			data-scrolled={scrolled || undefined}
			onKeyDown={(event) => {
				if (event.key === 'Escape') {
					if (menuOpen) menuButton.current?.focus();
					if (coachingOpen) coachingButton.current?.focus();
					close();
				}
			}}
		>
			<div className='site-nav-inner'>
				<Link href='/' aria-label='Métaphore Coaching, accueil' onClick={close} className='nav-brand'>
					<Image src='/Logo.svg' alt='' width={580} height={208} priority className='nav-logo' />
					<Image src='/monogramme.svg' alt='' width={115} height={105} priority className='nav-monogram' />
				</Link>
				<nav aria-label='Navigation principale' className='desktop-nav-wrap hidden xl:block'>
					<ul className='desktop-nav'>
						{MAIN_NAV.filter((item) => item.href !== '/').map((item) =>
							item.href === '/coaching' ? (
								<li
									key={item.href}
									className='nav-coaching'
									onPointerEnter={(event) => event.pointerType === 'mouse' && setCoachingOpen(true)}
									onPointerLeave={(event) => event.pointerType === 'mouse' && setCoachingOpen(false)}
									onBlur={(event) => {
										if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
											setCoachingOpen(false);
										}
									}}
								>
									<button
										ref={coachingButton}
										type='button'
										aria-expanded={coachingOpen}
										aria-controls='coaching-menu'
										onClick={() => setCoachingOpen((open) => !open)}
										className={cn('nav-link nav-trigger', active('/coaching') && 'nav-active')}
									>
										Coaching
										<ChevronDown size={16} strokeWidth={2} aria-hidden className='nav-chevron' />
									</button>
									{coachingOpen && (
										<div id='coaching-menu' className='mega-menu'>
											<div className='mega-inner'>
												<div className='mega-intro'>
													<p className='mega-title'>Coaching individuel</p>
													<p>À Bordeaux ou à distance, pour avancer sur ce qui compte pour vous.</p>
													<Link
														href='/coaching'
														onClick={close}
														aria-current={pathname === '/coaching' ? 'page' : undefined}
														className='action action-text'
													>
														Voir l’approche
														<ArrowRight size={18} aria-hidden />
													</Link>
												</div>
												<ul className='mega-list'>
													{COACHING_SUBNAV.map((sub) => (
														<li key={sub.href}>
															<Link
																href={sub.href}
																onClick={close}
																aria-current={pathname === sub.href ? 'page' : undefined}
																className='mega-item'
															>
																{sub.image && (
																	<Image src={sub.image} alt='' width={240} height={160} sizes='200px' />
																)}
																<span className='mega-item-label'>{sub.label}</span>
																<span className='mega-item-text'>{sub.description}</span>
															</Link>
														</li>
													))}
												</ul>
											</div>
										</div>
									)}
								</li>
							) : (
								<li key={item.href}>
									<Link
										href={item.href}
										onClick={close}
										aria-current={active(item.href) ? 'page' : undefined}
										className={cn('nav-link', active(item.href) && 'nav-active')}
									>
										{item.label}
									</Link>
								</li>
							),
						)}
					</ul>
				</nav>
				<div className='flex items-center gap-3'>
					<Link href={CTA.booking.href} onClick={close} className='nav-booking hidden sm:inline-flex'>
						{CTA.booking.label}
					</Link>
					<button
						ref={menuButton}
						type='button'
						aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						aria-expanded={menuOpen}
						aria-controls='mobile-menu'
						onClick={() => setMenuOpen((open) => !open)}
						className='nav-menu-button xl:hidden'
					>
						{menuOpen ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
					</button>
				</div>
			</div>
			{menuOpen && (
				<nav id='mobile-menu' aria-label='Menu mobile' className='mobile-nav xl:hidden'>
					<ul>
						{MAIN_NAV.map((item) => (
							<li key={item.href}>
								<Link href={item.href} onClick={close}>
									{item.label}
								</Link>
								{item.href === '/coaching' && (
									<ul className='mobile-subnav'>
										{COACHING_SUBNAV.map((sub) => (
											<li key={sub.href}>
												<Link href={sub.href} onClick={close}>
													{sub.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
					<Link href={CTA.booking.href} onClick={close} className='action action-primary'>
						{CTA.booking.label}
						<ArrowRight size={18} aria-hidden />
					</Link>
				</nav>
			)}
		</header>
	);
}
