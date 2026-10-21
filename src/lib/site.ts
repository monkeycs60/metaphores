export const SITE_URL = 'https://www.metaphorecoaching.com';

export const CONTACT = {
	phone: '06 72 71 61 60',
	phoneHref: 'tel:+33672716160',
	email: 'metaphorecoaching@gmail.com',
	linkedin: 'https://www.linkedin.com/in/christophe-jacques-2a690523/',
	instagram: 'https://www.instagram.com/metaphore.coaching/',
};

export const CAL_LINK = 'metaphore-coaching/seance-coaching';

export const CTA = {
	contact: {
		question: 'Vous avez des questions ou besoin de précisions ?',
		label: 'Contactez-moi',
		href: '/contact',
	},
	booking: { label: 'Prendre rendez-vous', href: '/rendez-vous' },
	quote: { label: 'Demandez un devis', href: '/contact?motif=entreprise' },
	business: {
		question: 'Besoin d’en parler de vive voix ?',
		label: 'Contactez-nous',
		href: '/contact?motif=entreprise',
	},
};

export const contactFor = (motif: string) => ({ ...CTA.contact, href: `/contact?motif=${motif}` });

export type NavItem = { label: string; href: string; description?: string; image?: string; imagePosition?: string };

export const COACHING_SUBNAV: NavItem[] = [
	{
		label: 'Coaching professionnel',
		href: '/coaching-professionnel',
		image: '/photos/carte-pro-echange.webp',
		description: 'Retrouver du sens et de la capacité d’action au travail.',
	},
	{
		label: 'Coaching personnel',
		href: '/coaching-personnel',
		image: '/photos/carte-perso-canape.webp',
		imagePosition: 'center 62%',
		description: 'Prendre du recul sur une situation de vie.',
	},
	{
		label: 'Bilan de carrière',
		href: '/bilan-carriere',
		image: '/photos/carte-bilan-serein.webp',
		description: 'Faire le point avant de décider de la suite.',
	},
	{
		label: 'Transition professionnelle',
		href: '/transition-professionnelle',
		image: '/photos/carte-transition-elan.webp',
		description: 'Construire un changement sans le précipiter.',
	},
];

export const READING_NAV: NavItem[] = [
	{
		label: 'Origines et déroulement',
		href: '/coaching/origines',
		image: '/photos/coaching-questionnement.webp',
		imagePosition: 'center 22%',
		description: 'D’où vient le coaching, comment il se déroule, ses étapes et sa durée.',
	},
	{
		label: 'Ma vision du coaching',
		href: '/coaching/vision',
		image: '/photos/vision-lever-soleil.webp',
		description: 'Les sept principes de mon accompagnement.',
	},
	{
		label: 'Coach ou psy ?',
		href: '/coaching/psy',
		image: '/photos/psy-coach-craie.webp',
		description: 'Ce qui distingue le coach du psychologue.',
	},
	{
		label: 'Déontologie',
		href: '/deontologie',
		image: '/photos/poignee-de-main.webp',
		description: 'Le cadre éthique de chaque accompagnement.',
	},
];

export const MAIN_NAV: NavItem[] = [
	{ label: 'Accueil', href: '/' },
	{ label: 'Accompagnements', href: '/coaching' },
	{ label: 'C’est quoi le coaching ?', href: '/coaching/origines' },
	{ label: 'Jeunes & Parents', href: '/jeunes-parents' },
	{ label: 'Enseignants', href: '/coaching-enseignants' },
	{ label: 'Entreprises', href: '/entreprises-rps-qvct' },
	{ label: 'Qui suis-je ?', href: '/qui-suis-je' },
	{ label: 'Tarifs', href: '/tarifs' },
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
	{ title: 'Espace Beaulieu', lines: ['145 rue de Saint-Genès, 33000 Bordeaux'] },
	{ title: 'Coaching en marchant', lines: ['En forêt'] },
	{ title: 'À distance', lines: ['En visioconférence'] },
];
