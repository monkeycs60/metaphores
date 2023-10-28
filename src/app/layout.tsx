import NavBar from '@/components/layout/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
	title: 'Métaphore coaching',
	description: 'Christophe Jacques, votre coach professionnel',
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
					'm-auto w-[100dvw] overflow-x-hidden bg-white font-inter text-base'
				}>
				<div className='w-full'>
					<NavBar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
