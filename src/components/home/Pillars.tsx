import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const Pillars = () => {
	return (
		<div className='relative flex w-full '>
			<Image
				src='/blackOne-circle.svg'
				alt='black circle'
				className='absolute left-6 w-[150px] '
				width={223}
				height={262}
			/>
			<Image
				src='/yellowCircle.svg'
				alt='yellow circle'
				className='absolute bottom-[-60px] right-[-10px] w-[150px] '
				width={100}
				height={100}
			/>
			<div className='m-auto flex w-3/4 flex-col gap-[60px]'>
				<h2 className='text-center text-2xl font-bold'>
					Les piliers de Métaphore Coaching
				</h2>
				<div className='flex w-full bg-white'>
					<div className='flex w-1/4 flex-col items-center gap-4 bg-primaryOne/5 p-6 text-center'>
						<div className='relative h-[60px] w-[60px]'>
							<Image src='/lock.svg' fill alt='pilier 1' />
						</div>
						<h3 className='text-lg font-bold'>Confidentialité assurée</h3>
						<p className='h-[80px] '>
							Protéger votre identité et le contenu des échanges pour un
							environnement sûr et serein.
						</p>
					</div>
					<div className='flex w-1/4 flex-col items-center gap-4 p-6 text-center'>
						<div className='relative h-[60px] w-[60px]'>
							<Image src='/loupe.svg' fill alt='pilier 2' />
						</div>
						<h3 className='text-lg font-bold'>Transparence totale</h3>
						<p className='h-[80px] '>
							Clarifier chaque étape pour votre tranquillité et votre
							pleine compréhension.
						</p>
					</div>
					<div className='flex w-1/4 flex-col items-center gap-4 bg-primaryOne/5 p-6 text-center'>
						<div className='relative h-[60px] w-[60px]'>
							<Image src='/dove.svg' fill alt='pilier 3' />
						</div>
						<h3 className='text-lg font-bold'>Liberté et autonomie</h3>
						<p className='h-[80px] '>
							Vous avez le pouvoir de décision à chaque étape,
							garantissant votre indépendance.
						</p>
					</div>
					<div className='flex w-1/4 flex-col items-center gap-4 p-6 text-center'>
						<div className='relative h-[60px] w-[60px]'>
							<Image src='/target.svg' fill alt='pilier 4' />
						</div>
						<h3 className='text-lg font-bold'>Précision et dynamisme</h3>
						<p className='h-[80px] '>
							Approcher chaque problème avec exactitude pour un
							accompagnement optimal.
						</p>
					</div>
				</div>
				<Button
					size={'md'}
					className='m-auto flex w-1/3 items-center justify-center gap-2 bg-primaryOne'>
					{' '}
					<span>En savoir plus</span> <ArrowUpRight />
				</Button>
			</div>
		</div>
	);
};

export default Pillars;
