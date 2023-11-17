import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Pillars = () => {
	return (
		<div className='relative flex w-full '>
			<Image
				src='/blackOne-circle.svg'
				alt='black circle'
				className='absolute left-6 top-8 w-[70px] lg:top-0 lg:w-[150px] '
				width={223}
				height={262}
			/>
			<Image
				src='/yellowCircle.svg'
				alt='yellow circle'
				className='absolute bottom-[-50px] right-[10px] w-[130px] lg:bottom-[-60px] lg:right-[-10px] lg:w-[150px] '
				width={100}
				height={100}
			/>
			<div className='m-auto flex flex-col gap-[40px] lg:w-3/4 lg:gap-[60px] 3xl:gap-[80px] '>
				<h2 className='text-center text-xl font-bold lg:text-2xl'>
					Les piliers de Métaphore Coaching
				</h2>
				<div className='flex w-full flex-wrap bg-white lg:flex-nowrap'>
					<div className='flex w-1/2 flex-col items-center gap-4 bg-primaryOne/5 p-6 text-center lg:w-1/4'>
						<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[60px] 2xl:w-[60px]'>
							<Image src='/lock.svg' fill alt='pilier 1' />
						</div>
						<h3 className='font-bold lg:text-lg'>
							Confidentialité assurée
						</h3>
						<p className='h-[80px] text-xs lg:text-sm 2xl:text-base'>
							Protéger votre identité et le contenu des échanges pour un
							environnement sûr et serein.
						</p>
					</div>
					<div className='flex w-1/2 flex-col items-center gap-4 p-6 text-center lg:w-1/4'>
						<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[60px] 2xl:w-[60px]'>
							<Image src='/loupe.svg' fill alt='pilier 2' />
						</div>
						<h3 className='font-bold lg:text-lg'>Transparence totale</h3>
						<p className='h-[80px] text-xs lg:text-sm 2xl:text-base'>
							Clarifier chaque étape pour votre tranquillité et votre
							pleine compréhension.
						</p>
					</div>
					<div className='flex w-1/2 flex-col items-center gap-4 p-6 text-center lg:w-1/4 lg:bg-primaryOne/5'>
						<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[60px] 2xl:w-[60px]'>
							<Image src='/dove.svg' fill alt='pilier 3' />
						</div>
						<h3 className='font-bold lg:text-lg'>Liberté et autonomie</h3>
						<p className='h-[80px] text-xs lg:text-sm 2xl:text-base'>
							Vous avez le pouvoir de décision à chaque étape,
							garantissant votre indépendance.
						</p>
					</div>
					<div className='flex w-1/2 flex-col items-center gap-4 bg-primaryOne/5 p-6 text-center lg:w-1/4 lg:bg-white'>
						<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[60px] 2xl:w-[60px]'>
							<Image src='/target.svg' fill alt='pilier 4' />
						</div>
						<h3 className='font-bold lg:text-lg'>
							Précision et dynamisme
						</h3>
						<p className='h-[80px] text-xs lg:text-sm 2xl:text-base'>
							Approcher chaque problème avec exactitude pour un
							accompagnement optimal.
						</p>
					</div>
				</div>
				<Link href='/deontology'>
					<Button
						size={'md'}
						className='m-auto flex w-3/4 items-center justify-center gap-2 bg-primaryOne lg:w-1/3'>
						{' '}
						<span>En savoir plus</span> <ArrowUpRight />
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Pillars;
