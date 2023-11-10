import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/forme3.png'}
				width={361}
				height={281}
				alt='fleche bas'
				className='absolute -left-2 top-[65vh] w-[160px] 2xl:left-0 2xl:top-[40vh] 2xl:w-[240px] 3xl:w-[300px]'
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 w-[160px] '
			/>
			<div className='m-auto mt-16'>
				<div>
					<div>
						<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
							Ethique et déontologie
						</h1>
						<div className='m-auto mt-2 h-[1px] w-[30%] bg-blackOne'></div>
					</div>
					<div className='containerBordureBriseeFourth mt-14 flex w-screen items-center justify-center lg:h-[32vh] 2xl:h-[27vh] 3xl:h-[20vh]'>
						<div className='mt-2 flex items-center justify-center gap-10'>
							<p className='w-1/2 text-lg italic'>
								Métaphore coaching adhère et respecte les chartes
								déontologiques de la profession (type EMCC).
							</p>
							<Image
								src='/emcc.png'
								alt='charte emcc'
								width={1181}
								height={762}
								className='w-[260px]'
							/>
						</div>
					</div>
					<div className='m-auto mt-16 flex w-[90%] flex-col gap-8 lg:w-[80%] 2xl:w-[70%] 3xl:w-[50%]'>
						<p>Les 4 points suivants sont fondamentales à nos yeux :</p>
						<div className='flex justify-between'>
							<div className='flex w-[20%] flex-col items-center gap-4 '>
								<div className='h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[40px] 2xl:w-[40px]'>
										<Image src='/lock.svg' fill alt='pilier 1' />
									</div>
								</div>
								<div className='h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[40px] 2xl:w-[40px]'>
										<Image src='/loupe.svg' fill alt='pilier 2' />
									</div>
								</div>
								<div className='h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[50px] 2xl:w-[50px]'>
										<Image src='/dove.svg' fill alt='pilier 3' />
									</div>
								</div>
								<div className='h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[55px] 2xl:w-[55px]'>
										<Image src='/balance.svg' fill alt='pilier 4' />
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-4'>
								<p className='h-[70px] '>
									<strong> 1. Confidentialité </strong>: aussi bien sur
									l’identité que sur le contenu des échanges. En tant
									que coach je suis tenu au secret professionnel et
									garde strictement confidentiels le contenu et
									l’identité de la personne accompagnée.
								</p>
								<p className='h-[70px] '>
									<strong> 2. Transparence</strong> : tout sera
									pleinement exposé et explicité pour garantir un
									sentiment de sécurité et de tranquillité.
								</p>
								<p className='h-[70px] '>
									<strong> 3. Liberté</strong> : vous aurez le choix
									plein et entier à tout moment de vos actions pour
									vous garantir une parfaite autonomie et vous laisser
									la responsabilité de vos décisions.
								</p>
								<p className='h-[70px] '>
									<strong> 4. Écologie intérieure</strong> : l’écologie
									intérieure c’est à dire votre équilibre de vie. C’est
									peut-être le plus essentiel. Nous ferons extrêmement
									attention à ce que la démarche soit inscrite dans ce
									cadre afin de vous permettre de ressortir plus
									apaisé.
								</p>
							</div>
						</div>
						<div className='m-auto mt-10'>
							<Image
								src='/trust.jpg'
								alt='confiance'
								width={640}
								height={427}
								className='w-[400px]'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
