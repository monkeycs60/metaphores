import type { Metadata } from 'next';
import CalBooking from '@/components/booking/CalBooking';
import { ButtonLink } from '@/components/v2/ui';
import { CAL_LINK, CONTACT } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Prendre rendez-vous',
	description:
		'Réservez en ligne un premier échange gratuit de 30 minutes avec Christophe Jacques, coach professionnel à Bordeaux, par téléphone ou en visio.',
	alternates: { canonical: '/rendez-vous' },
};

export default function RendezVousPage() {
	return (
		<div className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-20 pt-10 lg:px-10 lg:pt-16'>
			<div className='grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end'>
				<div className='flex flex-col gap-5'>
					<h1 className='font-yeseva text-[2.1rem] leading-tight text-blackOne lg:text-5xl'>Prendre rendez-vous</h1>
					<p className='max-w-[56ch] text-[1.0625rem] leading-relaxed text-blackOne/85'>
						Choisissez un créneau pour un premier échange de 30 minutes, gratuit et sans engagement. Nous ferons le point sur ce
						qui vous amène et sur la forme d’accompagnement qui pourrait vous convenir.
					</p>
				</div>
				<p className='text-blackOne/75 lg:text-right'>
					Aucun créneau ne vous convient ?<br />
					Appelez le{' '}
					<a href={CONTACT.phoneHref} className='font-semibold underline'>
						{CONTACT.phone}
					</a>{' '}
					ou <ButtonLink href='/contact' variant='text'>écrivez-moi</ButtonLink>.
				</p>
			</div>
			<div className='border border-blackOne/10 bg-white p-2 sm:p-4'>
				<CalBooking calLink={CAL_LINK} />
			</div>
		</div>
	);
}
