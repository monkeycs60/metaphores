import Image from 'next/image';
import type { Metadata } from 'next';
import { ButtonLink, OfferList, PageHero, Prose, Section, Steps } from '@/components/v2/ui';
import { ContactBand, FramePrinciples, HeroActions, Testimonies } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: { absolute: 'Coach professionnel à Bordeaux et à distance | Métaphore Coaching' },
	description:
		'Coaching professionnel, coaching personnel et bilan de carrière à Bordeaux et en visio. Accompagnements dédiés aux jeunes & parents, enseignants et entreprises.',
	alternates: { canonical: '/' },
};

const COACHING_OFFERS = [
	{
		title: 'Coaching professionnel',
		tagline: 'Retrouver du sens et de la capacité d’action',
		text: 'Évolution, positionnement, prise de décision, relations professionnelles, équilibre ou changement : un accompagnement pour clarifier ce que vous souhaitez réellement faire évoluer.',
		href: '/coaching-professionnel',
		linkLabel: 'Découvrir le coaching professionnel',
	},
	{
		title: 'Coaching personnel',
		tagline: 'Prendre du recul sur une situation',
		text: 'Un espace pour travailler la confiance, les choix, les périodes de changement, les priorités, les limites et la recherche de sens, sans réponse toute faite.',
		href: '/coaching-personnel',
		linkLabel: 'Découvrir le coaching personnel',
	},
	{
		title: 'Bilan de carrière',
		tagline: 'Faire le point avant de décider de la suite',
		text: 'Relire son parcours, identifier ses compétences, ses motivations, ses contraintes et ses possibilités d’évolution pour construire des pistes professionnelles concrètes.',
		href: '/bilan-carriere',
		linkLabel: 'Découvrir le bilan de carrière',
	},
];

const SPECIFIC_OFFERS = [
	{
		title: 'Jeunes & Parents',
		tagline: 'Retrouver confiance, motivation et direction',
		text: 'Un espace neutre pour aider le jeune à mieux se comprendre, retrouver du sens, avancer dans son orientation et, lorsque c’est utile, travailler la relation avec ses parents.',
		href: '/jeunes-parents',
		linkLabel: 'Découvrir l’accompagnement jeunes & parents',
	},
	{
		title: 'Enseignants',
		tagline: 'Retrouver une place professionnelle qui vous ressemble',
		text: 'Perte de sens, fatigue, envie d’évolution ou de changement : un accompagnement nourri par une connaissance directe des réalités de l’Éducation nationale.',
		href: '/coaching-enseignants',
		linkLabel: 'Découvrir l’accompagnement des enseignants',
	},
	{
		title: 'Entreprises & organisations',
		tagline: 'Prévenir les tensions et soutenir les collectifs',
		text: 'Coaching de managers, équipes sous tension, ateliers de prévention RPS / QVCT et espaces de dialogue autour des situations de travail.',
		href: '/entreprises-rps-qvct',
		linkLabel: 'Découvrir l’offre entreprises',
	},
];

const STEPS = [
	{ title: 'Nous faisons connaissance', text: 'Comprendre votre situation et vérifier que ma manière de travailler vous convient.' },
	{ title: 'Nous définissons votre objectif', text: 'Clarifier ce que vous souhaitez obtenir de l’accompagnement.' },
	{ title: 'Nous avançons', text: 'Explorer, prendre du recul, expérimenter et faire émerger vos solutions.' },
	{
		title: 'Vous devenez autonome',
		text: 'Un coaching n’a pas vocation à créer une dépendance mais à vous aider à reprendre votre envol.',
	},
];

