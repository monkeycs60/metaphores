import { Loader2 } from 'lucide-react';

const Loading = () => {
	return (
		<div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6'>
			<h1 className='text-center text-2xl font-semibold lg:text-4xl'>
				Chargement du calendrier en cours
			</h1>
			<Loader2 className=' h-20 w-20  animate-spin text-primaryOne' />
		</div>
	);
};

export default Loading;
