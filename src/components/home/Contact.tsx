import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
	return (
		<div className='relative flex w-full '>
			<div className='m-auto flex w-3/4 flex-col gap-[60px]'>
				<h2 className='text-center text-2xl font-bold'>Contactez-nous</h2>
				<div className='flex justify-between'>
					<div className='flex h-[170px] flex-col items-center  gap-6 '>
						<h3 className='text-lg font-bold uppercase'>
							Réseaux sociaux
						</h3>
						<div className='flex justify-between gap-6'>
							<Link href='https://www.instagram.com/metaphore.coaching/'>
								<Image
									src='/insta.svg'
									alt='instagram'
									width={50}
									height={50}
								/>
							</Link>
							<Link
								href={
									'https://www.linkedin.com/in/christophe-jacques-2a690523/'
								}>
								<Image
									src='/linkedin.svg'
									alt='linkedin'
									width={50}
									height={50}
								/>
							</Link>
						</div>
					</div>
					<div className='w-[2px] bg-primaryOne '></div>
					<div className='flex h-[170px] flex-col items-center justify-between gap-6'>
						<h3 className='text-lg font-bold uppercase'>Téléphone</h3>
						<div className='flex items-center justify-between'>
							<Image
								src='/phone.svg'
								alt='instagram'
								width={60}
								height={60}
							/>
						</div>
						<p className='text-lg'>06 72 71 61 60</p>
					</div>
					<div className='w-[2px] bg-primaryOne '></div>

					<div className='flex h-[170px] flex-col items-center justify-between gap-6'>
						<h3 className='text-lg font-bold uppercase'>Email</h3>
						<div className='flex items-center justify-between'>
							<Image
								src='/mail.svg'
								alt='instagram'
								width={60}
								height={60}
							/>
						</div>
						<p className='text-lg'>mr.christophejacques@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
