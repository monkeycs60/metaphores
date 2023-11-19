import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const WhatIsIt = () => {
	return (
		<div className='relative w-full' id='what-is'>
			<Image
				src='/circle-black.png'
				alt='Chess'
				width={239}
				height={238}
				className='absolute bottom-[-50px] left-[0px] hidden w-[150px] lg:block'
			/>
			<div className='relative m-auto mt-8 flex flex-col-reverse justify-around gap-12 lg:w-[75%] lg:flex-row'>
				<div className='z-20 flex  flex-col'>
					<div className='z-20 m-auto flex flex-col gap-8 bg-primaryOne/20 p-7 shadow-lg shadow-blackOne/50 lg:w-[500px] lg:gap-4 lg:p-6 2xl:w-[600px] 2xl:gap-10 2xl:p-10'>
						<div className='flex flex-col gap-3'>
							<h2 className='font-caveat text-3xl font-bold 2xl:text-4xl 3xl:text-5xl'>
								Changer les possibles
							</h2>
							<div className='h-[1px] w-full bg-secondaryOne/50'></div>
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='font-inter text-lg 2xl:text-xl'>
								Métaphore coaching, pour quoi ?
							</h3>
							<div className='flex flex-col gap-3 text-sm 2xl:text-base'>
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
						<Link href={'/coaching/vision'} className='w-full'>
							<Button
								size={'md'}
								className='flex w-full items-center justify-center gap-2 bg-primaryOne'>
								{' '}
								<span>Ma vision du coaching</span> <ArrowUpRight />
							</Button>
						</Link>
					</div>
				</div>
				<div className='relative hidden flex-col items-center gap-6 lg:flex lg:justify-center 3xl:justify-center'>
					<Image
						src='/chess-miror.png'
						alt='Chess'
						width={642}
						height={446}
						className='z-10 lg:w-[30vw] 2xl:w-[30vw] 3xl:w-[25vw]'
					/>
					<p className='font-caveat text-2xl text-blackOne lg:translate-x-[-20%] lg:text-3xl 2xl:text-4xl 3xl:translate-x-[-50%]'>
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
