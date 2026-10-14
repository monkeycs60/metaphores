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

export type NavItem = { label: string; href: string; description?: string; image?: string };

export const COACHING_SUBNAV: NavItem[] = [
	{
		label: 'Coaching professionnel',
		href: '/coaching-professionnel',
		image: '/photos/carte-coaching-professionnel.webp',
		description: 'Retrouver du sens et de la capacité d’action au travail.',
	},
	{
		label: 'Coaching personnel',
		href: '/coaching-personnel',
		image: '/photos/carte-coaching-personnel.webp',
		description: 'Prendre du recul sur une situation de vie.',
	},
	{
		label: 'Bilan de carrière',
		href: '/bilan-carriere',
		image: '/photos/carte-bilan-carriere.webp',
		description: 'Faire le point avant de décider de la suite.',
	},
	{
		label: 'Transition professionnelle',
		href: '/transition-professionnelle',
		image: '/photos/carte-transition.webp',
		description: 'Construire un changement sans le précipiter.',
	},
];

export const READING_NAV: NavItem[] = [
	{
		label: 'C’est quoi le coaching ?',
		href: '/coaching/origines',
		image: '/socrate.webp',
		description: 'Origines, déroulement, étapes et durée.',
	},
	{
		label: 'Ma vision du coaching',
		href: '/coaching/vision',
		image: '/falaise.jpg',
		description: 'Les sept principes de mon accompagnement.',
	},
	{
		label: 'Coach ou psy ?',
		href: '/coaching/psy',
		image: '/psycoach.png',
		description: 'Ce qui distingue le coach du psychologue.',
	},
	{
		label: 'Déontologie',
		href: '/deontologie',
		image: '/handshake.png',
		description: 'Le cadre éthique de chaque accompagnement.',
	},
];

export const MAIN_NAV: NavItem[] = [
	{ label: 'Accueil', href: '/' },
	{ label: 'Coaching', href: '/coaching' },
	{ label: 'Le coaching', href: '/coaching/origines' },
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
