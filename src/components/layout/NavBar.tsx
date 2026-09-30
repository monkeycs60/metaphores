'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { COACHING_SUBNAV, CTA, MAIN_NAV } from '@/lib/site';
import { cn } from '@/lib/utils';

const COACHING_PATHS = ['/coaching', ...COACHING_SUBNAV.map((item) => item.href)];

export default function NavBar() {
	const pathname = usePathname();
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
			onKeyDown={(event) => {
				if (event.key === 'Escape') {
					if (menuOpen) menuButton.current?.focus();
					if (coachingOpen) coachingButton.current?.focus();
					close();
				}
			}}
		>
			<div className='site-nav-inner'>
				<Link href='/' aria-label='Métaphore Coaching, accueil' onClick={close} className='shrink-0'>
					<Image
						src='/Logo.svg'
						alt='Métaphore Coaching'
						width={580}
						height={208}
						priority
						className='nav-logo'
					/>
				</Link>
				<nav aria-label='Navigation principale' className='hidden xl:block'>
					<ul className='desktop-nav'>
						{MAIN_NAV.filter((item) => item.href !== '/').map((item) =>
							item.href === '/coaching' ? (
								<li
									key={item.href}
									className='nav-coaching'
									onBlur={(event) => {
										if (!event.currentTarget.contains(event.relatedTarget)) setCoachingOpen(false);
									}}
								>
									<div className='flex items-center'>
										<Link
											href='/coaching'
											aria-current={active('/coaching') ? 'page' : undefined}
											onClick={close}
											className={cn('nav-link', active('/coaching') && 'nav-active')}
										>
											Coaching
										</Link>
										<button
											ref={coachingButton}
											type='button'
											aria-expanded={coachingOpen}
											aria-controls='coaching-menu'
											aria-label='Afficher les accompagnements de coaching'
											onClick={() => setCoachingOpen((open) => !open)}
											className='nav-dropdown-toggle'
										>
											<ChevronDown size={15} aria-hidden />
										</button>
									</div>
									{coachingOpen && (
										<ul id='coaching-menu' className='coaching-menu'>
											{COACHING_SUBNAV.map((sub) => (
												<li key={sub.href}>
													<Link href={sub.href} onClick={close}>
														{sub.label}
														<ArrowRight size={16} aria-hidden />
													</Link>
												</li>
											))}
										</ul>
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
