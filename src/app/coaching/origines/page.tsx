import type { Metadata } from 'next';
import { Exergue, PageHero, ReadingBlock, RelatedLinks, Section } from '@/components/v2/ui';
import { ContactBand } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Qu’est-ce que le coaching ?',
	description:
		'Origines du coaching, de Socrate au cocher, ce qu’est concrètement un coaching, son déroulement, ses étapes et sa durée.',
	alternates: { canonical: '/coaching/origines' },
};

const CHAPTERS = [
	{ id: 'origine', title: 'Origine' },
	{ id: 'whatIsIt', title: 'Concrètement, le coaching, c’est quoi ?' },
	{ id: 'howItHappens', title: 'Ça se passe comment ?' },
	{ id: 'steps', title: 'Les étapes d’un coaching' },
	{ id: 'timeDuration', title: 'Combien de temps ça dure ?' },
	{ id: 'equilibre', title: 'Notre souci, votre équilibre' },
];

const COACH_ROLE = [
	'Aider une personne à trouver sa propre solution (car qui mieux qu’elle peut définir ce qui sera le mieux pour elle-même).',
	'Il est spécialiste des questions et de la reformulation.',
	'Un coach se doit d’être le plus neutre possible, à l’image d’un miroir, afin de refléter uniquement ce que le client amène. Vos dilemmes et interrogations pour mieux que vous les perceviez et réajustiez ce que vous souhaitez.',
	'Cela demande une capacité de mise à distance de sa part. Une manière d’être invisible afin que le client puisse se demander à quoi le coach a servi. Plus le coach arrive à se mettre à distance plus le client travaille. Cela ne veut pas dire non plus qu’il n’intervient pas. Il va questionner, reformuler, aider à changer de perspective, etc.',
	'Il peut aussi être confrontant, en mettant le coaché face à ses contradictions ou à des dissonances dans son discours. C’est cela qui va aider le coaché à voir l’impasse dans laquelle il se trouve et éventuellement être amené à évoluer pour en sortir.',
];

function MirrorParagraphs({ highlight }: { highlight: string }) {
	return (
		<>
			<Exergue author="Le Petit Prince">
				Il est bien plus difficile de se juger soi-même que de juger autrui.
			</Exergue>
			<p>
				Le but du coach est de vous offrir un cadre pour vous permettre de <strong>trouver la solution</strong>{' '}
				ou le chemin qui est le vôtre.
			</p>
			<p className="reading-highlight">{highlight}</p>
			<p>
				Le coach agit <strong>comme un miroir</strong> de la parole afin de vous permettre d’entendre autrement
				votre histoire.
			</p>
			<p>
				Le coaching n’a pas pour but de vous transformer mais vous aider à mieux vivre en trouvant les solutions
				adaptées à qui vous êtes. La vie est une <strong>perpétuelle évolution</strong>, aucun état n’est
				permanent. Trouver l’équilibre demande souvent des ajustements. Le coaching peut vous aider à faire le
				point et retrouver un état dans lequel vous vous sentez plus en accord avec vous-même.
			</p>
			<p>
				Faire un <em>pas de côté</em> peut permettre de changer complètement de prisme et d’entrevoir des choses
				impensables ou inimaginables l’instant d’avant.
			</p>
		</>
	);
}

