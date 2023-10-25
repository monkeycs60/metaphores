'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimoniesList } from '@/lib/testimoniesList';

const Testimonies = () => {
	const [testimonyIndex, setTestimonyIndex] = useState(0);
	const nextImage = () => {
		if (testimonyIndex < testimoniesList.length - 1) {
			setTestimonyIndex(testimonyIndex + 1);
		} else {
			setTestimonyIndex(0);
		}
	};

	const previousImage = () => {
		if (testimonyIndex > 0) {
			setTestimonyIndex(testimonyIndex - 1);
		} else {
			setTestimonyIndex(testimoniesList.length - 1);
		}
	};
	return (
		<div className='containerBordureBriseeTwo relative flex h-[50vh] w-full flex-col items-center gap-6 pt-12 3xl:h-[36vh] '>
			<div>
				<h2 className='text-center text-2xl font-bold'>Témoignages</h2>
			</div>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex w-full px-[300px] 3xl:px-[400px] '>
					<Image src='/quote.svg' alt='quote' width={80} height={42} />
				</div>
				<div className=' flex h-[170px] w-[45%] translate-x-[-50px] flex-col gap-6'>
					<p className='first-letter:indent-6'>
						{testimoniesList[testimonyIndex].text}
					</p>
					<p className='flex w-full justify-end font-semibold'>
						{testimoniesList[testimonyIndex].author}
						<span className='mx-2'>|</span>
						{testimoniesList[testimonyIndex].position}
					</p>
				</div>
				<div className='mt-8 flex w-[20%] justify-center gap-14'>
					<Image
						src='/arrow-left.svg'
						alt='arrow left'
						width={60}
						height={20}
						onClick={previousImage}
						className='cursor-pointer hover:text-primaryOne '
					/>
					<Image
						src='/arrow-right.svg'
						alt='arrow left'
						width={60}
						height={20}
						onClick={nextImage}
						className='cursor-pointer hover:text-primaryOne '
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonies;
