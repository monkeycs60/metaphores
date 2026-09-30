import { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { ButtonLink } from '@/components/v2/ui';
import { CONTACT, CTA, LOCATIONS } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Contact et lieux de rendez-vous',
	description:
		'Contacter Christophe Jacques, coach professionnel à Bordeaux : téléphone, e-mail, formulaire et lieux de rendez-vous à Bordeaux, en région bordelaise ou en visio.',
	alternates: { canonical: '/contact' },
};

export default function ContactPage() {
	return (
		<div className='mx-auto grid w-full max-w-6xl gap-16 px-6 pb-20 pt-10 lg:grid-cols-[1fr_1.25fr] lg:px-10 lg:pt-16'>
			<div className='flex flex-col gap-8'>
				<div className='flex flex-col gap-5'>
					<h1 className='font-yeseva text-[2.1rem] leading-tight text-blackOne lg:text-5xl'>Commençons par votre situation</h1>
					<p className='max-w-[52ch] text-[1.0625rem] leading-relaxed text-blackOne/85'>
						Vous n’avez pas besoin de savoir exactement quel accompagnement choisir. Expliquez-moi simplement ce qui vous amène ;
						nous verrons ensemble si un accompagnement par le coaching est pertinent et quel cadre pourrait vous convenir.
					</p>
				</div>

				<dl className='flex flex-col gap-4 text-[1.0625rem]'>
					<div>
						<dt className='text-sm font-semibold text-blackOne/60'>Téléphone</dt>
						<dd>
							<a href={CONTACT.phoneHref} className='font-semibold underline decoration-primaryOne decoration-[3px] underline-offset-4'>
								{CONTACT.phone}
							</a>
						</dd>
					</div>
					<div>
						<dt className='text-sm font-semibold text-blackOne/60'>E-mail</dt>
						<dd>
							<a href={`mailto:${CONTACT.email}`} className='font-semibold underline decoration-primaryOne decoration-[3px] underline-offset-4'>
								{CONTACT.email}
							</a>
						</dd>
					</div>
				</dl>

				<div className='containerBordureBrisee flex flex-col gap-3 px-8 py-10'>
					<h2 className='font-yeseva text-xl text-blackOne'>Préférez-vous réserver directement ?</h2>
					<p className='leading-relaxed text-blackOne/85'>
						Choisissez un créneau pour un premier échange gratuit de 30 minutes, par téléphone ou en visio.
					</p>
					<ButtonLink href={CTA.booking.href} className='self-start'>
						{CTA.booking.label}
					</ButtonLink>
				</div>

				<div className='flex flex-col gap-4'>
					<h2 className='font-yeseva text-xl text-blackOne'>Lieux de rendez-vous</h2>
					{LOCATIONS.map((location) => (
						<div key={location.title}>
							<p className='font-semibold'>{location.title}</p>
							{location.lines.map((line) => (
								<p key={line} className='text-blackOne/75'>
									{line}
								</p>
							))}
						</div>
					))}
				</div>
			</div>

			<section aria-labelledby='form-title' className='flex flex-col gap-6 bg-[#FFF1CE]/60 p-6 sm:p-10'>
				<h2 id='form-title' className='font-yeseva text-2xl text-blackOne'>
					Écrire un message
				</h2>
				<Suspense>
					<ContactForm />
				</Suspense>
			</section>
		</div>
	);
}
