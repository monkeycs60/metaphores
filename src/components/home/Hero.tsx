import React from 'react';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react';

const Hero = () => {
	return (
		<div className='relative flex h-[calc(100vh-150px)] flex-col items-start text-secondaryOne'>
			<div
				className='absolute bottom-[5vh] left-1/2 -translate-x-1/2 bg-primaryOne px-3 py-2 3xl:px-4 
			3xl:py-3  '>
				<ChevronsDown className='h-[40px] w-[40px] text-whiteOne 3xl:h-[50px] 3xl:w-[50px] ' />
			</div>
			<div className='absolute left-[55%] top-[15%] z-10 3xl:left-[53%]'>
				<Image
					src='/elcamino.png'
					alt='Chess'
					width={2169}
					height={1531}
					className='w-[30vw] 3xl:w-[35vw]'
				/>
				<div className='relative flex w-full items-center pl-6 font-caveat text-5xl'>
					<h3 className='text-blackOne'>
						<span className='bg-secondaryOne px-2 '>Accompagner</span>{' '}
						votre cheminement
					</h3>
				</div>
			</div>

			<div className='absolute left-[80%] top-[32%] 3xl:left-[83%] 3xl:top-[35%]'>
				<Image
					src='/shapes/yellow-circle.svg'
					alt='Chess'
					width={100}
					height={100}
					className='w-[220px] rotate-[0deg] 3xl:w-[280px]'
				/>
			</div>
			<div className=''>
				<Image
					src='/shapes/blue-circle.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[23%] left-[2%] z-10 w-[110px] rotate-[120deg]'
				/>
			</div>
			<div className=''>
				<Image
					src='/shapes/half-circle-black.svg'
					alt='Chess'
					width={50}
					height={100}
					className='absolute bottom-[23%] left-[0%] w-[140px] rotate-[0deg]'
				/>
			</div>
			<div className='mt-[5vh] flex w-[65%] flex-col items-center justify-center gap-36 text-center 2xl:mt-[15vh] 3xl:mt-[20vh] 3xl:w-[60%]'>
				<div className='flex w-full justify-start px-[7vw] text-start font-caveat text-5xl text-blackOne'>
					<h3>
						<span className='  bg-primaryOne px-2'>Développer</span> votre
						potentiel
					</h3>
				</div>
				<div className='z-10 flex flex-col items-center justify-center gap-3 font-yeseva text-blackOne'>
					<h1 className='text-5xl 2xl:text-7xl 3xl:text-7xl'>
						Métaphore Coaching
					</h1>
					<div className='flex items-center gap-4 text-3xl 2xl:text-4xl 3xl:text-5xl'>
						<h2>Formation</h2>
						<div className='h-6 w-[3px] bg-black'></div>
						<h2>Coaching</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
