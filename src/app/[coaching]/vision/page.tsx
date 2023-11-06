import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/twoCircles.svg'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute left-0 top-64 w-[200px] '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 w-[160px] '
			/>
			<div className='m-auto mt-16 w-[60%]'>
				<div className='flex flex-col gap-[75px]'>
					<div>
						<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
							Qu'est-ce que le coaching ?
						</h1>
						<div className='m-auto mt-2 h-[1px] w-[40%] bg-blackOne'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
