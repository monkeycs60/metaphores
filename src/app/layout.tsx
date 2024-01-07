import NavBar from '@/components/layout/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import { getCldOgImageUrl } from 'next-cloudinary';

export const metadata: Metadata = {
	title: 'Métaphore coaching',
	description: 'Christophe Jacques, votre coach professionnel',
	openGraph: {
		title: 'Métaphore coaching',
		description: 'Christophe Jacques, votre coach professionnel',
		images: [
			{
				url: getCldOgImageUrl({
					src: 'k6eowvgwc1w5xsg0q3xp',
				}),
				width: 640,
				height: 187,
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body
				className={
					'm-auto overflow-x-hidden  bg-white font-inter text-base lg:overflow-x-hidden'
				}>
				<div className='w-full' id='__next'>
					<NavBar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