export default function Home() {
	return (
		<>
			<PageHero
				title={
					<>
						Retrouver du sens. Trouver sa direction. Se remettre en mouvement — ou tout simplement faire le point.
						<span className='mt-5 block font-inter text-lg font-semibold leading-snug text-blackOne/80 lg:text-xl'>
							Coaching professionnel et personnel à Bordeaux et à distance
						</span>
					</>
				}
				image='/v2/chemin.webp'
				imageAlt='Un chemin de sable qui serpente dans les herbes sèches vers l’horizon'
				caption={
					<>
						<span className='bg-secondaryOne px-1.5'>Accompagner</span> votre cheminement
					</>
				}
				actions={<HeroActions />}>
				<p>
					Il arrive parfois que l’on ne sache plus très bien où l’on va : un travail qui ne fait plus sens, une orientation
					difficile à choisir, une perte de motivation ou de confiance, une envie de changement sans savoir par où commencer, ou
					tout simplement le besoin de faire le point.
				</p>
				<p>Métaphore Coaching vous accompagne pour prendre du recul, retrouver de la clarté et construire votre propre chemin.</p>
			</PageHero>

			<Section tone='cream'>
				<div className='grid gap-10 lg:grid-cols-2 lg:gap-16'>
					<h2 className='font-yeseva text-[1.9rem] leading-tight text-blackOne lg:text-[2.5rem]'>
						Et si le problème n’était pas de trouver immédiatement la bonne réponse ? Mais plutôt de se poser les bonnes
						questions.
					</h2>
					<Prose>
						<p>
							Le coaching offre un espace pour regarder autrement ce que vous traversez et faire émerger des possibilités qui ne
							sont pas toujours visibles lorsque l’on reste seul face à ses interrogations.
						</p>
						<p>
							Je ne suis pas là pour décider à votre place. Mon rôle est de vous aider à comprendre ce qui compte vraiment pour
							vous, à identifier ce qui vous freine et à transformer votre réflexion en mouvement.
						</p>
					</Prose>
				</div>
			</Section>

			<Section title='Trois façons de faire le point et d’avancer'>
				<OfferList offers={COACHING_OFFERS} />
				<ButtonLink href='/coaching' variant='text'>
					Voir aussi la transition professionnelle et la page Coaching
				</ButtonLink>
			</Section>

			<Section tone='blue' title='Des accompagnements spécifiques'>
				<OfferList offers={SPECIFIC_OFFERS} shape='square' />
			</Section>

			<Section>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center lg:gap-16'>
					<div className='flex flex-col gap-6'>
						<h2 className='font-yeseva text-[1.75rem] leading-tight text-blackOne lg:text-[2.25rem]'>Pourquoi « Métaphore » ?</h2>
						<Prose>
							<p>
								Une métaphore permet parfois de regarder une situation connue sous un angle complètement différent. C’est cette
								idée qui est à l’origine de Métaphore Coaching.
							</p>
							<p>
								Nous partons de votre réalité : votre histoire, vos contraintes, vos ressources, vos envies et votre manière de
								voir le monde. Le coaching n’a pas vocation à vous transformer en quelqu’un d’autre ; il doit vous permettre
								d’avancer en restant cohérent avec qui vous êtes.
							</p>
						</Prose>
					</div>
					<div className='containerBordureBrisee grid gap-8 p-8 sm:grid-cols-[170px_1fr] sm:px-14 sm:py-16'>
						<Image
							src='/chris-profile-light.webp'
							alt='Christophe Jacques, coach professionnel à Bordeaux'
							width={365}
							height={500}
							className='w-[160px] rounded-sm shadow-lg shadow-blackOne/20 sm:w-[180px]'
						/>
						<div className='flex flex-col gap-4'>
							<h3 className='font-yeseva text-xl text-blackOne'>Christophe Jacques — Coach professionnel à Bordeaux</h3>
							<p className='leading-relaxed text-blackOne/85'>
								Pendant plus de dix ans dans l’enseignement de la technologie, j’ai appris à transmettre, animer des groupes,
								accompagner des jeunes et écouter ce qui se joue derrière une difficulté apparente. Avant cela, j’ai connu
								plusieurs reconversions réussies, notamment dans l’immobilier et l’aéronautique.
							</p>
							<p className='leading-relaxed text-blackOne/85'>
								Ces expériences nourrissent aujourd’hui ma manière d’accompagner le changement sans imposer de direction.
							</p>
							<ButtonLink href='/qui-suis-je' variant='text'>
								Découvrir mon parcours
							</ButtonLink>
						</div>
					</div>
				</div>
			</Section>

			<Section tone='cream' title='Comment se déroule un coaching ?'>
				<Steps steps={STEPS} />
			</Section>

			<Section title='Un cadre sécurisant pour avancer librement'>
				<FramePrinciples />
				<ButtonLink href='/deontologie' variant='outline' className='self-start'>
					Consulter ma déontologie
				</ButtonLink>
			</Section>

			<Section tone='blue' title='Ils ont été accompagnés'>
				<Testimonies />
			</Section>

			<ContactBand />
		</>
	);
}
