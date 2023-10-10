import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const WhoAmI = () => {
	return (
		<div className='relative m-auto my-[10vh] flex h-[600px] w-[86%] justify-center gap-12'>
			<div className='z-20 flex h-[600px] w-[40%] flex-col'>
				<div className='z-20 m-auto flex w-[550px] flex-col gap-10 bg-secondaryOne/20 p-14 shadow-lg shadow-secondaryOne/30 hover:bg-secondaryOne/40'>
					<div className='flex flex-col gap-3'>
						<h2 className='font-caveat text-5xl font-bold'>
							Se redécouvrir
						</h2>
						<div className='h-[1px] w-full bg-secondaryOne/50'></div>
					</div>
					<div className='flex flex-col gap-4'>
						<h3 className='font-inter text-xl'>Qui suis-je ?</h3>
						<div className='flex flex-col gap-3'>
							<p>
								Mon parcours de vie sort souvent des sentiers battus. Il
								a été riche d'expériences et de réussites, mais aussi de
								doutes et d'échecs.
							</p>
							<p>
								J'ai aujourd'hui appris à considérer ces expériences
								comme une richesse inestimable qui m'a permis de
								développer ouverture d'esprit, empathie, recul, aptitude
								à comprendre les autres et bien d'autres choses encore.
							</p>
						</div>
					</div>
					<Button
						size={'md'}
						variant={'secondary'}
						className='flex items-center justify-center gap-2'>
						{' '}
						<span>Mon parcours</span> <ArrowUpRight />
					</Button>
				</div>
			</div>
			<Image
				src='/shapes/full-square-orange.svg'
				alt='Chess'
				width={100}
				height={100}
				className='absolute left-[36%] top-[20%] z-10 w-[50px] rotate-45 3xl:left-[32%]'
			/>
			<div className='relative flex flex-1 flex-col items-center justify-center gap-6 3xl:justify-start'>
				<Image
					src='/chris-profile-light.svg'
					alt='Chess'
					width={789}
					height={1080}
					className='z-10 w-[25vw] 3xl:w-[20vw]'
				/>
				<p className='translate-x-[0%] font-caveat text-4xl text-secondaryOne'>
					Celui qui sait demander est{' '}
					<span className='bg-primaryOne px-2 text-secondaryOne'>
						libre
					</span>{' '}
				</p>
				<Image
					src='/shapes/stray-black-circle.png'
					alt='Chess'
					width={239}
					height={238}
					className='absolute right-[120px] top-[70px] w-[200px] 3xl:right-[170px] 3xl:top-[0px] '
				/>
			</div>
		</div>
	);
};

export default WhoAmI;
