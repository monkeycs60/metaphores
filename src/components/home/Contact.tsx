import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
	return (
		<div className='relative flex w-full '>
			<Image
				src='/twoCircles.svg'
				alt='two circles'
				className='absolute bottom-0 left-6 w-[50px] rotate-180 lg:w-[170px] 3xl:w-[250px] '
				width={219}
				height={215}
			/>
			<div className='m-auto flex flex-col gap-[40px] lg:w-[85%] lg:gap-[80px] 2xl:w-3/4'>
				<h2 className='flex justify-center text-2xl font-bold'>
					Contactez-nous
				</h2>
				<div className='m-auto flex flex-col items-center justify-between gap-4 lg:w-3/4 lg:flex-row lg:items-start lg:gap-0'>
					<div className='flex flex-col items-center gap-3 lg:h-[120px] lg:w-1/3 lg:gap-8 2xl:h-[150px]'>
						<h3 className='text-base font-bold uppercase 2xl:text-lg'>
							Réseaux sociaux
						</h3>
						<div className='flex h-[50px] justify-between gap-6'>
							<Link href='https://www.instagram.com/metaphore.coaching/'>
								<Image
									src='/insta.svg'
									alt='instagram'
									width={35}
									height={35}
									className='h-[30px] w-[30px] 2xl:h-[35px] 2xl:w-[35px] '
								/>
							</Link>
							<Link
								href={
									'https://www.linkedin.com/in/christophe-jacques-2a690523/'
								}>
								<Image
									src='/linkedin.svg'
									alt='linkedin'
									width={35}
									height={35}
									className='h-[30px] w-[30px] 2xl:h-[35px] 2xl:w-[35px] '
								/>
							</Link>
						</div>
					</div>
					<div className='h-[2px] w-full bg-primaryOne lg:w-[2px] '></div>
					<div className='flex flex-col items-center justify-between gap-1 lg:h-[120px] lg:w-1/3 lg:gap-6 2xl:h-[150px]'>
						<h3 className='text-base font-bold uppercase 2xl:text-lg'>
							Téléphone
						</h3>
						<div className='flex h-[50px] items-center justify-between'>
							<Image
								src='/phone.svg'
								alt='instagram'
								width={40}
								height={40}
								className='h-[30px] w-[30px] 2xl:h-[40px] 2xl:w-[40px] '
							/>
						</div>
						<p className='text-base 2xl:text-lg'>06 72 71 61 60</p>
					</div>
					<div className='h-[2px] w-full bg-primaryOne lg:w-[2px] '></div>

					<div className='flex flex-col items-center justify-between gap-1 lg:h-[120px] lg:w-1/3 lg:gap-6 2xl:h-[150px]'>
						<h3 className='text-base font-bold uppercase 2xl:text-lg'>
							Email
						</h3>
						<div className='flex h-[50px] items-center justify-between'>
							<Image
								src='/mail.svg'
								alt='instagram'
								width={40}
								height={40}
								className='h-[30px] w-[30px] 2xl:h-[40px] 2xl:w-[40px] '
							/>
						</div>
						<p className='text-base 2xl:text-lg'>
							metaphorecoaching@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
