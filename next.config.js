/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: '/about', destination: '/qui-suis-je', permanent: true },
			{ source: '/coaching/vision', destination: '/qui-suis-je', permanent: true },
			{ source: '/coaching/individuel', destination: '/coaching', permanent: true },
			{ source: '/coaching/collectif', destination: '/entreprises-rps-qvct', permanent: true },
			{ source: '/coaching/entreprise', destination: '/entreprises-rps-qvct', permanent: true },
			{ source: '/deontology', destination: '/deontologie', permanent: true },
			{ source: '/offers', destination: '/tarifs', permanent: true },
			{ source: '/reservation', destination: '/rendez-vous', permanent: true },
		];
	},
};

module.exports = nextConfig;
