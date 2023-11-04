import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/shapes/half-circle-black.svg'}
				width={120}
				height={183}
				alt='cercle orange'
				className='absolute -left-8 top-64 w-[140px] '
			/>
			<Image
				src={'/discrete-blue-circle.svg'}
				width={120}
				height={183}
				alt='cercle orange'
				className='absolute right-32 top-64 w-[80px] '
			/>
			<div className='m-auto mt-24 w-[50%]'>
				<div className=' mb-[40px]'>
					<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
						Les formules
					</h1>
					<div className='m-auto mt-2 h-[1px] w-[20%] bg-blackOne'></div>
				</div>
				<p className='text-lg'>
					Nous avons conçu des offres sur-mesure pour répondre à vos
					aspirations, que vous soyez à la recherche d'une intervention
					ciblée ou d'un accompagnement plus approfondi. Notre flexibilité
					s'étend non seulement à la durée de nos séances, mais aussi à nos
					tarifs, afin de vous offrir le meilleur en fonction de votre
					point de départ et de votre destination souhaitée.
				</p>
				<div className='flex justify-center gap-[20px]'>
					<div>
						<div>
							<h2>Laser</h2>
							<p>
								<span>3</span> Heures
							</p>
						</div>
                        <div>
                            
                        </div>
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default page;
