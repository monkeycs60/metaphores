import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const WhoAmI = () => {
	return (
		<>
			<div className='relative m-auto flex w-3/4 items-center justify-center lg:hidden'>
				<Image
					src='/chris-profile-light.svg'
					alt='Chess'
					width={789}
					height={1080}
					className='z-10'
				/>
				<Image
					src='/circle-black.png'
					alt='Chess'
					width={239}
					height={238}
					className='absolute right-[0px] top-[-50px] w-[150px]'
				/>
			</div>
			<div className='containerBordureBrisee relative m-auto flex w-screen justify-center lg:h-[60%]'>
				<div className='flex flex-col items-center justify-around lg:w-[75%] lg:flex-row lg:gap-12 '>
					<Image
						src='/shapes/full-circle-light-black.svg'
						alt='Chess'
						width={100}
						height={100}
						className='absolute right-[-7%] top-[25%] hidden w-[250px] lg:block 3xl:right-[-4%]'
					/>
					<Image
						src='/shapes/full-circle-black.svg'
						alt='Chess'
						width={100}
						height={100}
						className='absolute right-[3%] top-[50%] hidden w-[70px] rotate-90 lg:block'
					/>

					<div className='relative flex flex-col items-center justify-center gap-6 3xl:justify-start'>
						<Image
							src='/chris-profile-light.webp'
							alt='Chess'
							width={789}
							height={1080}
							className='absolute z-10 hidden w-[60vw] lg:static lg:block lg:w-[20vw] 2xl:w-[17vw] 3xl:w-[13vw]'
						/>
						<p className='hidden translate-x-[0%] font-caveat text-3xl text-blackOne lg:block 2xl:text-4xl'>
							Celui qui sait demander est{' '}
							<span className='bg-secondary px-2 text-whiteOne'>
								libre
							</span>{' '}
						</p>
					</div>
					<div className='z-20 flex h-[600px] flex-col'>
						<div className='z-20 m-auto flex flex-col gap-10 bg-whiteOne p-7 text-blackOne shadow-lg shadow-blackOne/40 lg:w-[500px] lg:gap-4 lg:p-6 2xl:w-[600px] 2xl:gap-10 2xl:p-10'>
							<div className='flex flex-col gap-3'>
								<h2 className='font-caveat text-3xl font-bold 2xl:text-4xl 3xl:text-5xl'>
									Se redécouvrir
								</h2>
								<div className='h-[1px] w-full bg-secondaryOne'></div>
							</div>
							<div className='flex flex-col gap-4'>
								<h3 className='font-inter text-lg 2xl:text-xl'>
									Qui suis-je ?
								</h3>
								<div className='flex flex-col gap-3 text-sm 2xl:text-base'>
									<p>
										Mon parcours de vie sort souvent des sentiers
										battus. Il a été riche d'expériences et de
										réussites, mais aussi de doutes et d'échecs.
									</p>
									<p>
										J'ai aujourd'hui appris à considérer ces
										expériences comme une richesse qui m'a permis de
										développer ouverture d'esprit, empathie, recul,
										aptitude à comprendre les autres et bien d'autres
										choses encore.
									</p>
								</div>
							</div>
							<Link href={'/about'} className='w-full'>
								<Button
									size={'md'}
									className='flex w-full items-center justify-center gap-2 bg-primaryOne'>
									{' '}
									<span>Mon parcours</span> <ArrowUpRight />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhoAmI;
