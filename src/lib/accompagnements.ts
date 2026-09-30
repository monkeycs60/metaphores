import type { Service } from '@/components/v2/ServicePage';

const conversation = {
	storyImage: '/v3/conversation.webp',
	storyImageAlt: 'Deux personnes échangent autour d’un carnet, dans la lumière d’une fenêtre',
};
const contact = (motif: string) => ({
	label: 'Échanger sur votre situation',
	href: `/contact?motif=${motif}`,
});

export const services: Record<string, Service> = {
	'coaching-professionnel': {
		title: 'Retrouver du sens au travail.',
		context: 'Coaching professionnel · Bordeaux & à distance',
		description:
			'Une évolution, une décision, un équilibre à retrouver. Clarifiez ce que vous souhaitez faire évoluer et comment y parvenir.',
		image: '/v2/coaching-professionnel.webp',
		imageAlt: 'Une personne regarde les toits de Bordeaux depuis une grande fenêtre',
		topicsTitle: 'Qu’aimeriez-vous faire évoluer ?',
		topics: [
			'Le sens de votre travail',
			'Votre confiance et votre positionnement',
			'Une évolution ou une prise de responsabilités',
			'Vos relations professionnelles',
			'Une décision ou une transition',
			'Vos priorités et votre équilibre',
		],
		storyTitle: 'Votre réalité, votre direction.',
		storyText: [
			'Nous partons de votre contexte, de vos contraintes et de vos ressources. Le coaching vous aide à clarifier vos choix et à construire des actions qui vous ressemblent.',
			'Faire évoluer sa vie professionnelle peut aussi vouloir dire trouver une nouvelle manière d’exercer son métier.',
		],
		...conversation,
		primary: contact('coaching-professionnel'),
		related: [
			{ label: 'Bilan de carrière', href: '/bilan-carriere' },
			{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
			{ label: 'Coaching personnel', href: '/coaching-personnel' },
		],
	},
	'coaching-personnel': {
		title: 'Retrouver votre propre chemin.',
		context: 'Coaching personnel · Bordeaux & à distance',
		description:
			'Vous savez ce que vous ne voulez plus, sans savoir encore ce qui vient après. Prenons le temps d’y voir plus clair.',
		image: '/v3/conversation.webp',
		imageAlt: 'Un échange de coaching autour d’une table, avec un carnet et une tasse',
		topicsTitle: 'Un espace pour vous.',
		topics: [
			'La confiance en soi',
			'Les choix et les changements',
			'Le passage à l’action',
			'Vos priorités et vos limites',
			'Votre équilibre de vie',
			'La recherche de sens',
		],
		storyTitle: 'Faire émerger vos réponses.',
		storyText: [
			'Le coaching offre un espace de réflexion, confidentiel et sans jugement. Nous explorons ce qui compte pour vous, ce qui vous freine et ce qui peut vous remettre en mouvement.',
		],
		storyImage: '/v2/chemin.webp',
		storyImageAlt: 'Un chemin de sable ouvert vers l’horizon',
		notice: {
			title: 'Un cadre distinct de la psychothérapie',
			text: 'Le coaching n’est pas une psychothérapie et ne se substitue pas à un suivi médical ou psychologique lorsque celui-ci est nécessaire. Son cadre est orienté vers une situation, un objectif et la capacité d’action de la personne.',
		},
		primary: contact('coaching-personnel'),
		related: [
			{ label: 'Coach ou psy ?', href: '/coaching/psy' },
			{ label: 'Coaching professionnel', href: '/coaching-professionnel' },
			{ label: 'Les accompagnements', href: '/coaching' },
		],
	},
	'bilan-carriere': {
		title: 'Faire le point sur votre carrière.',
		context: 'Bilan de carrière · Bordeaux & à distance',
		description:
			'Relire votre parcours, reconnaître vos compétences et clarifier vos envies avant de décider de la suite.',
		image: '/v2/bilan-carriere.webp',
		imageAlt: 'Un carnet ouvert, une boussole et une carte sur une table en bois',
		topicsTitle: 'Ce que nous explorons.',
		topics: [
			'Votre parcours et vos compétences',
			'Vos motivations et vos valeurs',
			'Vos priorités et vos contraintes',
			'Les rôles et environnements qui vous conviennent',
			'Les pistes d’évolution possibles',
			'Les premières actions pour les tester',
		],
		storyTitle: 'Une vision plus claire de la suite.',
		storyText: [
			'L’objectif est d’aboutir à des hypothèses d’évolution et à des pistes professionnelles concrètes. Vous pouvez vouloir changer de métier, évoluer dans votre poste ou simplement retrouver vos repères.',
		],
		...conversation,
		notice: {
			title: 'Bilan de carrière ou bilan de compétences ?',
			text: 'Le bilan de carrière proposé par Métaphore Coaching est un accompagnement de coaching centré sur votre parcours et vos choix professionnels. Il ne s’agit pas d’un « bilan de compétences » au sens du dispositif réglementé.',
		},
		primary: contact('bilan-carriere'),
		related: [
			{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
			{ label: 'Enseignants', href: '/coaching-enseignants' },
			{ label: 'Coaching professionnel', href: '/coaching-professionnel' },
		],
	},
	'transition-professionnelle': {
		title: 'Construire un changement choisi.',
		context: 'Transition & reconversion · Bordeaux & à distance',
		description:
			'Quelque chose ne vous convient plus. Explorons une nouvelle direction, sans idéaliser ni précipiter la décision.',
		image: '/v2/transition-professionnelle.webp',
		imageAlt: 'Une passerelle traverse un marais vers une rive ensoleillée',
		topicsTitle: 'La question peut encore être floue.',
		questions: [
			'J’ai envie de changer mais je ne sais pas vers quoi.',
			'J’hésite entre plusieurs possibilités.',
			'Je veux évoluer sans repartir de zéro.',
			'J’ai un projet mais je n’arrive pas à passer à l’action.',
		],
		storyTitle: 'Changer, sans tout recommencer.',
		storyText: [
			'Une transition peut prendre plusieurs formes : reconversion, évolution de poste, nouvel environnement ou rééquilibrage de vos priorités.',
			'Nous clarifions vos besoins, explorons vos possibilités et travaillons les freins. Puis nous construisons des étapes réalistes pour passer de la réflexion à l’action.',
		],
		storyImage: '/v2/bilan-carriere.webp',
		storyImageAlt: 'Un carnet et une boussole pour préparer les prochaines étapes',
		primary: contact('transition-professionnelle'),
		related: [
			{ label: 'Bilan de carrière', href: '/bilan-carriere' },
			{ label: 'Enseignants', href: '/coaching-enseignants' },
			{ label: 'Coaching professionnel', href: '/coaching-professionnel' },
		],
	},
	'jeunes-parents': {
		title: 'Grandir en confiance. Trouver sa direction.',
		context: 'Coaching jeunes & parents · Bordeaux',
		description:
			'Un espace neutre, différent de la famille et de l’école, pour parler librement, retrouver du sens et gagner en autonomie.',
		image: '/v2/jeunes-parents.webp',
		imageAlt: 'Un adolescent et son parent marchent sur un chemin de dune vers la mer',
		topicsTitle: 'Pour quelles situations ?',
		topics: [
			'Motivation et sens',
			'Orientation et projection dans l’avenir',
			'Confiance et prise de décision',
			'Autonomie et organisation',
			'Intégration et relations',
			'Dialogue entre parents et enfant',
		],
		storyTitle: 'Avancer, sans décider à sa place.',
		storyText: [
			'Le jeune explore ce qui compte pour lui, ce qui le freine et ce qui le met en mouvement. L’objectif est de l’aider à prendre progressivement la responsabilité de ses choix.',
			'Les parents peuvent aussi bénéficier de temps spécifiques pour clarifier la place de chacun, améliorer le dialogue et soutenir cette autonomie.',
			'Plus de dix ans dans l’enseignement nourrissent mon écoute. Le coaching se concentre sur la personne, ses ressources et ses choix, au-delà des seuls résultats scolaires.',
		],
		storyImage: '/v2/enseignants.webp',
		storyImageAlt: 'Une salle de classe vide dans la lumière de fin de journée',
		primary: { label: 'Échanger sur la situation de votre enfant', href: '/contact?motif=jeunes-parents' },
		related: [
			{ label: 'Mon parcours', href: '/qui-suis-je' },
			{ label: 'Coaching personnel', href: '/coaching-personnel' },
			{ label: 'Déontologie', href: '/deontologie' },
		],
	},
	'coaching-enseignants': {
		title: 'Retrouver votre place dans le métier.',
		context: 'Coaching enseignants · Bordeaux & à distance',
		description:
			'On peut aimer transmettre et ne plus se reconnaître dans ses conditions de travail. Prenons du recul sur ce qui vous questionne.',
		image: '/v2/enseignants.webp',
		imageAlt: 'Une salle de classe baignée de lumière dorée',
		topicsTitle: 'Des questions que je connais de l’intérieur.',
		questions: [
			'Comment retrouver du sens dans mon métier ?',
			'Est-ce le métier ou la manière de l’exercer que je veux quitter ?',
			'Quelles compétences ai-je développées ?',
			'Comment préparer une transition sans me mettre en difficulté ?',
		],
		storyTitle: 'Rester, évoluer ou changer.',
		storyText: [
			'Aucune réponse n’est décidée à l’avance. Nous pouvons travailler votre place dans le métier, faire un bilan de carrière, explorer une mobilité ou préparer une reconversion.',
			'Enseignant en technologie pendant plus de dix ans, j’en connais les réalités. Mes propres reconversions, dans l’immobilier et l’aéronautique, nourrissent aussi ma compréhension du changement.',
		],
		...conversation,
		primary: contact('enseignant'),
		related: [
			{ label: 'Bilan de carrière', href: '/bilan-carriere' },
			{ label: 'Transition professionnelle', href: '/transition-professionnelle' },
			{ label: 'Mon parcours', href: '/qui-suis-je' },
		],
	},
};
