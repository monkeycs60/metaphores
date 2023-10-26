'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import CustomNavigationMenu from '../ui/CustomNavigationMenu';
import useScrollPosition from '@/hooks/useScrollPosition';
import { motion } from 'framer-motion';

const NavBar = () => {
	const scrollPosition = useScrollPosition();
	const isScrolled = scrollPosition > 50;

	return (
		<div
			className={`sticky top-0 z-[60] m-auto  h-[120px]  2xl:h-[150px] ${
				isScrolled ? 'w-screen bg-white ' : ''
			}
		`}>
			<div className='m-auto flex h-full w-[90%] items-center justify-between gap-12 p-6 font-inter'>
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
						transition={{ duration: 0.9 }}>
						{isScrolled ? (
							<Image
								src='/m-logo.png'
								alt='Logo'
								width={894}
								height={279}
								className='w-[43px] 2xl:w-[93px]'
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
					<Button className='ml-auto' variant={'outline'} size={'lg'}>
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
	);
};

export default NavBar;
