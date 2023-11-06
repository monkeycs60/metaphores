import Image from 'next/image';
import React from 'react';

export const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/twoCircles.svg'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute left-0 top-64 w-[200px] '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 w-[160px] '
			/>
			<div className='m-auto mt-16 w-[60%]'>
				<div>
					<div className='flex flex-col gap-[55px]'>
						<div>
							<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
								Coach ou psychologue : clarifications
							</h1>
							<div className='m-auto mt-2 h-[1px] w-[50%] bg-blackOne'></div>
						</div>
						<div>
							<p className='text-lg'>
								Il est de plus en plus dur de trouver des personnes qui
								écoutent vraiment. Écouter dans le sens être avec
								l’autre en se mettant à distance pour l’accompagner.
								C’est à dire sans parler de soi. Sans se référer à soi
								pour trouver des solutions pour l’autre. Sans penser que
								sa solution sera aussi bonne pour vous.
							</p>
						</div>
						<div className='flex items-center justify-between gap-[40px]'>
							<Image
								src={'/psycoach.png'}
								width={1458}
								height={813}
								alt='psy'
								className='w-[400px] '
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									<span className='font-bold'>
										Le coach n’est pas un psychologue !
									</span>{' '}
									Il n’a pas de formation pour intervenir sur le passé
									du client et doit donc y faire attention.
								</p>
								<p>
									C’est un{' '}
									<span className='font-bold'>
										spécialiste du langage
									</span>
									. Il travaille dans l’ici et maintenant et vers le
									futur. Il est là pour vous écouter, à l’instar d’un
									psy. Accueillir ce qui vous amène. Il se rapproche du
									psy en ce sens mais contrairement à lui ne va pas
									travailler à déconstruire votre passé. Le coach vous
									accompagne dans le présent pour mettre en œuvre des
									changements dans le futur.
								</p>
								<p className='font-bold'>
									Son écoute sera active car il va reformuler et
									questionner pour vous aider à clarifier vos pensées.
								</p>
							</div>
						</div>
						<div className='flex flex-row-reverse items-center justify-between gap-[40px]'>
							<Image
								src={'/times.jpg'}
								width={640}
								height={852}
								alt='psy'
								className='w-[220px] '
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									Le coach accompagne en vous ramenant{' '}
									<span className='font-bold'>
										dans le présent afin de vous projeter vers votre
										avenir{' '}
									</span>{' '}
									et agir dans votre vie. Il se peut que dans cet
									accompagnant le passé soit évoqué et discuté afin de
									mieux travailler dans le présent mais il ne sera pas
									travaillé.
								</p>
								<p>
									Si vous souhaitez approfondir la compréhension de ce
									passé, le travailler, pour éventuellement le
									déconstruire ou mieux l’appréhender, il sera
									préférable de recourir aux services d'un psychologue
									ou psychiatre car ce sont leurs domaines
									d’application.
								</p>
								<p>
									Cette réorientation ne signifie pas forcement la fin
									de l’accompagnement car ces deux approches sont
									différentes. Elles peuvent donc être complémentaires
									et menées en parallèle en fonction des besoins. Il
									revient donc à chacun de choisir la solution qui
									répondra au mieux à ses préoccupations du moment.
								</p>
							</div>
						</div>
						<div>
							<h2 className='text-xl font-bold text-blackOne'>
								Il est quoi le coach ?
							</h2>
						</div>
						<div className='flex flex-row items-center justify-between gap-[40px]'>
							<Image
								src={'/binocular.jpg'}
								width={640}
								height={960}
								alt='psy'
								className='w-[200px] '
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									Un coach en réalité n’est{' '}
									<span className='font-bold'>pas un entraîneur </span>{' '}
									qui va vous donner tout un tas d'exercices qu’il sait
									pouvoir vous aider à performer dans un domaine mais
									plutôt quelqu’un qui va vous accompagner sur le
									chemin que vous choisirez d’emprunter.
								</p>
								<p>
									Le postulat de base est que l’on ne sait pas où vous
									devez aller. Le coach n’a pas à être un spécialiste
									de votre branche ou d’un domaine. D’ailleurs moins il
									le sera plus il sera amène de vous accompagner de
									manière neutre. Cela évitera qu’il ait une idée
									préconçu sur ce qui vous amène.{' '}
									<span className='font-bold'>
										Il est la longue vue de votre esprit.
									</span>
								</p>
								<p>
									Il n’est donc{' '}
									<span className='font-bold'>
										pas non plus un guide ou un conseiller.
									</span>
								</p>
							</div>
						</div>
						<div className='flex flex-row-reverse items-center justify-between gap-[40px]'>
							<Image
								src={'/blocnotes.jpg'}
								width={640}
								height={426}
								alt='psy'
								className='w-[320px] '
							/>
							<div className='flex flex-1 flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
								<p>
									Ce qui vous amène c’est une envie de changement, un
									problème, une frustration, une envie de progresser,
									un changement de vie… La clarification va donc vous
									permettre de trouver des solutions ou des pistes.
								</p>
								<p>
									Le coach pourrait être un{' '}
									<span className='font-bold'>clarificateur. </span> Il
									va en questionnant et reformulant essayer de vous
									aider à différencier vos pensées et les faits, à
									questionner vos croyances, vos convictions pour vous
									permettre de comprendre et de clarifier votre
									situation et la faire évoluer.
								</p>
								<p>
									Cela va vous permettra de changer ce qui est
									nécessaire et avancer.
								</p>
								<p>
									Plus le coach sera neutre, plus il reflétera vos
									pensées et sera à même de vous aider à clarifier les
									choses pour vous.
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
