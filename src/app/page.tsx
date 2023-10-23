import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';
import ForWhom from '@/components/home/ForWhom';
import Hero from '@/components/home/Hero';
import Pillars from '@/components/home/Pillars';
import Testimonies from '@/components/home/Testimonies';
import WhatIsIt from '@/components/home/WhatIsIt';
import WhoAmI from '@/components/home/WhoAmI';

export default function Home() {
	return (
		<>
			<Hero />
			<div className='flex flex-col gap-20 3xl:my-[5vh] 3xl:gap-20'>
				<WhatIsIt />
				<WhoAmI />
				<ForWhom />
				<Pillars />
				<Testimonies />
				<Contact />
				<Footer />
			</div>
		</>
	);
}
