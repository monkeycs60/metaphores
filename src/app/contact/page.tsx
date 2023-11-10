import Contact from '@/components/home/Contact';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/shapes/half-circle-black.svg'}
				width={120}
				height={183}
				alt='cercle orange'
				className='absolute -left-8 top-64 w-[90px] lg:w-[140px] '
			/>
			<Image
				src={'/discrete-blue-circle.svg'}
				width={120}
				height={183}
				alt='cercle orange'
				className='absolute right-32 top-64 hidden w-[80px] lg:block '
			/>
			<div className='m-auto mt-16 w-[90%] lg:w-[80%] 2xl:w-[70%] 3xl:w-[60%]'>
				<div className=' mb-[80px]'>
					<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
						Contactez-moi
					</h1>
					<div className='m-auto mt-2 h-[1px] w-[20%] bg-blackOne'></div>
				</div>
				<div className='m-auto flex flex-col items-center justify-between gap-4 lg:w-3/4 lg:flex-row lg:items-start lg:gap-0'>
					<div className='flex flex-col items-center gap-3 lg:h-[120px] lg:w-1/3 lg:gap-8 2xl:h-[150px]'>
						<h3 className='text-sm font-bold uppercase lg:text-base 2xl:text-lg'>
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
					<div className='h-[1px] w-1/2 bg-primaryOne lg:h-[140px] lg:w-[1px] '></div>
					<div className='flex flex-col items-center justify-between gap-1 lg:h-[120px] lg:w-1/3 lg:gap-6 2xl:h-[150px]'>
						<h3 className='text-sm font-bold uppercase lg:text-base 2xl:text-lg'>
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
					<div className='h-[1px] w-1/2 bg-primaryOne lg:h-[140px] lg:w-[1px] '></div>

					<div className='flex flex-col items-center justify-between gap-1 lg:h-[120px] lg:w-1/3 lg:gap-6 2xl:h-[150px]'>
						<h3 className='text-sm font-bold uppercase lg:text-base 2xl:text-lg'>
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
				<section className='mt-[40px] bg-white dark:bg-gray-900 '>
					<div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
						<p className='mb-8 text-center font-light text-gray-900 dark:text-gray-400 sm:text-lg lg:mb-16'>
							Une question, une demande de réservation, un devis ?
							N'hésitez pas à me contacter en remplissant le formulaire
							ci-dessous. Je vous répondrai dans les plus brefs délais.
						</p>
						<form action='#' className='space-y-8 font-inter'>
							<div>
								<label
									htmlFor='email'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
									Votre adresse mail
								</label>
								<input
									type='email'
									id='email'
									className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primaryOne focus:ring-primaryOne dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
									placeholder='michel@exemple.com'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='subject'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
									Objet
								</label>
								<input
									type='text'
									id='subject'
									className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primaryOne focus:ring-primaryOne dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
									placeholder='Comment puis-je vous aider ?'
									required
								/>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'>
									Votre message
								</label>
								<textarea
									id='message'
									rows={6}
									className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primaryOne focus:ring-primaryOne dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
									placeholder='Ecrivez ici votre commentaire...'></textarea>
							</div>
							<button
								type='submit'
								className='rounded-lg bg-primaryOne px-5 py-3 text-center text-sm font-medium text-black hover:bg-blackOne hover:text-primaryOne focus:outline-none focus:ring-4 focus:ring-primaryOne sm:w-fit'>
								Envoyer votre message
							</button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
};

export default page;
