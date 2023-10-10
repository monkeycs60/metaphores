import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const WhatIsIt = () => {
	return (
		<div className='m-auto my-[10vh] flex h-[600px] w-[86%] justify-center gap-12'>
			<div className='flex flex-1 flex-col items-center justify-center gap-6 3xl:justify-start'>
				<Image
					src='/chess-miror.png'
					alt='Chess'
					width={642}
					height={446}
					className='w-[25vw] '
				/>
				<p className='translate-x-[-50%] font-caveat text-4xl text-secondaryOne'>
					Celui qui sait demander est{' '}
					<span className='bg-secondaryOne px-2 text-whiteOne'>
						{' '}
						libre
					</span>
				</p>
			</div>
			<div className='flex h-[600px] w-[40%] flex-col'>
				<div className='m-auto flex w-[500px] flex-col gap-10 bg-primaryOne/40 p-10'>
					<div className='flex flex-col gap-3'>
						<h2 className='font-caveat text-5xl font-bold'>
							Changer les possibles
						</h2>
						<div className='h-[1px] w-full bg-secondaryOne/50'></div>
					</div>
					<div className='flex flex-col gap-4'>
						<h3 className='font-inter text-xl'>
							Métaphore coaching, pour quoi ?
						</h3>
						<div>
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
					<Button size={'md'}>En savoir plus</Button>
				</div>
			</div>
		</div>
	);
};

export default WhatIsIt;
