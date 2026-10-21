import { Suspense } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { ButtonLink } from '@/components/v2/ui';
import { CONTACT, LOCATIONS } from '@/lib/site';

export const metadata: Metadata = {
	title: { absolute: 'Contact | Métaphore Coaching Bordeaux' },
	description:
		'Contactez Christophe Jacques, coach à Bordeaux : séances à l’Espace Beaulieu, coaching en marchant en forêt ou à distance.',
	alternates: { canonical: '/contact' },
};
export default function ContactPage() {
	return (
		<div className="contact-layout">
			<div className="contact-copy">
				<h1>Dites-m’en plus !</h1>
				<p>
					Vous souhaitez en savoir plus avant de prendre rendez-vous ou obtenir un devis pour une entreprise ?
					N’hésitez pas à poser vos questions ou à m’expliquer un peu votre situation. Vous pouvez aussi me
					contacter directement par téléphone.
				</p>
				<div className="contact-methods">
					<a href={CONTACT.phoneHref}>
						<Phone size={19} strokeWidth={1.5} aria-hidden />
						{CONTACT.phone}
					</a>
					<a href={`mailto:${CONTACT.email}`}>
						<Mail size={19} strokeWidth={1.5} aria-hidden />
						{CONTACT.email}
					</a>
				</div>
				<div className="contact-atmosphere">
					<Image
						src="/photos/christophe-bras-croises.webp"
						alt="Christophe Jacques sourit, en veste grise, devant des bureaux"
						width={1066}
						height={1600}
						sizes="(min-width: 900px) 40vw, 100vw"
					/>
				</div>
				<div className="contact-booking">
					<p>Vous souhaitez réserver une séance ?</p>
					<ButtonLink href="/rendez-vous">Prendre rendez-vous</ButtonLink>
				</div>
				<div className="contact-locations">
					<h2>Lieux de rendez-vous</h2>
					{LOCATIONS.map((location) => (
						<div key={location.title}>
							<h3>{location.title}</h3>
							{location.lines.map((line) => (
								<p key={line}>{line}</p>
							))}
						</div>
					))}
				</div>
			</div>
			<section aria-labelledby="form-title" className="contact-form">
				<h2 id="form-title">Écrire un message</h2>
				<Suspense>
					<ContactForm />
				</Suspense>
			</section>
		</div>
	);
}
