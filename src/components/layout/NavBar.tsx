'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import CustomNavigationMenu from '../ui/CustomNavigationMenu';

const NavBar = () => {
	return (
		<div className='sticky z-[60] m-auto flex h-[150px] w-[90%] items-center justify-between gap-12 p-6 font-inter '>
			<Link href='/'>
				<Image
					src='/logo-metaphore-final.png'
					alt='Logo'
					width={894}
					height={279}
					className='w-[210px] 2xl:w-[260px]'
				/>
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
	);
};

export default NavBar;
