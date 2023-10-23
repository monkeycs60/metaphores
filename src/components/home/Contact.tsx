import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
	return (
		<div className='relative flex w-full '>
			<Image
				src='/twoCircles.svg'
				alt='two circles'
				className='absolute bottom-0 left-6 w-[170px] rotate-180 '
				width={219}
				height={215}
			/>
			<div className='m-auto flex w-3/4 flex-col gap-[80px]'>
				<h2 className='flex justify-center  text-2xl font-bold'>
					Contactez-nous
				</h2>
				<div className='m-auto flex w-3/4 justify-between'>
					<div className='flex h-[150px] w-1/3 flex-col items-center gap-8'>
						<h3 className='text-lg font-bold uppercase'>
							Réseaux sociaux
						</h3>
						<div className='flex h-[50px] justify-between gap-6'>
							<Link href='https://www.instagram.com/metaphore.coaching/'>
								<Image
									src='/insta.svg'
									alt='instagram'
									width={35}
									height={35}
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
								/>
							</Link>
						</div>
					</div>
					<div className='w-[2px] bg-primaryOne '></div>
					<div className='flex h-[150px] w-1/3 flex-col items-center justify-between gap-6'>
						<h3 className='text-lg font-bold uppercase'>Téléphone</h3>
						<div className='flex h-[50px] items-center justify-between'>
							<Image
								src='/phone.svg'
								alt='instagram'
								width={40}
								height={40}
							/>
						</div>
						<p className='text-lg'>06 72 71 61 60</p>
					</div>
					<div className='w-[2px] bg-primaryOne '></div>

					<div className='flex h-[150px] w-1/3 flex-col items-center justify-between gap-6'>
						<h3 className='text-lg font-bold uppercase'>Email</h3>
						<div className='flex h-[50px] items-center justify-between'>
							<Image
								src='/mail.svg'
								alt='instagram'
								width={40}
								height={40}
							/>
						</div>
						<p className='text-lg'>metaphorecoaching@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
