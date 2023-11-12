import Image from 'next/image';
import { CircleDashed } from 'lucide-react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/twoCircles.svg'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -left-24 top-64 hidden w-[200px] lg:block 2xl:left-0 '
			/>
			<Image
				src={'/forme13.png'}
				width={372}
				height={358}
				alt='fleche bas'
				className='absolute -right-8 top-[320vh] hidden w-[180px] lg:block 2xl:right-0 2xl:top-[290vh] 2xl:w-[220px] 3xl:top-[150vh] 3xl:w-[300px] '
			/>
			<Image
				src={'/forme6.png'}
				width={289}
				height={248}
				alt='fleche bas'
				className='absolute right-0 top-[430vh] hidden w-[180px] lg:block 2xl:top-[70vh] 2xl:w-[220px] 3xl:right-12 3xl:top-[40vh] '
			/>
			<Image
				src={'/forme3.png'}
				width={361}
				height={281}
				alt='fleche bas'
				className='absolute top-[120vh] hidden w-[200px] lg:block 2xl:block 3xl:left-16 3xl:top-[70vh] '
			/>
			<Image
				src={'/forme9.png'}
				width={207}
				height={227}
				alt='fleche bas'
				className='absolute left-0 top-[220vh] hidden w-[150px] lg:block 3xl:top-[180vh] 3xl:w-[250px] '
			/>
			<Image
				src={'/forme2.png'}
				width={221}
				height={207}
				alt='fleche bas'
				className='absolute right-0 top-[140vh] hidden w-[110px] lg:block 2xl:w-[150px] 3xl:w-[250px] '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -left-10 bottom-20 hidden w-[130px] lg:block 2xl:w-[160px] 3xl:-right-12 '
			/>
			<div className='m-auto mt-24 w-[90%] lg:mt-16 lg:w-[80%] 2xl:w-[75%] 3xl:w-[60%]'>
				<div className='flex flex-col gap-[75px]'>
					<div>
						<h1 className='flex justify-center text-center text-3xl font-bold text-blackOne lg:text-left'>
							Qu'est-ce que le coaching ?
						</h1>
						<div className='m-auto mt-2 h-[1px] w-[40%] bg-blackOne'></div>
					</div>
					<div className='flex flex-col gap-[55px] '>
						<h2 className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'>
							Origine
						</h2>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:items-start'>
							<Image
								src='/socrate.jpeg'
								alt='Socrate'
								width={3323}
								height={1829}
								className='w-[300px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<span className='font-bold'>Socrate</span>
								<p>
									L’origine du coaching ne date pas d’hier car Socrate
									est souvent considéré comme le précurseur du
									coaching.
								</p>
								<p>
									Il créa sa propre méthode thérapeutique : la{' '}
									<i> maïeutique</i> dont le coaching est très
									largement inspiré. La maïeutique est issu de
									l’influence de la profession de sa mère qui était «
									sage-femme », et aider les femmes à accoucher le fit
									se définir comme «
									<i>l’accoucheur de l’esprit humain</i> ».
								</p>
								<blockquote className='my-4 italic'>
									« L’accoucheur n’apporte, ne transmet rien à l’âme
									qu’il éveille. Il la laisse nue en face d’elle-même.
									»
								</blockquote>
								<p>
									Cela consiste à utiliser la <i>« Parole »</i> pour la{' '}
									<span className='font-bold'>
										prise de conscience{' '}
									</span>
									; il s’agissait, plus précisément, d ‘utiliser des
									techniques pour questionner l’interlocuteur, ses
									réponses l’amenant vers la prise de conscience, la{' '}
									<i>« connaissance de soi »</i>, à{' '}
									<span className='font-bold'>
										trouver les solutions les plus adaptées à ses
										capacités, à ses croyances et à ses
										représentations, à sa situation et ses enjeux{' '}
									</span>
									, etc... le portant ainsi vers le
									<span className='font-bold'>changement</span>.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:items-start'>
							<Image
								src='/coche.png'
								alt='Le coche'
								width={670}
								height={418}
								className='w-[260px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<span className='text-lg font-bold'>Le coche</span>
								<p>
									L’origine étymologique du mot « coach » est souvent
									méconnue et contrairement à sa sonorité anglaise ce
									mot vient du Français “coche” qui est le nom d’une
									sorte de calèche et dont a découlé le nom du cocher.
								</p>
								<p>
									Car le coaching est un accompagnement menant d’un
									point A à un point B et le coach est celui qui vous
									accompagne en vous aidant à y parvenir.
								</p>
								<p>
									Le terme « coach » peut ainsi être associé à une{' '}
									<span className='font-bold'>
										notion de direction, d’orientation, d’un
										cheminement
									</span>{' '}
									qui se déroule dans le présent, dans le{' '}
									<i>« ici et maintenant »</i>, et allant jusqu’à un{' '}
									<span className='font-bold'>futur</span> plus au
									moins proche, la durée étant relativement courte.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:items-start'>
							<Image
								src='/library.jpg'
								alt='Le coche'
								width={640}
								height={427}
								className='w-[290px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<span className='text-lg font-bold'>De nos jours</span>
								<p>
									En résumé, le coach accompagne, comme Socrate le
									caractérisait, il est « l’éveilleur de la conscience
									» en laissant le coaché découvrir, dans ses propres
									réponses, ses freins, ses incohérences lui permettant
									de les faire évoluer...{' '}
									<span className='font-bold'>
										La parole mène à la transformation, au changement
										!
									</span>
								</p>
								<p>
									Plus tard il y a des influences multiples la
									philosophie, la sociologie, les Arts, ...{' '}
									<span className='font-bold'>
										le coaching s’inspire de la psychanalyse, de la
										psychologie
									</span>{' '}
									regroupant ainsi les pratiques telles que la
									Programmation Neuro-Linguistique (PNL), l’Analyse
									Transactionnelle ou « A.T », la Gestalt-thérapie,
									etc...
								</p>
							</div>
						</div>
						<h2 className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'>
							Concrètement, le coaching, c'est quoi ?
						</h2>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:items-start'>
							<Image
								src='/falaise.jpg'
								alt='falaise'
								width={640}
								height={640}
								className='w-[290px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									En clair le coaching c’est : un accompagnement pour
									vous permettre de{' '}
									<span>dépasser une difficulté</span> ou pour{' '}
									<span className='font-bold'>atteindre un but</span>.
									Il peut être vu comme un soulagement et/ou un
									développement.
								</p>
								<blockquote className='my-4 italic'>
									“Il est bien plus difficile de se juger soi-même que
									de juger autrui.” Le Petit Prince
								</blockquote>
								<p>
									Le but du coach est de vous offrir un cadre pour vous
									permettre de{' '}
									<span className='font-bold'>
										trouver la solution
									</span>{' '}
									ou le chemin qui est le vôtre.
								</p>
								<p className='my-2 text-lg font-bold'>
									Car qui mieux que vous peut savoir ce dont vous avez
									besoin ?
								</p>
								<p>
									Le coach agit <strong>comme un miroir</strong> de la
									parole afin de de vous permettre d’entendre autrement
									votre histoire
								</p>
								<p>
									Le coaching n’a pas pour but de vous transformer mais
									vous aider à mieux vivre en trouvant les solutions
									adaptées à qui vous êtes. La vie est une{' '}
									<strong>perpétuelle évolution</strong>, aucun état
									n’est permanent. Trouver l'équilibre demande souvent
									des ajustements. Le coaching peut vous aider à faire
									le point et retrouver un état dans lequel vous vous
									sentez plus en accord avec vous même.
								</p>
								<p>
									Faire un <i>pas de côté</i> peut permettre de changer
									complètement de prisme et d’entrevoir des choses
									impensables ou inimaginables l’instant d’avant.
								</p>
							</div>
						</div>
						<h2 className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'>
							Ca se passe comment ?
						</h2>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:items-start'>
							<Image
								src='/football.jpg'
								alt='football'
								width={1920}
								height={2880}
								className='w-[240px] object-cover lg:w-[360px]'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>Prérequis :</p>
								<div className='flex items-center gap-10'>
									<CircleDashed className='h-4 w-4' />
									<p className='w-[90%]'>
										Avoir une volonté de changement de la part de la
										personne car sans cela il ne peut pas y avoir
										d’accompagnement.
									</p>
								</div>
								<p className='mt-4'>Que fait le coach ?</p>
								<div className='flex flex-col gap-3'>
									<div className='flex items-center justify-between gap-3'>
										<CircleDashed className='h-4 w-4' />
										<p className='w-[90%]'>
											Aider une personne à trouver sa propre solution
											(car qui mieux quel peut définir ce qui sera le
											mieux pour elle-même).
										</p>
									</div>
									<div className='flex items-center justify-between gap-3'>
										<CircleDashed className='h-4 w-4' />
										<p className='w-[90%]'>
											Il est spécialiste des questions et de la
											reformulation.
										</p>
									</div>
									<div className='flex items-center justify-between gap-3'>
										<CircleDashed className='h-4 w-4' />
										<p className='w-[90%]'>
											Un coach se doit d’être le plus neutre
											possible, à l’image d’un miroir, afin de
											refléter uniquement ce que le client amène. Vos
											dilemmes et interrogations pour mieux que vous
											les perceviez et réajustiez ce que vous
											souhaitez.
										</p>
									</div>
									<div className='flex items-center justify-between gap-3'>
										<CircleDashed className='h-4 w-4' />
										<p className='w-[90%]'>
											Cela demande une capacité de mise à distance de
											sa part. Une manière d’être invisible afin que
											le client puisse se demander à quoi le coach a
											servi. Plus le coach arrive à se mettre à
											distance plus le client travaille. Cela ne veut
											pas dire non plus qu’il n’intervient pas. Il va
											questionner, reformuler, aider à changer de
											perspective, etc.
										</p>
									</div>
									<div className='flex items-center justify-between gap-3'>
										<CircleDashed className='h-4 w-4' />
										<p className='w-[90%]'>
											Il peut aussi être confrontant, en mettant le
											coaché face à ses contradiction ou a des
											dissonances dans son discours. C’est cela qui
											va aider le coaché à voir l’impasse dans
											laquelle il se trouve et éventuellement être
											amené à évoluer pour en sortir.
										</p>
									</div>
								</div>
								<blockquote className='my-6 italic'>
									« Il est bien plus difficile de se juger soi-même que
									de juger autrui. » Le Petit Prince
								</blockquote>
								<p>
									Le but du coach est de vous offrir un cadre pour vous
									permettre de{' '}
									<span className='font-bold'>
										trouver la solution
									</span>{' '}
									ou le chemin qui est le vôtre.
								</p>
								<p className='my-2 text-lg font-bold'>
									Car qui mieux que vous peut savoir ce dont vous avez
									besoin ?
								</p>
								<p>
									Le coach agit <strong>comme un miroir</strong> de la
									parole afin de de vous permettre d’entendre autrement
									votre histoire
								</p>
								<p>
									Le coaching n’a pas pour but de vous transformer mais
									vous aider à mieux vivre en trouvant les solutions
									adaptées à qui vous êtes. La vie est une{' '}
									<strong>perpétuelle évolution</strong>, aucun état
									n’est permanent. Trouver l'équilibre demande souvent
									des ajustements. Le coaching peut vous aider à faire
									le point et retrouver un état dans lequel vous vous
									sentez plus en accord avec vous même.
								</p>
								<p>
									Faire un <i>pas de côté</i> peut permettre de changer
									complètement de prisme et d’entrevoir des choses
									impensables ou inimaginables l’instant d’avant.
								</p>
							</div>
						</div>
						<h2 className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'>
							Les étapes d'un coaching{' '}
						</h2>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:items-start'>
							<Image
								src='/steps.jpg'
								alt='pas'
								width={640}
								height={843}
								className='w-[240px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									Un coaching se passe en plusieurs étapes. C’est une
									sorte de <strong>cycle</strong>. Ce cycle a lieu dans
									la séance et pour un ensemble de séances.
								</p>
								<p>
									La première étape consistera à accepter la situation
									et d'<strong>accueillir les émotions</strong>, afin
									d'identifier les enjeux. Ainsi, vous serez en mesure
									de décider des évolutions à mettre en place.
								</p>
								<p>
									Cela permettra de définir vos{' '}
									<strong>buts ou objectifs</strong>. Nous les suivrons
									et pour s’adapter à vos <strong>évolutions</strong>.
									Le questionnement sera central pour vous vous aider à
									<strong>changer de perspective</strong>. Nous allons
									travailler pour vous aider à élaguer la situation
									afin de davantage la percevoir et à vous{' '}
									<strong>sentir mieux</strong>.
								</p>
								<p>
									Et bien sûr l’utilisation des{' '}
									<strong>métaphores</strong> pour aider à changer
									d’univers et mettre de la distance avec les
									problématiques. C’est à dire les{' '}
									<strong>images mentales</strong> de leurs univers
									pour les faire voyager dans des mondes métaphoriques
									propices à rêver de leur idéal et plus tard les aider
									à le matérialiser dans leur réalité.
								</p>
							</div>
						</div>
						<h2 className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'>
							Combien de temps ça dure ?
						</h2>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:items-start'>
							<Image
								src='/sablier.jpg'
								alt='sablier'
								width={640}
								height={426}
								className='w-[240px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									Le coaching est à <strong>durée limitée !</strong>
								</p>
								<p>
									L’accompagnement varie en fonction de votre demande
									et de vos contraintes.
								</p>
								<p>
									Le temps passé ne dépend pas forcément d’un type de
									problématique mais de où vous êtes et d'où vous
									souhaitez aller.
								</p>
								<p className='font-bold'>
									En moyenne un accompagnement dure six séances.
								</p>
								<p>
									Cela peut des fois se régler en une séance. C'est
									pour cette raison que je propose un format de
									coaching assez original, Les Bulles, une nouvelle
									forme d'accompagnement éclair qui dure 30 minutes.
								</p>
							</div>
						</div>
						<h2 className='-mb-4 text-center text-xl font-bold text-blackOne lg:text-left'>
							Notre souci, votre équilibre
						</h2>
						<div className='flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:items-start'>
							<Image
								src='/equilibre.jpg'
								alt='balance equilibre'
								width={640}
								height={788}
								className='w-[200px] object-cover'
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p className='font-bold'>
									Votre écologie intérieure, c’est à dire votre
									équilibre, est la priorité.
								</p>
								<p>
									Chaque changement à des conséquences et fera bouger
									des choses autour de vous. Il faudra donc prendre le
									temps d’envisager les impacts du changement envisager
									afin de ne pas toucher à ce qui est important pour
									vous.
								</p>
								<p>
									Il y a des fois où il vaudra peut être mieux ne pas
									faire certains changements afin de préserver des
									choses importantes pour vous. Vous devrez décider en
									conscience et le coach vous aide à envisager les
									différentes possibilités.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
