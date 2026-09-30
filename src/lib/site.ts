export const SITE_URL = 'https://www.metaphorecoaching.com';

export const CONTACT = {
	phone: '06 72 71 61 60',
	phoneHref: 'tel:+33672716160',
	email: 'metaphorecoaching@gmail.com',
	linkedin: 'https://www.linkedin.com/in/christophe-jacques-2a690523/',
	instagram: 'https://www.instagram.com/metaphore.coaching/',
};

export const CAL_LINK =
	process.env.NEXT_PUBLIC_CALCOM_LINK || 'metaphore-coaching/premier-echange';

export const CTA = {
	primary: { label: 'Échanger sur votre situation', href: '/contact' },
	booking: { label: 'Prendre rendez-vous', href: '/rendez-vous' },
	business: {
		label: 'Échanger sur les besoins de votre organisation',
		href: '/contact?motif=entreprise',
	},
};

export type NavItem = { label: string; href: string; description?: string };

export const COACHING_SUBNAV: NavItem[] = [
	{
		label: 'Coaching professionnel',
		href: '/coaching-professionnel',
		description: 'Retrouver du sens et de la capacité d’action au travail.',
	},
	{
		label: 'Coaching personnel',
		href: '/coaching-personnel',
		description: 'Prendre du recul sur une situation de vie.',
	},
	{
		label: 'Bilan de carrière',
		href: '/bilan-carriere',
		description: 'Faire le point avant de décider de la suite.',
	},
	{
		label: 'Transition professionnelle',
		href: '/transition-professionnelle',
		description: 'Construire un changement sans le précipiter.',
	},
];

export const MAIN_NAV: NavItem[] = [
	{ label: 'Accueil', href: '/' },
	{ label: 'Coaching', href: '/coaching' },
	{ label: 'Jeunes & Parents', href: '/jeunes-parents' },
	{ label: 'Enseignants', href: '/coaching-enseignants' },
	{ label: 'Entreprises', href: '/entreprises-rps-qvct' },
	{ label: 'Qui suis-je ?', href: '/qui-suis-je' },
	{ label: 'Contact', href: '/contact' },
];

export const MOTIFS = [
	{ value: 'coaching-professionnel', label: 'Coaching professionnel' },
	{ value: 'coaching-personnel', label: 'Coaching personnel' },
	{ value: 'bilan-carriere', label: 'Bilan de carrière' },
	{ value: 'transition-professionnelle', label: 'Transition professionnelle' },
	{ value: 'jeunes-parents', label: 'Jeune & parent' },
	{ value: 'enseignant', label: 'Enseignant' },
	{ value: 'entreprise', label: 'Entreprise' },
	{ value: 'autre', label: 'Autre' },
];

export const LOCATIONS = [
	{
		title: 'À Bordeaux',
		lines: [
			'HOLOM, Maison des praticiens de bien-être — 91 rue Camille Sauvageau, 33800',
			'Smoös, Espace de co-therapeuting — 137 cours de l’Yser, 33800',
		],
	},
	{
		title: 'En région bordelaise',
		lines: ['Dans un lieu neutre, dans vos locaux ou en coaching nomade'],
	},
	{ title: 'À distance', lines: ['En visioconférence'] },
];
