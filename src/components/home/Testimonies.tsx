'use client';

import Image from 'next/image';
import { useState } from 'react';
import { testimoniesList } from '@/lib/testimoniesList';
import { MoveLeft, MoveRight } from 'lucide-react';

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
		<div className='containerBordureBriseeTwo relative flex w-full flex-col items-center gap-6 pb-8 pt-12 lg:h-[70vh] 2xl:h-[50vh] 3xl:h-[36vh] '>
			<div>
				<h2 className='text-center text-xl lg:text-2xl font-bold'>Témoignages</h2>
			</div>
			<div className='flex flex-col items-center gap-4'>
				<div className='flex w-full px-[130px] 2xl:px-[300px] 3xl:px-[400px] '>
					<Image
						src='/quote.svg'
						alt='quote'
						width={80}
						height={42}
						className='h-[30px] w-[60px] lg:h-[42px] lg:w-[80px] '
					/>
				</div>
				<div className=' flex w-[75%] flex-col gap-6 lg:h-[170px] lg:w-[60%] lg:translate-x-[-50px] 2xl:w-[45%]'>
					<p className='first-letter:indent-6'>
						{testimoniesList[testimonyIndex].text}
					</p>
					<p className='flex w-full justify-end font-semibold'>
						{testimoniesList[testimonyIndex].author}
						<span className='mx-2'>|</span>
						{testimoniesList[testimonyIndex].position}
					</p>
				</div>
				<div className='mt-4 flex justify-center gap-14 lg:w-[20%] 2xl:mt-8'>
					<MoveLeft
						className='h-[45px] w-[45px] cursor-pointer select-none hover:text-primaryOne'
						onClick={previousImage}
					/>

					<MoveRight
						className='h-[45px] w-[45px] cursor-pointer select-none hover:text-primaryOne'
						onClick={nextImage}
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonies;
