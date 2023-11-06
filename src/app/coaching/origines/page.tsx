import Image from 'next/image';
import React from 'react';

const page = () => {
	const array = [1, 2, 3, 4, 5, 6];
	console.log(array);

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
			<div className='m-auto mt-16 w-[60%]'></div>
		</div>
	);
};

export default page;
