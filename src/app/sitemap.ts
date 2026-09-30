import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const PATHS = [
	'/',
	'/coaching',
	'/coaching-professionnel',
	'/coaching-personnel',
	'/bilan-carriere',
	'/transition-professionnelle',
	'/jeunes-parents',
	'/coaching-enseignants',
	'/entreprises-rps-qvct',
	'/qui-suis-je',
	'/contact',
	'/rendez-vous',
	'/deontologie',
	'/tarifs',
	'/coaching/origines',
	'/coaching/psy',
];

export default function sitemap(): MetadataRoute.Sitemap {
	return PATHS.map((path) => ({
		url: `${SITE_URL}${path === '/' ? '' : path}`,
		changeFrequency: 'monthly',
		priority: path === '/' ? 1 : 0.7,
	}));
}
