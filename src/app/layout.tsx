import NavBar from '@/components/layout/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import { getCldOgImageUrl } from 'next-cloudinary';
import { CONTACT, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: 'Coach professionnel à Bordeaux | Métaphore Coaching',
		template: '%s | Métaphore Coaching',
	},
	description:
		'Coaching professionnel et personnel à Bordeaux et à distance : bilan de carrière, transition professionnelle, jeunes & parents, enseignants, entreprises.',
	openGraph: {
		siteName: 'Métaphore Coaching',
		locale: 'fr_FR',
		type: 'website',
		images: [
			{
				url: getCldOgImageUrl({
					src: 'mh6feihpcog9qnwpr71j',
				}),
				width: 1200,
				height: 627,
			},
		],
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Métaphore Coaching',
	url: SITE_URL,
	telephone: '+33672716160',
	email: CONTACT.email,
	founder: { '@type': 'Person', name: 'Christophe Jacques', jobTitle: 'Coach professionnel' },
	address: { '@type': 'PostalAddress', addressLocality: 'Bordeaux', postalCode: '33000', addressCountry: 'FR' },
	areaServed: ['Bordeaux', 'Gironde', 'France (à distance)'],
	sameAs: [CONTACT.linkedin, CONTACT.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='fr'>
			<body className='m-auto overflow-x-hidden bg-white font-inter text-base text-blackOne'>
				<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<a
					href='#contenu'
					className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primaryOne focus:px-4 focus:py-2'>
					Aller au contenu
				</a>
				<NavBar />
				<main id='contenu'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
