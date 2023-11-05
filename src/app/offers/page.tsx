import Image from 'next/image';
import { Check } from 'lucide-react';

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
			<div className='m-auto mt-16 w-[50%]'>
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
				<div className='mt-[80px] flex items-center justify-center gap-[20px] '>
					<div className='relative h-[450px] w-[400px] bg-primaryOne p-12 '>
						<div className='space-y-4'>
							<h2 className='text-center text-2xl font-semibold text-white'>
								Laser
							</h2>
							<p className='flex items-center justify-center gap-2 text-center'>
								<span className='text-2xl font-bold'>3</span> Heures
							</p>
						</div>
						<div className='mt-10 flex flex-col items-start gap-6 text-gray-700'>
							<div className='flex gap-4'>
								<div className='rounded-full bg-white p-1'>
									<Check />
								</div>
								<p>Identifier vos ressources</p>
							</div>
							<div className='flex gap-4'>
								<div className='rounded-full bg-white p-1'>
									<Check />
								</div>
								<p>Optimiser votre organisation</p>
							</div>
							<div className='flex gap-4'>
								<div className='rounded-full bg-white p-1'>
									<Check />
								</div>
								<p>Développer vos potentiels</p>
							</div>
						</div>
						<Image
							src='/prisma1.svg'
							alt='prisma 1'
							width={59}
							height={58}
							className='absolute bottom-4 right-12 w-[80px] '
						/>
						<Image
							src='/prisma2.svg'
							alt='prisma 2'
							width={137}
							height={120}
							className='absolute bottom-16 right-2 w-[60px]'
						/>
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default page;
