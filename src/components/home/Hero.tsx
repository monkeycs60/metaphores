import React from 'react';
import Image from 'next/image';
import { ChevronsDown } from 'lucide-react';

const Hero = () => {
	return (
		<div className='relative flex h-[100vh] flex-col items-start gap-8 text-secondaryOne lg:h-[calc(100vh-120px)] lg:gap-0 2xl:h-[calc(100vh-150px)]'>
			<div className='mt-[9vh] flex flex-col-reverse items-center justify-center text-center lg:mt-[5vh] lg:w-[65%] lg:flex-col lg:gap-36 2xl:mt-[15vh] 3xl:mt-[20vh] 3xl:w-[60%]'>
				<div className='flex w-full justify-start px-[7vw] text-start font-caveat text-2xl text-blackOne lg:text-3xl 2xl:text-4xl 3xl:text-5xl'>
					<h3 className='hidden lg:block'>
						<span className='bg-primaryOne px-2'>Développer</span> votre
						potentiel
					</h3>
				</div>
				<div className='z-10 flex flex-col items-center justify-center gap-3 font-yeseva text-blackOne'>
					<h1 className='text-4xl lg:text-5xl 2xl:text-7xl 3xl:text-7xl'>
						Métaphore Coaching
					</h1>
					<div className='flex items-center gap-4 text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl'>
						<h2>Formation</h2>
						<div className='h-6 w-[3px] bg-black'></div>
						<h2>Coaching</h2>
					</div>
				</div>
			</div>
			<div
				className='absolute bottom-14 left-1/2 -translate-x-1/2 bg-primaryOne px-3 py-2 lg:bottom-[5vh] 3xl:px-4 
			3xl:py-3  '>
				<ChevronsDown className='h-[30px] w-[30px] text-whiteOne lg:h-[40px] lg:w-[40px] 3xl:h-[50px] 3xl:w-[50px] ' />
			</div>
			<div className='left-[55%] top-[15%] z-30 flex flex-col gap-3 lg:absolute lg:block 3xl:left-[53%]'>
				<div className='flex justify-end pr-6 font-caveat text-2xl text-blackOne'>
					<h3 className='lg:hidden'>
						<span className='z-50 bg-primaryOne px-2'>Développer</span>{' '}
						votre potentiel
					</h3>
				</div>
				<Image
					src='/elcamino.png'
					alt='Chess'
					width={2169}
					height={1531}
					className='m-auto mt-4 w-[90%] lg:mt-0 lg:w-[30vw] 3xl:w-[35vw]'
				/>
				<div className='relative flex w-full items-center pl-6 font-caveat text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl'>
					<h3 className='text-blackOne'>
						<span className='bg-secondaryOne px-2'>Accompagner</span>{' '}
						votre cheminement
					</h3>
				</div>
			</div>

			<div className='absolute left-[80%] top-[32%] 3xl:left-[83%] 3xl:top-[35%]'>
				<Image
					src='/shapes/yellow-circle.svg'
					alt='yellow circle'
					width={100}
					height={100}
					className='w-[220px] rotate-[0deg] 3xl:w-[280px]'
				/>
			</div>
			<div className=''>
				<Image
					src='/shapes/blue-circle.svg'
					alt='blue circle'
					width={50}
					height={100}
					className='absolute -left-8 top-8 -z-10 w-[110px] rotate-[120deg] lg:bottom-[23%] lg:left-[2%]'
				/>
			</div>
			<div className=''>
				<Image
					src='/shapes/half-circle-black.svg'
					alt='black circle'
					width={50}
					height={100}
					className='absolute bottom-[23%] left-[0%] hidden w-[140px] rotate-[0deg] lg:block'
				/>
			</div>
		</div>
	);
};

export default Hero;
