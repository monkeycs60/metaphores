import React from 'react';
import { Minus } from 'lucide-react';

const Hero = () => {
	return (
		<div className=' h-full w-full'>
			<div className='flex flex-col items-center justify-start gap-24 text-center'>
				<div className='flex w-full justify-start px-[25%] text-start font-caveat text-4xl'>
					<h3>
						<span className='text-primaryOne'>Accompagner</span> votre
						cheminement
					</h3>
				</div>
				<div className='flex flex-col items-center justify-center gap-3'>
					<h1 className='text-6xl'>Métaphore Coaching</h1>
					<div className='flex items-center gap-4 text-4xl'>
						<h2>Formation</h2>
						<div className='h-6 w-[3px] bg-black'></div>
						<h2>Coaching</h2>
					</div>
				</div>
				<div className='flex w-full justify-end px-[25%] font-caveat text-4xl'>
					<h3>
						<span className='highlighted rounded-xl text-secondaryOne'>
							Développer
						</span>{' '}
						votre potentiel
					</h3>
				</div>
			</div>
			<div className='chess-bg h-48 w-96 -translate-x-12 rotate-90 rounded-t-full'></div>
		</div>
	);
};

export default Hero;
