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
				className='absolute -right-12 bottom-20 hidden w-[160px] lg:block '
			/>
			<div className='m-auto mt-24 lg:mt-16'>
				<div>
					<div>
						<h1 className='flex justify-center text-3xl font-bold text-blackOne'>
							Ethique et déontologie
						</h1>
						<div className='m-auto mt-2 h-[1px] w-2/3 bg-blackOne lg:w-[30%]'></div>
					</div>
					<div className='containerBordureBriseeFourth mt-14 flex w-screen items-center justify-center p-12 lg:h-[32vh] lg:p-0 2xl:h-[27vh] 3xl:h-[20vh]'>
						<div className='mt-2 flex flex-col-reverse items-center justify-center lg:flex-row lg:gap-10'>
							<p className='translate-x-8 p-8 italic lg:w-1/2 lg:translate-x-0 lg:p-0 lg:text-lg'>
								Métaphore coaching adhère et respecte les chartes
								déontologiques de la profession (type EMCC).
							</p>
							<Image
								src='/emcc.png'
								alt='charte emcc'
								width={1181}
								height={762}
								className='w-[200px] lg:w-[260px]'
							/>
						</div>
					</div>
					<div className='m-auto mt-16 flex w-[90%] flex-col gap-8 text-lg lg:w-[80%] lg:text-base 2xl:w-[70%] 3xl:w-[50%]'>
						<p className='text-center lg:text-base'>
							Les 4 points suivants sont fondamentales à nos yeux :
						</p>
						<div className='flex justify-between gap-6 lg:gap-0'>
							<div className='flex flex-col items-center gap-4 lg:w-[20%] '>
								<div className='h-[250px] lg:h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[40px] 2xl:w-[40px]'>
										<Image src='/lock.svg' fill alt='pilier 1' />
									</div>
								</div>
								<div className='h-[120px] lg:h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[40px] 2xl:w-[40px]'>
										<Image src='/loupe.svg' fill alt='pilier 2' />
									</div>
								</div>
								<div className='h-[210px] lg:h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[50px] 2xl:w-[50px]'>
										<Image src='/dove.svg' fill alt='pilier 3' />
									</div>
								</div>
								<div className='lg:h-[70px]'>
									<div className='relative h-[35px] w-[35px] lg:h-[45px] lg:w-[45px] 2xl:h-[55px] 2xl:w-[55px]'>
										<Image src='/balance.svg' fill alt='pilier 4' />
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-8 lg:gap-4'>
								<p className='lg:h-[70px] '>
									<strong> 1. Confidentialité </strong>: aussi bien sur
									l’identité que sur le contenu des échanges. En tant
									que coach je suis tenu au secret professionnel et
									garde strictement confidentiels le contenu et
									l’identité de la personne accompagnée.
								</p>
								<p className='lg:h-[70px] '>
									<strong> 2. Transparence</strong> : tout sera
									pleinement exposé et explicité pour garantir un
									sentiment de sécurité et de tranquillité.
								</p>
								<p className='lg:h-[70px] '>
									<strong> 3. Liberté</strong> : vous aurez le choix
									plein et entier à tout moment de vos actions pour
									vous garantir une parfaite autonomie et vous laisser
									la responsabilité de vos décisions.
								</p>
								<p className='lg:h-[70px] '>
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
