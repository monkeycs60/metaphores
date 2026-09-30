import Image from 'next/image';
import type { Metadata } from 'next';
import { Notice, PageHero, Prose, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand, HeroActions } from '@/components/v2/blocks';
import { CTA } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Coaching entreprise, prévention RPS et QVCT à Bordeaux',
	description:
		'Coaching de managers, équipes sous tension, ateliers de prévention RPS & QVCT et espaces de parole pour les entreprises et organisations de la région bordelaise.',
	alternates: { canonical: '/entreprises-rps-qvct' },
};

const FORMATS = [
	{
		title: 'Coaching manager',
		tagline: 'Prendre du recul pour mieux manager',
		items: [
			'Prise de poste et positionnement',
			'Communication et décisions difficiles',
			'Tensions dans l’équipe',
			'Priorisation et charge ressentie',
			'Accompagnement du changement',
			'Isolement ou perte de confiance',
		],
		accent: 'border-primaryOne',
	},
	{
		title: 'Équipe sous tension',
		tagline: 'Comprendre ce qui se joue pour retrouver de la coopération',
		items: ['Cadrage avec le commanditaire', 'Entretiens exploratoires si nécessaire', '1 à 3 ateliers collectifs', 'Restitution et pistes d’action'],
		accent: 'border-secondaryOne',
	},
	{
		title: 'Ateliers prévention RPS & QVCT',
		tagline: 'Agir avant que les difficultés ne s’installent',
		items: [
			'Repérer les signaux de fragilisation',
			'Charge de travail : en parler avant le débordement',
			'Manager sans s’épuiser',
			'Perte de sens et désengagement',
			'Relations difficiles et tensions professionnelles',
			'Préserver la coopération pendant les périodes de changement',
		],
		accent: 'border-blackOne',
	},
	{
		title: 'Espaces de parole & analyse des situations de travail',
		tagline: 'Prendre du recul collectivement',
		items: ['Groupes de 6 à 12 personnes', 'Séances de 1 h 30 à 2 h', 'Intervention ponctuelle ou cycle régulier'],
		accent: 'border-primaryOne/60',
	},
];

export default function EntreprisesPage() {
	return (
		<>
			<PageHero
				title='Prévenir les tensions. Soutenir les managers. Remettre du dialogue dans le travail.'
				subtitle='Coaching professionnel, management, prévention RPS et QVCT'
				image='/enterprise.jpg'
				imageAlt='Un atelier collectif autour d’un mur de notes adhésives'
				actions={<HeroActions primary={CTA.business} />}>
				<p>
					Surcharge, perte de sens, tensions relationnelles, changements organisationnels ou difficultés managériales peuvent
					progressivement fragiliser les personnes et les collectifs.
				</p>
				<p>Métaphore Coaching accompagne les entreprises et organisations pour créer des espaces de recul, de dialogue et d’action.</p>
			</PageHero>

			<Section title='Quatre formats d’intervention' intro={<p>Chaque intervention est construite avec vous et fait l’objet d’un devis.</p>}>
				<div className='grid gap-x-12 gap-y-14 md:grid-cols-2'>
					{FORMATS.map((format) => (
						<article key={format.title} className={cn('flex flex-col gap-4 border-t-[6px] pt-6', format.accent)}>
							<h3 className='font-yeseva text-2xl text-blackOne'>{format.title}</h3>
							<p className='font-caveat text-2xl text-blackOne/80'>{format.tagline}</p>
							<ul className='flex flex-col gap-2 text-blackOne/85'>
								{format.items.map((item) => (
									<li key={item} className='flex gap-3'>
										<span aria-hidden className='mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-blackOne/50' />
										{item}
									</li>
								))}
							</ul>
							<p className='text-sm font-semibold text-blackOne/70'>Intervention sur devis.</p>
						</article>
					))}
				</div>
			</Section>

			<Section tone='cream' title='Une approche centrée sur le travail réel'>
				<Prose>
					<p>
						L’objectif n’est pas de faire porter aux individus la responsabilité de difficultés qui peuvent aussi être
						organisationnelles.
					</p>
				</Prose>
				<Notice title='Les limites de l’intervention'>
					<p>
						Métaphore Coaching n’a pas vocation à se substituer au service de prévention et de santé au travail, aux
						professionnels de santé, aux représentants du personnel ou aux spécialistes de l’évaluation réglementaire des risques.
						Lorsque la situation nécessite une expertise médicale, psychologique, juridique ou réglementaire, l’intervention
						s’inscrit en complémentarité avec les professionnels concernés.
					</p>
				</Notice>
			</Section>

			<Section>
				<div className='grid items-center gap-10 sm:grid-cols-[180px_1fr]'>
					<Image
						src='/chris-doudoune.png'
						alt='Christophe Jacques, coach professionnel'
						width={372}
						height={406}
						className='w-[160px] rounded-full sm:w-[180px]'
					/>
					<div className='flex flex-col gap-3'>
						<h2 className='font-yeseva text-2xl text-blackOne lg:text-3xl'>Christophe Jacques — Coach professionnel</h2>
						<Prose>
							<p>
								Plus de dix ans d’expérience dans l’enseignement et l’accompagnement : animation de groupes, transmission, écoute,
								adaptation et accompagnement des personnes dans leurs périodes de questionnement et d’évolution. Aujourd’hui, je
								mets cette expérience au service des managers, des équipes et des organisations.
							</p>
						</Prose>
					</div>
				</div>
			</Section>

			<ContactBand
				title='Demander un premier échange'
				text='Présentez-moi le contexte de votre organisation : nous verrons ensemble quel format d’intervention peut être pertinent.'
				primary={CTA.business}
			/>
			<RelatedLinks
				links={[
					{ label: 'Qui suis-je ?', href: '/qui-suis-je' },
					{ label: 'Déontologie', href: '/deontologie' },
				]}
			/>
		</>
	);
}
