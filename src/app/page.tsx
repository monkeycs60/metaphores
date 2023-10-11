import Hero from '@/components/home/Hero';
import WhatIsIt from '@/components/home/WhatIsIt';
import WhoAmI from '@/components/home/WhoAmI';

export default function Home() {
	return (
		<>
			<Hero />
			<div className='flex h-[110vh] flex-col gap-20 3xl:my-[5vh] 3xl:gap-20'>
				<WhatIsIt />
				<WhoAmI />
			</div>
		</>
	);
}
