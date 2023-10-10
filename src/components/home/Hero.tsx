'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='relative flex h-[calc(100vh-150px)] w-full flex-col items-center justify-center'>
			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/elcamino.png'
					alt='Chess'
					width={2169}
					height={1531}
					className='absolute left-[70%] top-[15%] w-[300px] 2xl:w-[400px] 3xl:left-[65%] 3xl:w-[600px]'
				/>
			</motion.div>
			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/shapes/full-circle-light-black.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[22%] left-[43%] w-[60px] rotate-[120deg] 3xl:left-[43%]'
				/>
			</motion.div>
			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/shapes/full-circle-light-orange.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[21%] left-[40%]  w-[80px] rotate-[120deg] 3xl:left-[40%]'
				/>
			</motion.div>
			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/shapes/full-circle-black.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[20%] left-[37%] w-[90px] rotate-[120deg] 3xl:left-[37%]'
				/>
			</motion.div>
			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/shapes/full-circle-orange.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[19%] left-[33%] w-[110px] rotate-[120deg] 3xl:left-[34%]'
				/>
			</motion.div>

			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/shapes/half-circle-full-orange.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute right-[0%] top-[10%] w-[60px] rotate-[180deg]'
				/>
			</motion.div>
			<motion.div
				className=''
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}>
				<Image
					src='/shapes/half-circle-black.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[10%] left-[0%] w-[80px] rotate-[0deg]'
				/>
			</motion.div>
			<div className='flex w-[90%] flex-col items-center justify-center gap-24 text-center'>
				<div className='flex w-full justify-start px-[10%] text-start font-caveat text-4xl'>
					<h3>
						<span className='border-[1px] border-secondaryOne px-2 text-primaryOne '>
							Développer
						</span>{' '}
						votre potentiel
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
				<div className='relative flex w-full items-center justify-end pr-24 font-caveat text-4xl'>
					<h3>
						<span className='  bg-primaryOne px-2 text-secondaryOne'>
							Accompagner
						</span>{' '}
						votre cheminement
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Hero;
