import Image from 'next/image';
import type { Metadata } from 'next';
import { ButtonLink, CheckList, PageHero, Prose, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Qui suis-je ? Christophe Jacques, coach professionnel',
	description:
		'Enseignant en technologie pendant plus de dix ans, reconverti après l’immobilier et l’aéronautique : le parcours et la manière de travailler de Christophe Jacques, coach à Bordeaux.',
	alternates: { canonical: '/qui-suis-je' },
};

const WAYS = [
	'Partir de votre réalité plutôt que d’un modèle préconçu',
	'Créer un cadre de confiance et de confidentialité',
	'Questionner avec précision sans imposer de réponse',
	'Prendre en compte les contraintes concrètes',
	'Chercher l’autonomie plutôt que la dépendance',
	'Savoir reconnaître les limites du coaching et orienter vers d’autres professionnels lorsque nécessaire',
];

const PATH = [
	{ period: 'Premiers métiers', text: 'Plusieurs reconversions réussies, notamment dans l’immobilier et l’aéronautique.' },
	{ period: 'Plus de dix ans', text: 'Enseignant en technologie : transmettre, animer des groupes, accompagner des jeunes.' },
	{ period: 'Aujourd’hui', text: 'Coach professionnel à Bordeaux, formé au coaching et au développement professionnel.' },
];

export default function QuiSuisJePage() {
	return (
		<>
			<PageHero
				title='Un parcours fait d’apprentissage, de transmission et de changement'
				subtitle='Christophe Jacques, coach professionnel à Bordeaux'
				media={
					<div className='relative mx-auto w-full max-w-[380px]'>
						<div aria-hidden className='containerBordureBrisee absolute -inset-6 -z-10' />
						<Image
							src='/chris-profile-light.webp'
							alt='Christophe Jacques, souriant, un carnet à la main'
							width={365}
							height={500}
							priority
							className='w-full shadow-xl shadow-blackOne/20'
						/>
					</div>
				}
				caption={
					<>
						Celui qui sait demander est <span className='bg-blackOne px-1.5 text-whiteOne'>libre</span>
					</>
				}
				actions={<HeroActions />}>
				<p>
					Mon parcours professionnel ne s’est pas construit en ligne droite. Il s’est construit par expériences, questionnements,
					réussites, doutes et réajustements.
				</p>
			</PageHero>

			<Section tone='cream'>
				<div className='grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20'>
					<ol className='flex flex-col gap-8 border-l-2 border-primaryOne pl-8'>
						{PATH.map((step) => (
							<li key={step.period} className='relative flex flex-col gap-1'>
								<span aria-hidden className='absolute -left-[2.55rem] top-1 h-4 w-4 rounded-full border-2 border-primaryOne bg-white' />
								<span className='font-caveat text-2xl text-blackOne'>{step.period}</span>
								<span className='leading-relaxed text-blackOne/85'>{step.text}</span>
							</li>
						))}
					</ol>
					<Prose>
						<p>
							Avant l’enseignement, j’ai connu plusieurs reconversions professionnelles réussies, notamment dans l’immobilier et
							l’aéronautique. Ces expériences m’ont confronté directement aux questions de changement, d’adaptation et de
							transfert de compétences.
						</p>
						<p>
							Pendant plus de dix ans dans l’enseignement de la technologie, j’ai appris à transmettre, animer des groupes,
							accompagner des jeunes, créer des contenus, m’adapter et écouter ce qui se joue derrière une difficulté apparente.
						</p>
						<p>
							Ma formation au coaching et au développement professionnel a donné un autre cadre à cette expérience : accompagner
							sans décider à la place de l’autre, questionner sans imposer, aider à transformer une réflexion en mouvement.
						</p>
						<p>
							Je pense qu’il est important de comprendre ce que nous traversons, de nous réajuster et de construire progressivement
							une direction qui nous correspond davantage, afin de ne pas rester figés dans un parcours forcément linéaire et de
							pouvoir utiliser pleinement nos capacités.
						</p>
					</Prose>
				</div>
			</Section>

			<Section title='Ma manière de travailler'>
				<CheckList items={WAYS} />
				<ButtonLink href='/deontologie' variant='outline' className='self-start'>
					Découvrir ma déontologie
				</ButtonLink>
			</Section>

			<ContactBand />
		</>
	);
}
