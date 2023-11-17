import Image from 'next/image';
import Link from 'next/link';

export type Section = {
	id: string;
	title: string;
};

type TableOfContentsProps = {
	sections: Section[];
};

const TableOfContents = ({ sections }: TableOfContentsProps) => (
	<nav className='relative m-auto flex flex-col items-center gap-8 scroll-smooth bg-primaryOne p-10 text-blackOne lg:w-[40%] 2xl:w-[33%]'>
		<Image
			src={'/doodledown.svg'}
			width={140}
			height={93}
			alt='doodle down'
			className='absolute left-[32vw] 2xl:left-[25vw] top-[20vh] hidden lg:block '
		/>
		<Image
			src={'/forme11.png'}
			width={485}
			height={283}
			alt='doodle down'
			className='absolute right-[-34vw] top-[-1vh] hidden w-[340px] lg:block 2xl:w-[380px] '
		/>
		<h2
			className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'
			id='origine'>
			Table des matières
		</h2>
		<ul className='flex w-full flex-col justify-center gap-2 text-center text-lg'>
			{sections.map((section) => (
				<li
					key={section.id}
					className='underline-offset-2 hover:font-semibold hover:underline'>
					<Link href={`#${section.id}`}>{section.title}</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default TableOfContents;
