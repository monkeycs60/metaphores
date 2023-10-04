import React from 'react';
import { Minus } from 'lucide-react';

const Hero = () => {
	return (
		<div className=' h-full w-full bg-green-300'>
			<div className='flex  flex-col items-center justify-start gap-12 bg-blue-300 text-center text-2xl'>
				<div className='flex justify-start text-start'>
					<h3>
						<span>Accompagner</span> votre cheminement
					</h3>
				</div>
				<div className='flex flex-col justify-center'>
					<h1>Métaphore Coaching</h1>
					<div className='flex gap-4'>
						<h2>Formation</h2>
						<Minus className='rotate-90' />
						<h2>Coaching</h2>
					</div>
				</div>
				<div>
					<h3>
						<span>Développer</span> votre potentiel
					</h3>
				</div>
			</div>
			<div className='chess-bg h-24 w-48 -translate-x-12 rotate-90 rounded-t-full '></div>
		</div>
	);
};

export default Hero;
