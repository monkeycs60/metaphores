'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='sticky m-auto flex h-[150px] w-[85%] items-center justify-between gap-12 p-6 font-inter '>
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
					<li>
						<Link href='/'>Accueil</Link>
					</li>
					<li>
						<Link href='/about'>A propos</Link>
					</li>

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
						<div
							className={`absolute h-24 w-[300px] flex-col items-start justify-center  ${
								isOpen ? 'flex' : 'hidden'
							}`}>
							<ul
								className={`flex w-[300px] translate-y-[60px] flex-col items-start justify-center gap-6 border-[2px] border-black bg-slate-200 p-3 text-secondaryOne ${
									isOpen ? 'block' : 'hidden'
								}`}>
								<li>
									<Link href='/coaching/individuel'>Individuel</Link>
								</li>
								<li>
									<Link href='/coaching/equipe'>Equipe</Link>
								</li>
								<li>
									<Link href='/coaching/entreprise'>Entreprise</Link>
								</li>
							</ul>
						</div>
					</li>
					<li>Déontologie</li>
					<li>Tarifs</li>
				</ul>
			</nav>

			<div className='flex gap-4 text-3xl'>
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
