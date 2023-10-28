import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ForWhom = () => {
	return (
		<div className='relative w-full'>
			<Image
				src='/yellow-circle-empty.svg'
				width={569}
				height={556}
				alt='yellow empty circle'
				className='absolute right-0 w-[100px] lg:w-[200px]'
			/>
			<Image
				src='/discrete-blue-circle.svg'
				width={227}
				height={199}
				alt='yellow empty circle'
				className='absolute right-[20px] top-[200px] hidden w-[200px] lg:block'
			/>
			<div className='m-auto font-inter lg:w-3/4'>
				<div className='flex flex-col gap-8 bg-primaryOne/20 p-10 shadow-lg shadow-blackOne/40 lg:h-[300px] lg:w-[450px] lg:p-16 2xl:h-[300px] 2xl:w-[600px] 3xl:h-[350px]'>
					<div className='flex flex-col gap-3 text-xl font-bold lg:text-2xl'>
						<h2>Un coaching pour qui ?</h2>
						<div className='h-[1px] w-full bg-blackOne '></div>
					</div>
					<p className='text-sm lg:text-base'>
						Nous offrons un accompagnement sur mesure adapté à vos
						besoins, que vous soyez un particulier, un groupe ou une
						entreprise.
					</p>
				</div>
				<div className='m-auto mt-10 flex w-full flex-col justify-center gap-4 lg:mt-[-10vh]'>
					<div className='m-auto hidden w-[82%] translate-y-[-30px] justify-end lg:flex '>
						<p className='font-caveat text-3xl 2xl:text-4xl'>
							Qui mieux que{' '}
							<span className='bg-blackOne px-2 text-white'>vous</span>
							connaît vos solutions ?
						</p>
					</div>
					<div className='flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-start'>
						<div className='relative h-[22vh] w-3/4 lg:h-[27vh] lg:w-[22vw]'>
							<Image
								src='/individuel.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 cursor-pointer items-center justify-center bg-primaryOne p-2 font-semibold text-blackOne outline-double hover:bg-blackOne hover:text-primaryOne 2xl:bottom-7 3xl:bottom-12 3xl:text-lg '>
								<Link href={'/coaching/#individuel'}>Individuel</Link>
							</div>
						</div>
						<div className='relative h-[22vh] w-3/4 lg:h-[27vh] lg:w-[22vw]'>
							<Image
								src='/collectif.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 cursor-pointer items-center justify-center bg-primaryOne p-2 font-semibold text-blackOne outline-double hover:bg-blackOne hover:text-primaryOne 2xl:bottom-7 3xl:bottom-12 3xl:text-lg '>
								<Link href={'/coaching/#collectif'}>Collectif</Link>
							</div>
						</div>
						<div className='relative h-[22vh] w-3/4 lg:h-[27vh] lg:w-[22vw]'>
							<Image
								src='/entreprise.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 cursor-pointer items-center justify-center bg-primaryOne p-2 font-semibold text-blackOne outline-double hover:bg-blackOne hover:text-primaryOne 2xl:bottom-7 3xl:bottom-12 3xl:text-lg '>
								<Link href={'/coaching/#entreprise'}>Entreprise</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForWhom;
