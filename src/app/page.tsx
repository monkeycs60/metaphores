import Hero from '@/components/home/Hero';
import WhatIsIt from '@/components/home/WhatIsIt';
import WhoAmI from '@/components/home/WhoAmI';

export default function Home() {
	return (
		<>
			<Hero />
			<div className='my-[5vh] flex h-screen flex-col gap-12'>
				<WhatIsIt />
				<WhoAmI />
			</div>
		</>
	);
}
