import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const WhatIsIt = () => {
	return (
		<div className='relative w-full'>
			<Image
				src='/circle-black.png'
				alt='Chess'
				width={239}
				height={238}
				className='absolute bottom-[-50px] left-[0px] w-[150px]'
			/>
			<div className='relative m-auto mt-8 flex w-[75%] justify-around gap-12'>
				<div className='z-20 flex  flex-col'>
					<div className='z-20 m-auto flex w-[500px] flex-col gap-8 bg-primaryOne/20 p-7 shadow-lg shadow-blackOne/50 hover:bg-primaryOne/30 2xl:w-[600px] 2xl:gap-10 2xl:p-10'>
						<div className='flex flex-col gap-3'>
							<h2 className='font-caveat text-4xl font-bold 3xl:text-5xl'>
								Changer les possibles
							</h2>
							<div className='h-[1px] w-full bg-secondaryOne/50'></div>
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='font-inter text-xl'>
								Métaphore coaching, pour quoi ?
							</h3>
							<div className='flex flex-col gap-3'>
								<p>
									Nous créons ensemble un chemin personnalisé pour
									atteindre votre objectif final en prenant en compte
									votre univers personnel et vos images mentales.
								</p>
								<p>
									Le coaching n'a pas pour but de vous transformer mais
									de vous aider à trouver des solutions adaptées à qui
									vous êtes et mieux vivre.
								</p>
							</div>
						</div>
						<Button
							size={'md'}
							className='flex items-center justify-center gap-2 bg-primaryOne'>
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
						className='z-10 w-[25vw] 2xl:w-[30vw] 3xl:w-[25vw]'
					/>
					<p className='translate-x-[-20%] font-caveat text-4xl text-blackOne 3xl:translate-x-[-50%]'>
						Trouver du{' '}
						<span className='bg-blackOne px-2 text-whiteOne'>sens</span>{' '}
						et en donner
					</p>
					<Image
						src='/circle-blue.png'
						alt='Chess'
						width={239}
						height={238}
						className='absolute right-[-130px] top-[0px] w-[230px]'
					/>
				</div>
			</div>
		</div>
	);
};

export default WhatIsIt;
