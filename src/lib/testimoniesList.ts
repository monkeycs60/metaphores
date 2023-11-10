interface testimoniesListProps {
	text: string;
	author: string;
	position: string;
}

export const testimoniesList: testimoniesListProps[] = [
	{
		text: `Christophe est un coach que je ne peux que recommander. D’une grande capacité
d’écoute, il est doté d’une sensibilité lui permettant de créer une relation
d’accompagnement dans laquelle vous aurez toute latitude pour vous développer
et travailler sur le changement que vous souhaitez opérer dans votre vie.
Christophe a reçu une formation solide dans le domaine du coaching, ce qui vient
renforcer sa posture et son savoir faire très professionnels à votre égard.`,
		author: 'Sylvia D.',
		position: 'Chef de projet',
	},
	{
		text: `J'ai été coaché par Christophe pendant 6 mois, une expérience enrichissante et productive sur les plans sportif, scolaire et personnel. Initialement, j'espérais que mon coach me fournisse des réponses et des solutions pour atteindre mes objectifs. Cependant, ce coaching m'a appris à trouver mes propres réponses, à changer ma perception des situations, des gens et de ma vie. J'en ai appris davantage sur moi-même, amélioré ma réflexion et atteint mes objectifs.`,
		author: 'Nathan B.',
		position: 'Handballeur pro',
	},
];
