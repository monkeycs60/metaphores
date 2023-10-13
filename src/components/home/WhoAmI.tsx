import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

const WhoAmI = () => {
	return (
		<div className='containerBordureBrisee relative m-auto flex h-[60%] w-screen justify-center'>
			<div className='flex w-[75%] items-center justify-around gap-12 '>
				<Image
					src='/shapes/full-circle-light-black.svg'
					alt='Chess'
					width={100}
					height={100}
					className='absolute right-[-7%] top-[25%] w-[250px] 3xl:right-[-4%]'
				/>
				<Image
					src='/shapes/full-circle-black.svg'
					alt='Chess'
					width={100}
					height={100}
					className='absolute right-[3%] top-[50%] w-[70px] rotate-90'
				/>

				<div className='relative flex flex-col items-center justify-center gap-6 3xl:justify-start'>
					<Image
						src='/chris-profile-light.svg'
						alt='Chess'
						width={789}
						height={1080}
						className='z-10 w-[18vw] 3xl:w-[16vw]'
					/>
					<p className='translate-x-[0%] font-caveat text-4xl text-blackOne'>
						Celui qui sait demander est{' '}
						<span className='bg-secondary px-2 text-whiteOne'>libre</span>{' '}
					</p>
				</div>
				<div className='z-20 flex h-[600px] flex-col'>
					<div className='z-20 m-auto flex w-[600px] flex-col gap-10 bg-whiteOne p-10 text-blackOne shadow-lg shadow-blackOne/40 hover:bg-whiteOne/90'>
						<div className='flex flex-col gap-3'>
							<h2 className='font-caveat text-4xl font-bold 3xl:text-5xl'>
								Se redécouvrir
							</h2>
							<div className='h-[1px] w-full bg-secondaryOne'></div>
						</div>
						<div className='flex flex-col gap-4'>
							<h3 className='font-inter text-xl'>Qui suis-je ?</h3>
							<div className='flex flex-col gap-3'>
								<p>
									Mon parcours de vie sort souvent des sentiers battus.
									Il a été riche d'expériences et de réussites, mais
									aussi de doutes et d'échecs.
								</p>
								<p>
									J'ai aujourd'hui appris à considérer ces expériences
									comme une richesse inestimable qui m'a permis de
									développer ouverture d'esprit, empathie, recul,
									aptitude à comprendre les autres et bien d'autres
									choses encore.
								</p>
							</div>
						</div>
						<Button
							size={'md'}
							variant={'secondary'}
							className='flex items-center justify-center gap-2 bg-primaryOne'>
							{' '}
							<span>Mon parcours</span> <ArrowUpRight />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoAmI;
