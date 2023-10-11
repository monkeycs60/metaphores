'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='sticky m-auto flex h-[150px] w-[90%] items-center justify-between gap-12 p-6 font-inter '>
			<Link href='/'>
				<Image
					src='/logo-meta-transformed.png'
					alt='Logo'
					width={831}
					height={232}
					className='w-[210px] 2xl:w-[260px]'
				/>
			</Link>
			<nav>
				<ul className='flex gap-10 text-base 2xl:text-xl 3xl:gap-12 3xl:text-xl '>
					<li>
						<Link href='/'>Accueil</Link>
					</li>
					<li>
						<Link href='/about'>A propos</Link>
					</li>

					<li
						className='relative flex cursor-pointer items-center gap-2'
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
							className={`absolute z-10 h-24 w-[300px] flex-col items-start justify-center  ${
								isOpen ? 'flex' : 'hidden'
							}`}>
							<ul
								className={`z-10 flex w-[300px] translate-y-[60px] flex-col items-start justify-center gap-6 border-[2px] border-black bg-slate-200 p-3 text-secondaryOne ${
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
