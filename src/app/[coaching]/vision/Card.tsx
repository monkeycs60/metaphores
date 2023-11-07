import Image from 'next/image';
import React from 'react';

interface cardVisionProps {
	bgvalue: string;
	sourceValue: string;
	altValue?: string | undefined;
	sourceWidth?: number;
	sourceHeight?: number;
	imgWidth?: number;
	number: number;
	value: string;
	textVision: string;
}

const Card = ({
	bgvalue,
	number,
	value,
	textVision,
	sourceValue,
	altValue,
	sourceWidth,
	sourceHeight,
	imgWidth,
}: cardVisionProps) => {
	return (
		<div
			className={`relative flex h-[400px] w-[35%] flex-col justify-around ${bgvalue} p-8`}>
			<Image
				src={sourceValue}
				width={sourceWidth}
				height={sourceHeight}
				alt={altValue || ''}
				className={`absolute -left-8 top-64 ${imgWidth}`}
			/>
			<div className='flex w-full flex-col items-center justify-center gap-2'>
				<span className='text-3xl'>{number}.</span>
				<h3 className='font-caveat text-2xl'>{value}</h3>
			</div>
			<p className=''>{textVision}</p>
		</div>
	);
};

export default Card;