export default function CoachingDefinitionPage() {
	return (
		<>
			<PageHero
				title="Qu’est-ce que le coaching ?"
				subtitle="Le coaching · Origines, déroulement, durée"
				image="/photos/chemin.webp"
				imageAlt="Un sentier de sable entre les dunes"
			>
				<nav aria-label="Table des matières" className="reading-toc">
					<p>Table des matières</p>
					<ol>
						{CHAPTERS.map((chapter) => (
							<li key={chapter.id}>
								<a href={`#${chapter.id}`}>{chapter.title}</a>
							</li>
						))}
					</ol>
				</nav>
			</PageHero>

			<Section id="origine" title="Origine.">
				<div className="reading">
					<ReadingBlock title="Socrate" image="/socrate.webp" imageAlt="Statue de Socrate" imageWidth={1245} imageHeight={700}>
						<p>L’origine du coaching ne date pas d’hier car Socrate est souvent considéré comme le précurseur du coaching.</p>
						<p>
							Il créa sa propre méthode thérapeutique : la <em>maïeutique</em> dont le coaching est très
							largement inspiré. La maïeutique est issue de l’influence de la profession de sa mère qui était «
							sage-femme », et aidait les femmes à accoucher. Cela le fit se définir plus tard comme «{' '}
							<em>l’accoucheur de l’esprit humain</em> ».
						</p>
						<Exergue>
							L’accoucheur n’apporte, ne transmet rien à l’âme qu’il éveille. Il la laisse nue en face
							d’elle-même.
						</Exergue>
						<p>
							Cela consiste à utiliser la <em>« Parole »</em> pour la <strong>prise de conscience</strong> ; il
							s’agissait, plus précisément, d’utiliser des techniques pour questionner l’interlocuteur, ses
							réponses l’amenant vers la prise de conscience, la <em>« connaissance de soi »</em>, à{' '}
							<strong>
								trouver les solutions les plus adaptées à ses capacités, à ses croyances et à ses
								représentations, à sa situation et ses enjeux
							</strong>
							, etc… le portant ainsi vers le <strong>changement</strong>.
						</p>
					</ReadingBlock>
					<ReadingBlock title="Le coche" image="/coche.png" imageAlt="Un coche tiré par un cheval" imageWidth={300} imageHeight={188} reverse>
						<p>
							L’origine étymologique du mot « coach » est souvent méconnue et contrairement à sa sonorité
							anglaise ce mot vient du Français « coche » qui est le nom d’une sorte de calèche et dont a
							découlé le nom du cocher.
						</p>
						<p>
							Car le coaching est un accompagnement menant d’un point A à un point B et le coach est celui qui
							vous accompagne en vous aidant à y parvenir.
						</p>
						<p>
							Le terme « coach » peut ainsi être associé à une{' '}
							<strong>notion de direction, d’orientation, d’un cheminement</strong> qui se déroule dans le
							présent, dans le <em>« ici et maintenant »</em>, et allant jusqu’à un <strong>futur</strong> plus
							ou moins proche, la durée étant relativement courte.
						</p>
					</ReadingBlock>
					<ReadingBlock title="De nos jours" image="/library.jpg" imageAlt="Une bibliothèque" imageWidth={640} imageHeight={427}>
						<p>
							En résumé, le coach accompagne, comme Socrate le caractérisait, il est « l’éveilleur de la
							conscience » en laissant le coaché découvrir, dans ses propres réponses, ses freins, ses
							incohérences lui permettant de les faire évoluer…{' '}
							<strong>La parole mène à la transformation, au changement !</strong>
						</p>
						<p>
							Plus tard il y a des influences multiples la philosophie, la sociologie, les Arts, …{' '}
							<strong>le coaching s’inspire de la psychanalyse, de la psychologie</strong> regroupant ainsi les
							pratiques telles que la Programmation Neuro-Linguistique (PNL), l’Analyse Transactionnelle ou «
							A.T », la Gestalt-thérapie, etc…
						</p>
					</ReadingBlock>
				</div>
			</Section>

			<Section id="whatIsIt" tone="cream" title="Concrètement, le coaching, c’est quoi ?">
				<ReadingBlock image="/falaise.jpg" imageAlt="Une personne au bord d’une falaise" imageWidth={640} imageHeight={640} reverse>
					<p>
						En clair le coaching c’est : un accompagnement pour vous permettre de dépasser une difficulté ou pour{' '}
						<strong>atteindre un but</strong>. Il peut être vu comme un soulagement et/ou un développement.
					</p>
					<MirrorParagraphs highlight="Car qui mieux que vous peut savoir ce dont vous avez besoin ?" />
				</ReadingBlock>
			</Section>

			<Section id="howItHappens" title="Ça se passe comment ?">
				<ReadingBlock image="/football.webp" imageAlt="Un ballon de football sur un terrain" imageWidth={667} imageHeight={1000}>
					<p className="reading-label">Prérequis :</p>
					<ul className="reading-list">
						<li>
							Avoir une volonté de changement de la part de la personne car sans cela il ne peut pas y avoir
							d’accompagnement.
						</li>
					</ul>
					<p className="reading-label">Que fait le coach ?</p>
					<ul className="reading-list">
						{COACH_ROLE.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
					<MirrorParagraphs highlight="La parole mène à la transformation, au changement !" />
				</ReadingBlock>
			</Section>

			<Section id="steps" tone="cream" title="Les étapes d’un coaching.">
				<ReadingBlock image="/steps.jpg" imageAlt="Des pas sur un chemin" imageWidth={640} imageHeight={853} reverse>
					<p>
						Un coaching se passe en plusieurs étapes. C’est une sorte de <strong>cycle</strong>. Ce cycle a lieu
						dans la séance et pour un ensemble de séances.
					</p>
					<p>
						La première étape consistera à accepter la situation et d’<strong>accueillir les émotions</strong>,
						afin d’identifier les enjeux. Ainsi, vous serez en mesure de décider des évolutions à mettre en place.
					</p>
					<p>
						Cela permettra de définir vos <strong>buts ou objectifs</strong>. Nous les suivrons pour s’adapter à
						vos <strong>évolutions</strong>. Le questionnement sera central pour vous aider à{' '}
						<strong>changer de perspective</strong>. Nous allons travailler pour vous aider à élaguer la
						situation afin de davantage la percevoir et à vous <strong>sentir mieux</strong>.
					</p>
					<p>
						Et bien sûr l’utilisation des <strong>métaphores</strong> pour aider à changer d’univers et mettre de
						la distance avec les problématiques. C’est-à-dire les <strong>images mentales</strong> de votre
						univers pour vous faire voyager dans des mondes métaphoriques propices à rêver de votre idéal et plus
						tard de vous aider à le matérialiser dans votre réalité.
					</p>
				</ReadingBlock>
			</Section>

			<Section id="timeDuration" title="Combien de temps ça dure ?">
				<ReadingBlock image="/sablier.jpg" imageAlt="Un sablier" imageWidth={640} imageHeight={427}>
					<p>
						Le coaching est à <strong>durée limitée !</strong>
					</p>
					<p>L’accompagnement varie en fonction de votre demande et de vos contraintes.</p>
					<p>
						Le temps passé ne dépend pas forcément d’un type de problématique mais de où vous êtes et d’où vous
						souhaitez aller.
					</p>
					<p className="reading-highlight">En moyenne un accompagnement dure six séances.</p>
					<p>
						Cela peut des fois se régler en une séance. C’est pour cette raison que je propose un format de
						coaching assez original, Les Bulles, une nouvelle forme d’accompagnement éclair qui dure 30 minutes.
					</p>
				</ReadingBlock>
			</Section>

			<Section id="equilibre" tone="cream" title="Notre souci, votre équilibre.">
				<ReadingBlock image="/equilibre.jpg" imageAlt="Des galets en équilibre" imageWidth={640} imageHeight={788} reverse>
					<p className="reading-highlight">
						Votre écologie intérieure, c’est-à-dire votre équilibre, est la priorité.
					</p>
					<p>
						Chaque changement a des conséquences et fera bouger des choses autour de vous. Il faudra donc prendre
						le temps d’envisager les impacts du changement envisagé afin de ne pas toucher à ce qui est important
						pour vous.
					</p>
					<p>
						Il y a des fois où il vaudra peut-être mieux ne pas faire certains changements afin de préserver des
						choses importantes pour vous. Vous devrez décider en conscience et le coach vous aidera à envisager
						les différentes possibilités.
					</p>
				</ReadingBlock>
			</Section>

			<ContactBand />
			<RelatedLinks
				links={[
					{ label: 'Ma vision du coaching', href: '/coaching/vision' },
					{ label: 'Coach ou psy ?', href: '/coaching/psy' },
					{ label: 'Déontologie', href: '/deontologie' },
				]}
			/>
		</>
	);
}
