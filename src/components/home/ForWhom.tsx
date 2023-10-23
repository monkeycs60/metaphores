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
				className='absolute right-0 w-[200px] '
			/>
			<Image
				src='/discrete-blue-circle.svg'
				width={227}
				height={199}
				alt='yellow empty circle'
				className='absolute right-[20px] top-[200px] w-[200px]'
			/>
			<div className='m-auto w-3/4 font-inter'>
				<div className='flex h-[300px] w-[30vw] flex-col gap-8 bg-primaryOne/20 p-16 2xl:w-[600px]'>
					<div className='flex flex-col gap-3 text-2xl font-bold'>
						<h2>Un coaching pour qui ?</h2>
						<div className='h-[1px] w-full bg-blackOne '></div>
					</div>
					<p>
						Nous offrons un accompagnement sur mesure adapté à vos
						besoins, que vous soyez un particulier, un groupe ou une
						entreprise.
					</p>
				</div>
				<div className='m-auto mt-[-10vh] flex w-full flex-col justify-center gap-4'>
					<div className='m-auto flex w-[82%] translate-y-[-30px] justify-end '>
						<p className='font-caveat text-4xl'>
							Qui mieux que{' '}
							<span className='bg-blackOne px-2 text-white'>vous</span>
							connaît vos solutions
						</p>
					</div>
					<div className='flex w-full justify-center gap-4'>
						<div className='relative h-[20vh] w-[20vw] 2xl:h-[27vh] 2xl:w-[22vw]'>
							<Image
								src='/individuel.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 cursor-pointer items-center justify-center bg-primaryOne/70 p-2 text-white'>
								<Link href={'/coaching/#individuel'}>Individuel</Link>
							</div>
						</div>
						<div className='relative h-[20vh] w-[20vw]  2xl:h-[27vh] 2xl:w-[22vw]'>
							<Image
								src='/collectif.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 cursor-pointer items-center justify-center bg-primaryOne/70 p-2 text-white'>
								<Link href={'/coaching/#collectif'}>Collectif</Link>
							</div>
						</div>
						<div className='relative h-[20vh] w-[20vw]  2xl:h-[27vh] 2xl:w-[22vw]'>
							<Image
								src='/entreprise.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 cursor-pointer items-center justify-center bg-primaryOne/70 p-2 text-white'>
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
