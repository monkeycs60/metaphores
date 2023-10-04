import NavBar from '@/components/layout/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
		<html lang='en'>
			<body
				className={'min-h-screen w-screen bg-white font-inter text-base'}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
