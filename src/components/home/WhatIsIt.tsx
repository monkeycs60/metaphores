import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const WhatIsIt = () => {
	return (
		<div className='relative m-auto flex w-[75%] justify-around gap-12'>
			<div className='z-20 flex h-[600px] flex-col'>
				<div className='z-20 m-auto flex w-[550px] flex-col gap-10 bg-primaryOne/30 p-10 shadow-lg shadow-secondaryOne/50 hover:bg-primaryOne/50'>
					<div className='flex flex-col gap-3'>
						<h2 className='font-caveat text-5xl font-bold'>
							Changer les possibles
						</h2>
						<div className='h-[1px] w-full bg-secondaryOne/50'></div>
					</div>
					<div className='flex flex-col gap-4'>
						<h3 className='font-inter text-xl'>
							Métaphore coaching, c'est quoi ?
						</h3>
						<div className='flex flex-col gap-3'>
							<p>
								Nous créons ensemble un chemin personnalisé pour
								atteindre votre objectif final en prenant en compte
								votre univers personnel et vos images mentales.
							</p>
							<p>
								Le coaching n'a pas pour but de vous transformer mais de
								vous aider à trouver des solutions adaptées à qui vous
								êtes et mieux vivre.
							</p>
						</div>
					</div>
					<Button
						size={'md'}
						className='flex items-center justify-center gap-2'>
						{' '}
						<span>Ma vision du coaching</span> <ArrowUpRight />
					</Button>
				</div>
			</div>
			<div className='relative flex flex-col items-center justify-center gap-6 3xl:justify-center'>
				<Image
					src='/chess-miror.png'
					alt='Chess'
					width={642}
					height={446}
					className='z-10 w-[20vw]'
				/>
				<p className='translate-x-[-50%] font-caveat text-4xl text-secondaryOne'>
					Trouver du{' '}
					<span className='bg-secondaryOne px-2 text-whiteOne'>sens</span>{' '}
					et en donner
				</p>
				<Image
					src='/shapes/zwig-orange-circle.png'
					alt='Chess'
					width={239}
					height={238}
					className='absolute right-[120px] top-[70px] w-[200px] 3xl:right-[-100px] 3xl:top-[50px] '
				/>
			</div>
		</div>
	);
};

export default WhatIsIt;
