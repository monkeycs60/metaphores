import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const Pillars = () => {
	return (
		<div className='relative flex w-full '>
			<div className='m-auto flex w-3/4 flex-col gap-[60px]'>
				<h2 className='text-center text-2xl font-bold'>
					Les piliers de Métaphore Coaching
				</h2>
				<div className='flex w-full bg-white'>
					<div className='flex w-1/4 flex-col items-center justify-between gap-4 bg-primaryOne/5 p-4 text-center'>
						<Image
							src='/lock.svg'
							width={60}
							height={74}
							alt='pilier 1'
						/>
						<h3>Confidentialité assurée</h3>
						<p>
							Protéger votre identité et le contenu des échanges pour un
							environnement sûr et serein.
						</p>
					</div>
					<div className='flex w-1/4 flex-col items-center justify-between gap-4 p-4 text-center'>
						<Image
							src='/loupe.svg'
							width={60}
							height={74}
							alt='pilier 2'
						/>
						<h3>Transparence totale</h3>
						<p>
							Clarifier chaque étape pour votre tranquillité et votre
							pleine compréhension.
						</p>
					</div>
					<div className='flex w-1/4 flex-col items-center justify-center gap-4 bg-primaryOne/5 p-4 text-center'>
						<Image
							src='/dove.svg'
							width={60}
							height={74}
							alt='pilier 3'
						/>
						<h3>Liberté et autonomie</h3>
						<p>
							Protéger votre identité et le contenu des échanges pour un
							environnement sûr et serein.
						</p>
					</div>
					<div className='flex w-1/4 flex-col items-center justify-center gap-4 text-center'>
						<Image
							src='/target.svg'
							width={60}
							height={74}
							alt='pilier 4'
						/>
						<h3>Confidentialité assurée</h3>
						<p>
							Protéger votre identité et le contenu des échanges pour un
							environnement sûr et serein.
						</p>
					</div>
				</div>
				<Button
					size={'md'}
					className='m-auto flex w-1/3 items-center justify-center gap-2 bg-primaryOne'>
					{' '}
					<span>Ma vision du coaching</span> <ArrowUpRight />
				</Button>
			</div>
		</div>
	);
};

export default Pillars;
