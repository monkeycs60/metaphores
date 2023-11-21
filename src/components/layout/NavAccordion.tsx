'use client';

interface navAccordionProps {
	hamburgerBehavior?: () => void;
}

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export function NavAccordion({ hamburgerBehavior }: navAccordionProps) {
	return (
		<Accordion type='single' collapsible className='m-auto w-[60%]'>
			<AccordionItem value='item-1'>
				<AccordionTrigger>
					<span>Coaching</span>
				</AccordionTrigger>
				<AccordionContent>
					<div className='flex flex-col items-center gap-3 text-blackOne/70'>
						<Link
							className='w-[40%]'
							href='/coaching/individuel'
							onClick={hamburgerBehavior}>
							Individuel
						</Link>
						<Link href='/coaching/collectif' onClick={hamburgerBehavior}>
							Collectif
						</Link>
						<Link href='/coaching/entreprise' onClick={hamburgerBehavior}>
							Entreprise
						</Link>
						<Link href='/coaching/origines' onClick={hamburgerBehavior}>
							C'est quoi le coaching
						</Link>
						<Link href='/coaching/vision' onClick={hamburgerBehavior}>
							Ma vision
						</Link>
						<Link href='/coaching/psy' onClick={hamburgerBehavior}>
							Coach ou psy ?
						</Link>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
