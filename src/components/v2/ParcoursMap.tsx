import Image from 'next/image';
import { CSSProperties } from 'react';
import { Drama } from 'lucide-react';

const LOGOS: { src: string; width: number; height: number; style: CSSProperties }[] = [
	{ src: '/parcours/safran.svg', width: 1000, height: 210, style: { left: '15%', top: '3%', width: '31%' } },
	{ src: '/parcours/amex.svg', width: 1000, height: 998, style: { left: '4%', top: '21%', width: '12.5%' } },
	{ src: '/parcours/foncia.webp', width: 360, height: 322, style: { left: '13%', top: '44%', width: '13.5%' } },
	{ src: '/parcours/ajilon.svg', width: 572, height: 236, style: { left: '0%', top: '73%', width: '17%' } },
	{
		src: '/parcours/education-nationale.webp',
		width: 420,
		height: 335,
		style: { left: '75%', top: '62%', width: '22%' },
	},
	{ src: '/parcours/fff.svg', width: 558, height: 600, style: { left: '55%', top: '76%', width: '11%' } },
];

export default function ParcoursMap() {
	return (
		<div
			className="parcours-map"
			role="img"
			aria-label="Les étapes du parcours de Christophe : Safran, Ajilon, American Express, Foncia, l’Éducation nationale, le théâtre, le football et le yoga"
		>
			<svg viewBox="0 0 1000 700" aria-hidden className="parcours-path">
				<path d="M372 497 C 470 492, 600 470, 597 432 C 594 398, 430 405, 427 368 C 424 330, 600 340, 638 300" />
				<g transform="translate(372 500)">
					<path className="parcours-pin" d="M0 0 C -14 -22, -38 -42, -38 -70 A 38 38 0 1 1 38 -70 C 38 -42, 14 -22, 0 0 Z" />
					<circle cx="0" cy="-70" r="17" fill="#fffdf9" />
					<circle cx="0" cy="-70" r="6" fill="#0d0630" />
				</g>
				<g transform="translate(640 302)">
					<path className="parcours-pin" d="M0 0 C -14 -22, -38 -42, -38 -70 A 38 38 0 1 1 38 -70 C 38 -42, 14 -22, 0 0 Z" />
					<circle cx="0" cy="-70" r="17" fill="#fffdf9" />
					<circle cx="0" cy="-70" r="6" fill="#0d0630" />
				</g>
			</svg>
			{LOGOS.map((logo) => (
				<Image
					key={logo.src}
					src={logo.src}
					alt=""
					width={logo.width}
					height={logo.height}
					className="parcours-logo"
					style={logo.style}
					sizes="200px"
				/>
			))}
			<span className="parcours-theatre" style={{ left: '81%', top: '1%' }}>
				<Drama size={52} strokeWidth={1.5} aria-hidden />
			</span>
			<Image
				src="/parcours/yoga.webp"
				alt=""
				width={640}
				height={397}
				className="parcours-yoga"
				style={{ left: '70%', top: '26%' }}
				sizes="240px"
			/>
		</div>
	);
}
