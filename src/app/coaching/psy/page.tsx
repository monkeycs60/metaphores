import type { Metadata } from 'next';
import { PageHero, ReadingBlock, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Coach ou psy ?',
	description:
		'Coach ou psychologue : ce qui les distingue, ce qu’est vraiment un coach et quand se tourner vers un psychologue ou un psychiatre.',
	alternates: { canonical: '/coaching/psy' },
};

export default function CoachOuPsyPage() {
	return (
		<>
			<PageHero
				title="Coach ou psychologue : clarifications"
				subtitle="Le coaching · Coach ou psy ?"
				image="/photos/psy-coach-craie.webp"
				imageAlt="Deux flèches dessinées à la craie, « psy ? » et « coach », partent d’une paire de chaussures"
				imagePosition="center 40%"
			>
				<p>
					Il est de plus en plus dur de trouver des personnes qui écoutent vraiment. Écouter dans le sens être avec
					l’autre en se mettant à distance pour l’accompagner. C’est-à-dire sans parler de soi. Sans se référer à
					soi pour trouver des solutions pour l’autre. Sans penser que sa solution sera aussi bonne pour vous.
				</p>
			</PageHero>

			<Section>
				<div className="reading">
					<ReadingBlock
						image="/photos/psy-connivence.webp"
						imageAlt="Deux hommes assis sur un banc échangent en souriant, penchés l’un vers l’autre"
						imageWidth={800}
						imageHeight={1200}
					>
						<p>
							<strong>Le coach n’est pas un psychologue !</strong> Il n’a pas de formation pour intervenir sur le
							passé du client et doit donc y faire attention.
						</p>
						<p>
							C’est un <strong>spécialiste du langage</strong>. Il travaille dans l’ici et maintenant et vers le
							futur. Il est là pour vous écouter, à l’instar d’un psy. Accueillir ce qui vous amène. Il se
							rapproche du psy en ce sens mais contrairement à lui ne va pas travailler à déconstruire votre
							passé. Le coach vous accompagne dans le présent pour mettre en œuvre des changements dans le futur.
						</p>
						<p className="reading-highlight">
							Son écoute sera active car il va reformuler et questionner pour vous aider à clarifier vos
							pensées.
						</p>
					</ReadingBlock>
					<ReadingBlock
						image="/photos/accueil-chemin.webp"
						imageAlt="Une personne avance sur une allée ensoleillée, vers la lumière"
						imageWidth={1800}
						imageHeight={1200}
						reverse
					>
						<p>
							Le coach accompagne en vous ramenant{' '}
							<strong>dans le présent afin de vous projeter vers votre avenir</strong> et agir dans votre vie.
							Il se peut que dans cet accompagnement le passé soit évoqué et discuté afin de mieux travailler dans
							le présent mais il ne sera pas travaillé.
						</p>
						<p>
							Si vous souhaitez approfondir la compréhension de ce passé, le travailler, pour éventuellement le
							déconstruire ou mieux l’appréhender, il sera préférable de recourir aux services d’un psychologue
							ou psychiatre car ce sont leurs domaines d’application.
						</p>
						<p>
							Cette réorientation ne signifie pas forcément la fin de l’accompagnement car ces deux approches
							sont différentes. Elles peuvent donc être complémentaires et menées en parallèle en fonction des
							besoins. Il revient donc à chacun de choisir la solution qui répondra au mieux à ses préoccupations
							du moment.
						</p>
					</ReadingBlock>
				</div>
			</Section>

			<Section tone="cream" title="Il est quoi le coach ?">
				<div className="reading">
					<ReadingBlock image="/binocular.jpg" imageAlt="Une longue-vue tournée vers le paysage" imageWidth={640} imageHeight={960}>
						<p>
							Un coach en réalité n’est <strong>pas un entraîneur</strong> qui va vous donner tout un tas
							d’exercices qu’il sait pouvoir vous aider à performer dans un domaine mais plutôt quelqu’un qui va
							vous accompagner sur le chemin que vous choisirez d’emprunter.
						</p>
						<p>
							Le postulat de base est que l’on ne sait pas où vous devez aller. Le coach n’a pas à être un
							spécialiste de votre branche ou d’un domaine. D’ailleurs moins il le sera plus il sera à même de
							vous accompagner de manière neutre. Cela évitera qu’il ait une idée préconçue sur ce qui vous
							amène. <strong>Il est la longue vue de votre esprit.</strong>
						</p>
						<p>
							Il n’est donc <strong>pas non plus un guide ou un conseiller.</strong>
						</p>
					</ReadingBlock>
					<ReadingBlock
						image="/photos/psy-carte.webp"
						imageAlt="Deux randonneurs lisent une carte ensemble, en forêt"
						imageWidth={1400}
						imageHeight={788}
						reverse
					>
						<p>
							Ce qui vous amène c’est une envie de changement, un problème, une frustration, une envie de
							progresser, un changement de vie… La clarification va donc vous permettre de trouver des solutions
							ou des pistes.
						</p>
						<p>
							Le coach pourrait être un <strong>clarificateur.</strong> Il va en questionnant et reformulant
							essayer de vous aider à différencier vos pensées et les faits, à questionner vos croyances, vos
							convictions pour vous permettre de comprendre et de clarifier votre situation et la faire évoluer.
						</p>
						<p>Cela va vous permettre de changer ce qui est nécessaire et avancer.</p>
						<p>
							Plus le coach sera neutre, plus il reflétera vos pensées et sera à même de vous aider à clarifier
							les choses pour vous.
						</p>
					</ReadingBlock>
				</div>
			</Section>

			<ContactBand />
			<RelatedLinks
				links={[
					{ label: 'C’est quoi le coaching ?', href: '/coaching/origines' },
					{ label: 'Déontologie', href: '/deontologie' },
					{ label: 'Coaching personnel', href: '/coaching-personnel' },
				]}
			/>
		</>
	);
}
