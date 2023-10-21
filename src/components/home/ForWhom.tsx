import Image from 'next/image';
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
				<div className='flex w-[30vw] flex-col gap-8 bg-primaryOne/20 p-16'>
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
				<div className='m-auto flex w-full translate-y-[-10vh] flex-col justify-center gap-4'>
					<div className='m-auto flex w-[82%] justify-end'>
						<p className='font-caveat text-4xl'>
							Changer les{' '}
							<span className='bg-blackOne px-2 text-white'>
								possibles
							</span>
						</p>
					</div>
					<div className='flex w-full justify-center gap-4'>
						<div className='relative h-[20vh] w-[20vw]'>
							<Image
								src='/individuel.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 items-center justify-center bg-primaryOne/70 p-2 text-white'>
								<p>Individuel</p>
							</div>
						</div>
						<div className='relative h-[20vh] w-[20vw]'>
							<Image
								src='/collectif.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 items-center justify-center bg-primaryOne/70 p-2 text-white'>
								<p>Collectif</p>
							</div>
						</div>
						<div className='relative h-[20vh] w-[20vw]'>
							<Image
								src='/entreprise.png'
								fill
								alt='coaching individuel'
								className='object-cover'
							/>
							<div className='absolute bottom-4 left-1/2 z-20 flex h-[60px] w-[40%] -translate-x-1/2 items-center justify-center bg-primaryOne/70 p-2 text-white'>
								<p>Entreprise</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForWhom;
