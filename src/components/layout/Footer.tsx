import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='mt-[100px] flex h-auto items-end bg-primaryOne/30 py-16 '>
			<div className='mx-auto flex h-[90%] w-[100%] flex-col items-center justify-center gap-8 lg:h-[70%] lg:flex-row lg:items-start lg:gap-0'>
				<div className='flex w-[350px] flex-col items-center gap-4 2xl:w-[400px] 3xl:w-[500px]'>
					<Image
						src='/logo-metaphore-final.png'
						alt='logo'
						className='w-[150px] 2xl:w-[200px] '
						width={894}
						height={279}
					/>
					<div className='flex gap-2 font-bold text-blackOne'>
						<h4>Formation</h4>
						<span>|</span>
						<h4>Coaching</h4>
					</div>
					<div className='flex flex-col items-center justify-center text-sm'>
						<span>06 72 71 61 60</span>
						<span>metaphorecoaching@gmail.com</span>
					</div>
				</div>
				<div className='flex flex-col gap-6 lg:w-2/3 lg:gap-8'>
					<h3 className='font-bold uppercase 2xl:text-lg'>
						Mes lieux de rendez-vous
					</h3>
					<div className='flex w-full flex-col justify-between gap-6 lg:flex-row 2xl:gap-12'>
						<div className='flex flex-col gap-4'>
							<h4 className='text-sm font-bold uppercase 2xl:text-lg'>
								Bordeaux
							</h4>
							<div className='flex flex-row-reverse gap-6'>
								<div className='flex flex-col gap-1 text-sm 2xl:text-base'>
									<Link
										href={'https://www.holom.fr/'}
										target='_blank'
										className='underline'>
										HOLOM, Maison des praticiens de bien-être
									</Link>
									<span>91 rue Camille Sauvageau, 33800</span>
								</div>
								<div className='flex justify-center'>
									<Image
										src='/holom.png'
										alt='holom'
										width={200}
										height={200}
										className='w-[40px] lg:mb-4 lg:w-[50px]'
									/>
								</div>
							</div>
							<div className='flex flex-row-reverse gap-6 text-sm lg:hidden lg:items-center 2xl:text-base'>
								<div className='flex flex-1 flex-col gap-1 '>
									<Link
										href={'https://smoosbordeaux.com/'}
										target='_blank'
										className='underline'>
										Smoös, Espace de Co-Therapeuting
									</Link>
									<span> 137 cour de l'Yser, 33800</span>
								</div>
								<div className='flex items-center justify-center'>
									<Image
										src='/smoos.png'
										alt='holom'
										width={200}
										height={200}
										className='w-[40px] lg:w-[70px]'
									/>
								</div>
							</div>
						</div>
						<div className='hidden flex-col gap-4 lg:flex'>
							<h4 className='invisible text-sm font-bold uppercase 2xl:text-lg'>
								A l'Extérieur
							</h4>
							<div className='flex flex-row-reverse justify-start gap-6 text-sm lg:items-center 2xl:text-base'>
								<div className='flex flex-col gap-1'>
									<Link
										href={'https://smoosbordeaux.com/'}
										target='_blank'
										className='underline'>
										Smoös, Espace de Co-Therapeuting
									</Link>
									<span> 137 cour de l'Yser, 33800</span>
								</div>
								<div className='flex items-center justify-center'>
									<Image
										src='/smoos.png'
										alt='holom'
										width={200}
										height={200}
										className='w-[40px] lg:w-[70px]'
									/>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-2 lg:gap-4'>
							<h4 className='text-sm font-bold uppercase 2xl:text-lg'>
								Région bordelaise
							</h4>
							<div className='flex flex-col gap-1 text-sm 2xl:items-center 2xl:text-base'>
								<span>Dans un lieu neutre</span>
								<span>Dans vos locaux</span>
								<span>Coaching nomade</span>
							</div>
						</div>
						<div className='flex flex-col gap-2 lg:gap-4'>
							<h4 className='text-sm font-bold uppercase 2xl:text-lg'>
								En <span className='lg:block 2xl:inline'>Visio</span>
							</h4>
							<div className='flex flex-col gap-1 text-sm 2xl:text-base'>
								<span>En distanciel</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
