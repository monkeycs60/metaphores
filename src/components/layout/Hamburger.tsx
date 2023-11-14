'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { NavAccordion } from './NavAccordion';
import Image from 'next/image';

interface HamburgerProps {
	isHamburgerOpen: boolean;
	toggleHamburgerMenu: () => void;
}
const Hamburger = ({
	isHamburgerOpen,
	toggleHamburgerMenu,
}: HamburgerProps) => {
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '100%' },
		exit: { opacity: 0, x: '100%' },
	};
	return (
		<motion.section
			initial='closed'
			animate={isHamburgerOpen ? 'open' : 'closed'}
			exit='exit'
			variants={variants}
			transition={{ duration: 0.5 }}
			className='fixed right-0 top-0 z-[100] h-screen w-screen overflow-hidden bg-primaryOne font-inter text-blackOne'>
			<div className='relative flex h-full flex-col justify-center p-12 text-center text-lg font-semibold sm:text-xl '>
				<Image
					src='/seeking.svg'
					width={403}
					height={466}
					alt='Seeking'
					className='absolute left-12 top-8 w-[46px]'
				/>
				<div className='mt-2 flex flex-col gap-6'>
					<Link
						href={'/about'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						A propos
					</Link>
					<NavAccordion />
					<Link
						href={'/deontology'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						Déontologie
					</Link>
					<Link
						href={'/offers'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						Tarifs
					</Link>
					<Link
						href={'/contact'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						Contact
					</Link>
					<Link
						href={'/reservation'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						Réserver
					</Link>
					<Link
						href={'/'}
						className='linkHoverEffect'
						onClick={toggleHamburgerMenu}>
						<Image
							src='/final-logo.svg'
							alt='logo'
							className='m-auto mt-4 w-[180px] rounded-xl bg-white/70 p-2 2xl:w-[200px] '
							width={894}
							height={279}
						/>
					</Link>
				</div>
			</div>
			<X
				size={40}
				className='absolute right-3 top-4'
				onClick={toggleHamburgerMenu}
			/>
		</motion.section>
	);
};

export default Hamburger;
