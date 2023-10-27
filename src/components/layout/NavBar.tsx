'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import CustomNavigationMenu from '../ui/CustomNavigationMenu';
import useScrollPosition from '@/hooks/useScrollPosition';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import useHamburgerMenu from '@/hooks/useHamburgerMenu';
import Hamburger from './Hamburger';
import { AlignJustify } from 'lucide-react';

const NavBar = () => {
	const { isHamburgerOpen, toggleHamburgerMenu } = useHamburgerMenu();
	const scrollPosition = useScrollPosition();
	const isScrolled = scrollPosition > 60;

	return (
		<>
			<AnimatePresence mode='wait'>
				{isHamburgerOpen ? (
					<Hamburger
						isHamburgerOpen={isHamburgerOpen}
						toggleHamburgerMenu={toggleHamburgerMenu}
					/>
				) : (
					<AlignJustify
						className='fixed right-4 top-8 z-[100] h-8 w-8 text-secondaryOne lg:hidden'
						onClick={toggleHamburgerMenu}
					/>
				)}
			</AnimatePresence>
			<>
				<div
					className={`sticky top-0 z-[60] m-auto my-[15px] hidden h-[90px] lg:block 2xl:h-[120px] ${
						isScrolled ? 'w-screen bg-white' : ''
					}
		`}>
					<div
						className={`m-auto flex h-full w-[90%] items-center justify-between gap-12 p-6 font-inter`}>
						<Link href='/'>
							<motion.div
								className='w-[210px] 2xl:w-[260px] '
								initial='hidden'
								animate='visible'
								variants={{
									hidden: {
										opacity: 0,
									},
									visible: {
										opacity: 1,
									},
								}}
								transition={{ duration: 0.3 }}>
								{isScrolled ? (
									<Image
										src='/m-logo.png'
										alt='Logo'
										width={894}
										height={279}
										className='w-[43px] 2xl:w-[53px]'
									/>
								) : (
									<Image
										src='/logo-metaphore-final.png'
										alt='Logo'
										width={894}
										height={279}
										className='w-[210px] 2xl:w-[260px]'
									/>
								)}
							</motion.div>
						</Link>
						<CustomNavigationMenu />

						<div className='mr-[3vw] flex gap-6 text-base 2xl:text-3xl 3xl:mr-[1vw]'>
							<Button
								className='ml-auto'
								variant={'outline'}
								size={'lg'}>
								{' '}
								Contact{' '}
							</Button>
							<Button className='ml-auto' size={'lg'}>
								{' '}
								Réserver{' '}
							</Button>
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default NavBar;
