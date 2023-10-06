'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='sticky m-auto flex h-[150px] w-[85%] items-center justify-between gap-12 p-6 '>
			<Link href='/'>
				<Image
					src='/logo-svg.svg'
					alt='Logo'
					width={627}
					height={205}
					className='w-[260px]'
				/>
			</Link>
			<nav>
				<ul className='flex gap-8 uppercase'>
					<li>Accueil</li>
					<li>A propos</li>
					<li
						className='relative flex cursor-pointer gap-1'
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}>
						<span>Le coaching</span>
						<span className=''>
							{isOpen ? (
								<ChevronUp className='transition-all duration-300 ease-in-out' />
							) : (
								<ChevronUp className='rotate-180 transition-all duration-300 ease-in-out' />
							)}
						</span>
						<ul
							className={`absolute -bottom-28 flex h-24 w-[300px] flex-col items-center justify-center gap-2 bg-red-300 text-secondaryOne ${
								isOpen ? 'block' : 'hidden'
							}`}>
							<li>Sous-menu 3</li>
							<li>Sous-menu 4</li>
						</ul>
					</li>
					<li>Déontologie</li>
					<li>Tarifs</li>
				</ul>
			</nav>

			<div className='flex gap-4'>
				<Button className='ml-auto' variant={'outline'}>
					{' '}
					Contact{' '}
				</Button>
				<Button className='ml-auto'> Réserver </Button>
			</div>
		</div>
	);
};

export default NavBar;
