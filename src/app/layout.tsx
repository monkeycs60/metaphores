import NavBar from '@/components/layout/NavBar';
import './globals.css';
import type { Metadata } from 'next';

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
			<body className={'w-screen bg-white font-inter text-base'}>
				<div className='flex min-h-screen flex-col'>
					<NavBar />
					{children}
				</div>
			</body>
		</html>
	);
}
