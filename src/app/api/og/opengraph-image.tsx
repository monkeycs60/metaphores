import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const alt = 'Métaphore coaching';
export const size = { width: 640, height: 187 };
export const contentType = 'image/svg';

export default async function Image({
	params: { message },
}: {
	params: { message: string };
}) {
	const messageDecoded = decodeURIComponent(message);
	return new ImageResponse(
		(
			<div
				className='flex h-full w-full flex-col items-center justify-center bg-white p-8'
				style={{ width: size.width, height: size.height }}>
				<div
					className='flex h-full w-full flex-col items-center
			justify-center bg-white p-8'>
					<img
						className='h-32 w-32'
						src='/final-logo.svg'
						alt='Métaphore coaching'
					/>
					<h1 className='text-center text-3xl font-bold text-black'>
						{messageDecoded}
					</h1>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
