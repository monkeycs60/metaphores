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
		'Contactez Métaphore Coaching pour un premier échange : coaching à Bordeaux, en région bordelaise ou à distance.',
	alternates: { canonical: '/contact' },
};
export default function ContactPage() {
	return (
		<div className="contact-layout">
			<div className="contact-copy">
				<h1>Commençons par votre situation.</h1>
				<p>
					Quelques mots sur ce qui vous amène suffisent. Nous verrons ensemble quel accompagnement peut vous
					convenir.
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
						src="/photos/conversation.webp"
						alt="Deux personnes échangent face à face, dans un cadre calme"
						width={800}
						height={400}
						sizes="(min-width: 900px) 40vw, 100vw"
					/>
				</div>
				<div>
					<p className="text-sm leading-relaxed">
						Vous préférez choisir un créneau ?<br />
						Premier échange gratuit de 30 minutes, par téléphone ou en visio.
					</p>
					<ButtonLink href="/rendez-vous" variant="text">
						Prendre rendez-vous
					</ButtonLink>
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
