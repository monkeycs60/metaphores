import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className=' relative flex h-full w-full max-w-[100vw] flex-col items-center'>
			<Image
				src='/shapes/medium-rectangle-black.svg'
				alt='Chess'
				width={200}
				height={130}
				className='absolute left-[75%] top-[20%] w-[130px] rotate-[40deg]'
			/>
			<Image
				src='/shapes/half-circle-full-orange.svg'
				alt='Chess'
				width={50}
				height={100}
				className='absolute bottom-[-20%] left-[70%] w-[50px] rotate-[10deg]'
			/>
			<Image
				src='/shapes/light-square-orange.svg'
				alt='Chess'
				width={50}
				height={50}
				className='absolute left-1/2 top-[0px] w-[80px] rotate-[0deg]'
			/>
			<Image
				src='/shapes/light-square-black.svg'
				alt='Chess'
				width={50}
				height={50}
				className='absolute left-1/4 top-1/3 w-[80px] rotate-[120deg]'
			/>
			<Image
				src='/shapes/full-circle-black.svg'
				alt='Chess'
				width={50}
				height={100}
				className='absolute bottom-[0%] left-1/4 z-10 w-[80px] rotate-[120deg]'
			/>
			<Image
				src='/shapes/full-rectangle-orange.svg'
				alt='Chess'
				width={180}
				height={60}
				className='absolute bottom-[-2%] left-[22%] w-[80px] rotate-[120deg]'
			/>
			<Image
				src='/shapes/full-circle-light-black.svg'
				alt='Chess'
				width={50}
				height={100}
				className='absolute bottom-[10%] left-[60%] w-[80px] rotate-[120deg]'
			/>
			<Image
				src='/shapes/full-square-black.svg'
				alt='Chess'
				width={100}
				height={100}
				className='absolute bottom-[-20%] left-[50%] w-[80px] rotate-[80deg]'
			/>
			<Image
				src='/shapes/full-circle-orange.svg'
				alt='Chess'
				width={50}
				height={100}
				className='absolute left-[70%] top-[-50%] w-[80px] rotate-[120deg]'
			/>
			<div className='flex w-[90%] flex-col items-center justify-center gap-24 text-center'>
				<div className='flex w-full justify-start px-[10%] text-start font-caveat text-4xl'>
					<h3>
						<span className='border-[1px] border-secondaryOne px-2 text-primaryOne '>
							Accompagner
						</span>{' '}
						votre cheminement
					</h3>
				</div>
				<div className='z-10 flex flex-col items-center justify-center gap-3 font-yeseva'>
					<h1 className='text-6xl'>Métaphore Coaching</h1>
					<div className='flex items-center gap-4 text-4xl'>
						<h2>Formation</h2>
						<div className='h-6 w-[3px] bg-black'></div>
						<h2>Coaching</h2>
					</div>
				</div>
				<div className='relative flex w-full items-center justify-end font-caveat text-4xl'>
					<h3>
						<span className='  bg-primaryOne px-2 text-secondaryOne'>
							Développer
						</span>{' '}
						votre potentiel
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Hero;
