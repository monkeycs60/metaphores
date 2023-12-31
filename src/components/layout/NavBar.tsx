'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import CustomNavigationMenu from '../ui/CustomNavigationMenu';
import useScrollPosition from '@/hooks/useScrollPosition';
import { easeInOut, motion } from 'framer-motion';
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
						className='fixed right-6 top-8 z-[100] h-8 w-8 text-blackOne lg:hidden'
						onClick={toggleHamburgerMenu}
					/>
				)}
			</AnimatePresence>
			<>
				<div
					className={`sticky top-0 z-[60] m-auto my-[20px] hidden h-[80px] lg:block 2xl:my-[15px] 2xl:h-[90px] ${
						isScrolled ? 'w-screen bg-white' : ''
					}
		`}>
					<div
						className={`m-auto flex h-full w-[90%] items-center justify-between gap-12 p-6 font-inter`}>
						<Link
							href='/'
							className='w-[210px] transition-all duration-100 2xl:w-[260px]'>
							<motion.div
								animate={{ scale: isScrolled ? 0.9 : 1 }}
								transition={{ duration: 0.375 }}
								className='h-full w-[210px] transition-all duration-100 2xl:w-[260px]'>
								<AnimatePresence mode='wait'>
									{isScrolled ? (
										<motion.div
											className='h-full w-full'
											animate={{ opacity: 1 }}
											initial={{ opacity: 0 }}
											transition={{ duration: 0.375 }}>
											<Image
												src='/monogramme.svg'
												alt='Logo'
												width={894}
												height={279}
												className='w-[43px] 2xl:w-[53px]'
											/>
										</motion.div>
									) : (
										<motion.div
											className='h-full w-full'
											animate={{ opacity: 1 }}
											initial={{ opacity: 0 }}
											transition={{ duration: 0.375 }}>
											<Image
												src='/Logo.svg'
												alt='Logo'
												width={580}
												height={208}
												className='w-[210px] 2xl:w-[260px]'
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
						<CustomNavigationMenu />

						<div className='mr-[3vw] flex gap-6 text-base 2xl:text-3xl 3xl:mr-[1vw]'>
							<Link href='/contact'>
								<Button
									className='ml-auto'
									variant={'outline'}
									size={'lg'}>
									{' '}
									Contact{' '}
								</Button>
							</Link>
							<Link href={'/reservation'}>
								<Button className='ml-auto' size={'lg'}>
									{' '}
									Réserver{' '}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</>
		</>
	);
};

export default NavBar;
