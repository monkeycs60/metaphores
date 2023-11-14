import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/twoCircles.svg'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute left-0 top-64 hidden w-[200px] lg:block '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 hidden w-[160px] lg:block'
			/>
			<div className='parallax relative h-screen w-screen pt-16'>
				<h1 className='flex w-screen justify-center bg-primaryOne p-4 text-center text-3xl font-bold  text-blackOne lg:text-left'>
					Coaching Collectif
				</h1>
				<div className='absolute bottom-[35vh] right-24 w-1/3 font-caveat text-4xl text-primaryOne'>
					<p>
						Nous vous proposons des devis sur mesure adaptés à votre
						situations et pouvons intervenir en co-animation.
					</p>
				</div>
				<div className='flex flex-col gap-[75px] p-16 lg:p-24'>
					<div></div>
				</div>
			</div>
			<div className='flex justify-between'>
				<div>
					<p>
						L'efficacité d'une équipe dépend de la synergie entre les
						talents individuels de ses membres et de leur capacité
						collective à opérer de manière efficiente et coordonnée. 
					</p>
					<p>
						Le coaching d'équipe, à l'instar du coaching individuel, joue
						un rôle crucial en intégrant la préparation mentale pour
						renforcer l'unité du groupe et réaliser les objectifs fixés.
					</p>
				</div>
			</div>
		</div>
	);
};

export default page;
