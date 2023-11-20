import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronRightSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/twoCircles.svg'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute left-0 top-64 hidden w-[200px] lg:block'
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 hidden w-[160px] lg:block 3xl:w-[200px]'
			/>
			<Image
				src={'/forme13.png'}
				width={372}
				height={358}
				alt='cercle jaune'
				className='absolute -left-12 top-[115vh] hidden w-[230px] lg:block 3xl:w-[360px]'
			/>
			<Image
				src={'/forme4.png'}
				width={289}
				height={269}
				alt='cercle jaune'
				className='absolute right-6 top-[135vh] hidden w-[230px] lg:block 3xl:top-[150vh] 3xl:w-[320px]'
			/>
			<Image
				src={'/forme7.png'}
				width={463}
				height={344}
				alt='cercle jaune'
				className='absolute -left-2 top-[195vh] hidden w-[130px] lg:block 3xl:top-[215vh] 3xl:w-[300px] '
			/>
			<Image
				src={'/forme10.png'}
				width={223}
				height={181}
				alt='cercles bleus'
				className='absolute -right-4 top-[235vh] hidden w-[230px] lg:block'
			/>
			<Image
				src={'/forme9.png'}
				width={207}
				height={227}
				alt='cercles bleus'
				className='absolute left-4 top-[285vh] hidden w-[150px] lg:block 2xl:top-[300vh] 3xl:top-[280vh] 3xl:w-[300px] '
			/>
			<Image
				src={'/forme3.png'}
				width={361}
				height={281}
				alt='cercles bleus'
				className='absolute bottom-[50vh] left-8 hidden w-[180px] lg:block 2xl:bottom-[25vh]'
			/>
			<div className='absolute left-1/2 top-[105vh] z-20 -translate-x-1/2 translate-y-[-50vh] bg-primaryOne  text-xl  lg:text-4xl'>
				<Link href='/contact'>
					<Button className='ml-auto' size={'xl'}>
						Demandez un devis
					</Button>
				</Link>
			</div>
			<div className='parallax-enterprise relative h-screen w-screen pt-16'>
				<h1 className='flex w-screen justify-center bg-white  p-4 text-center text-3xl font-bold  text-blackOne lg:text-left'>
					Coaching en entreprise
				</h1>
				<div className='absolute right-24 top-[30vh] bg-blackOne/30 font-caveat text-3xl text-white lg:bottom-[38vh] lg:w-[36%] lg:bg-transparent lg:text-5xl'>
					<p>Besoin de faire évoluer une personne ou un groupe ?</p>
				</div>
				<div className='flex flex-col gap-[75px] p-16 lg:p-24'>
					<div></div>
				</div>
			</div>
			<div className='m-auto mt-24 w-[90%] lg:mt-16 lg:w-[80%] 2xl:w-[75%] 3xl:w-[60%]'>
				<div className='flex flex-col items-center gap-[75px] text-center'>
					<div className='flex w-[90%] flex-col gap-8 text-base lg:w-2/3 lg:text-lg'>
						<p>
							Le coaching en entreprise sert de catalyseur pour débloquer
							le potentiel des équipes et des dirigeants, transformant
							les défis en opportunités. Ce processus enrichissant
							contribue à forger des leaders inspirants et à instaurer
							une dynamique d'équipe solide et solidaire, essentielle
							pour naviguer dans les eaux turbulentes du marché actuel.
							Le coaching en entreprise peut donc être vu comme une des
							pierre angulaire d’une organisation aspirant à l'excellence
							et à l'innovation.
						</p>
					</div>
					<h2 className='-mb-4 text-center text-xl font-bold text-blackOne'>
						Identifier les besoins de votre entreprise
					</h2>
					<div className='flex flex-col-reverse items-center justify-between gap-10 text-left lg:flex-row'>
						<div className='flex flex-col gap-6'>
							<div className='flex items-start gap-8'>
								<ChevronRightSquare />
								<p className='w-[80%]'>
									<span className='block pr-2 font-semibold'>
										Soutien aux Projets et Défis de Croissance
									</span>
									Accompagnement dans la gestion du changement, travail
									sur la motivation pour surmonter les défis de
									croissance et de restructuration.
								</p>
							</div>
							<div className='flex items-start gap-8'>
								<ChevronRightSquare />
								<p className='w-[80%]'>
									<span className='block pr-2 font-semibold'>
										Développement des Compétences et Libération du
										Potentiel
									</span>
									Renforcement du leadership et gestion efficace des
									talents pour améliorer les compétences individuelles
									et collectives.
								</p>
							</div>
							<div className='flex items-start gap-8'>
								<ChevronRightSquare />
								<p className='w-[80%]'>
									<span className='block pr-2 font-semibold'>
										Amélioration de la Collaboration et Restauration
										de la Confiance
									</span>
									Techniques pour renforcer l’esprit collaboratif,
									notamment en environnements mixtes, pour rétablir un
									climat de confiance boostant la performance globale.
								</p>
							</div>
							<div className='flex items-start gap-8'>
								<ChevronRightSquare />
								<p className='w-[80%]'>
									<span className='block pr-2 font-semibold'>
										Adaptation aux Nouvelles Technologies et
										Communication Intergénérationnelle
									</span>
									Aide à l'adaptation aux évolutions technologiques et
									amélioration de la communication entre différentes
									générations au sein de l'équipe.
								</p>
							</div>
							<div className='flex items-start gap-8'>
								<ChevronRightSquare />
								<p className='w-[80%]'>
									<span className='block pr-2 font-semibold'>
										Agilité et Autonomie face aux Mutations Actuelles
									</span>
									Formation en gestion du temps et développement de
									l'autonomie pour mieux naviguer dans un environnement
									complexe et incertain, répondant aux enjeux futurs.
								</p>
							</div>
						</div>
						<div>
							<Image
								src={'/board.png'}
								width={1241}
								height={796}
								alt='réunion équipe'
								className='w-[1100px] 2xl:w-[1400px] '
							/>
						</div>
					</div>
					<h2 className='-mb-4 text-center text-xl font-bold text-blackOne'>
						Les apports du coaching d'entreprise
					</h2>
					<div className='m-auto flex flex-col justify-center gap-12 text-left lg:mb-6 lg:flex-row lg:flex-wrap lg:leading-7'>
						<div className='flex items-center justify-center gap-8 lg:w-[40%] '>
							<Image
								src={'/enterprise4.svg'}
								width={52}
								height={45}
								alt='empathie'
								className='w-[50px] lg:h-[60px] lg:w-[72px] '
							/>
							<h3>
								Réconcilier la &nbsp;<strong>performance </strong>&nbsp;
								et la &nbsp;<strong>qualité de vie au travail</strong>
								&nbsp;. Prévenir les risques psychosociaux et créer un
								climat de confiance.
							</h3>
						</div>
						<div className='flex items-center justify-center gap-8 lg:w-[40%] '>
							<Image
								src={'/enterprise1.svg'}
								width={83}
								height={83}
								alt='guidance'
								className='w-[47px] lg:w-[72px] '
							/>
							<h3>
								Créer de la &nbsp;<strong>cohésion</strong>&nbsp; et de
								&nbsp;
								<strong>l’adhésion</strong>&nbsp;, Capter les signaux
								faibles et développer &nbsp;
								<strong>l’intelligence collective</strong>&nbsp; pour
								faire émerger les talents dans l’entreprise.
							</h3>
						</div>
						<div className='flex items-center justify-center gap-8 lg:w-[40%] '>
							<Image
								src={'/enterprise2.svg'}
								width={65}
								height={75}
								alt='rythme'
								className='w-[44px] lg:w-[70px]'
							/>
							<h3>
								Faire &nbsp;<strong>progresser </strong>&nbsp;
								l’ensemble des acteurs de l’entreprise. &nbsp;
								<strong>Clarifier</strong>&nbsp; la volonté des acteurs
								pour leur permettre de trouver leur meilleure place
							</h3>
						</div>
						<div className='flex items-center justify-center gap-8 lg:w-[40%] '>
							<Image
								src={'/enterprise3.svg'}
								width={120}
								height={102}
								alt='force'
								className='w-[50px] lg:h-[65px] lg:w-[80px] '
							/>
							<h3>
								Co-élaborer la structure organisationnelle en alignant
								sur la mission et la &nbsp;<strong>vision</strong>&nbsp;
								de l'entreprise, favorisant &nbsp;
								<strong>l'engagement</strong>&nbsp; des employés et la
								réussite organisationnelle.
							</h3>
						</div>
					</div>
					<h2 className='mt-10 flex w-screen justify-center bg-primaryOne  p-4 text-center text-3xl font-bold  text-blackOne lg:text-left'>
						Coaching de dirigeant
					</h2>
					<div className='flex flex-col-reverse items-center justify-center gap-10 lg:flex-row-reverse'>
						<div className='flex flex-col gap-10 text-left lg:w-[60%] lg:text-center'>
							<div className='space-y-3 lg:space-y-2'>
								<p>
									Le rôle d'un &nbsp;
									<strong>dirigeant d'entreprise</strong>&nbsp; est
									souvent comparé à celui d'un chef d'orchestre,
									orchestrant les talents et compétences au sein de son
									organisation. Cependant, malgré l'entourage et le
									soutien des collaborateurs, le dirigeant peut &nbsp;
									<strong>se sentir isolé</strong>&nbsp; face aux défis
									stratégiques, aux pressions et aux incertitudes.
								</p>
								<p>
									Que ce soit dans le cadre d'une nouvelle nomination,
									la gestion de situations complexes, ou la prise de
									décisions critiques, il est essentiel pour un
									dirigeant de&nbsp;
									<strong>
										disposer des ressources nécessaires pour surmonter
										ces défis
									</strong>
									&nbsp; .
								</p>
							</div>

							<div className='space-y-3 lg:space-y-2'>
								<p>
									Un coach professionnel spécialisé dans
									l'accompagnement des dirigeants peut jouer un rôle
									clé en offrant un &nbsp;
									<strong>soutien sur mesure</strong>
									&nbsp; pour atteindre les objectifs fixés tout en
									gérant les problématiques opérationnelles
									quotidiennes.
								</p>
								<p>
									Chez Métaphore Coaching, nous nous engageons à
									établir un &nbsp;
									<strong>climat de confiance et de sérénité,</strong>
									&nbsp; pour vous guider vers des résultats efficaces
									et personnalisés.
								</p>
							</div>
							<div className='m-auto lg:w-1/2'>
								<Link href='/contact'>
									<Button
										className='ml-auto flex w-full gap-2'
										size={'lg'}>
										{' '}
										<span>Plus de renseignements</span>{' '}
										<ArrowUpRight />{' '}
									</Button>
								</Link>
							</div>
						</div>
						<div>
							<Image
								src={'/chris-cut.png'}
								width={1103}
								height={1275}
								alt='inspiration de dos'
								className='w-[220px] object-cover lg:w-[400px]'
							/>
						</div>
					</div>
					<div className='flex w-screen flex-col gap-12 bg-secondaryOne p-8 lg:m-auto lg:w-3/4'>
						<h3 className='text-lg font-bold'>
							Les points clés du coaching de dirigeant :
						</h3>
						<div className='flex flex-col items-start justify-start gap-4 text-left lg:flex-row lg:gap-10'>
							<div className='flex flex-col items-start justify-start space-y-5 lg:w-1/2 lg:space-y-0'>
								<div className='flex items-start justify-between  py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Renforcement du Leadership
										</span>
										Cultiver une capacité de leadership efficace et
										inspirante.
									</p>
								</div>
								<div className='flex items-start justify-between   py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Accompagnement dans les Nouvelles
											Responsabilités
										</span>
										Soutien lors de la prise de nouvelles
										responsabilités.
									</p>
								</div>
								<div className='mb-12 flex items-start justify-between  py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Gestion des Conflits et Management
										</span>
										Stratégies pour surmonter les situations
										conflictuelles en management.
									</p>
								</div>
								<div className='flex items-start justify-between   py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Confiance et Estime de Soi
										</span>
										La confiance en soi pour prendre des décisions
										affirmées.
									</p>
								</div>
							</div>
							<div className='flex flex-col items-start justify-start space-y-5 lg:w-1/2 lg:space-y-0'>
								<div className='flex items-start justify-between   py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Prise de Recul sur les Situations Complexes
										</span>
										Aide à la réflexion et à l'analyse pour des
										décisions difficiles.
									</p>
								</div>
								<div className='flex items-start justify-between   py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Gestion des Priorités et du Stress
										</span>
										Méthodes pour mieux gérer le temps, les priorités
										et réduire le stress.
									</p>
								</div>
								<div className='flex items-start justify-between   py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Délégation Efficace
										</span>
										Apprendre à déléguer pour optimiser la performance
										et l'efficacité.
									</p>
								</div>
								<div className='flex items-start justify-between   py-1 lg:py-4'>
									{' '}
									<ChevronRightSquare />
									<p className='flex w-[80%] flex-col gap-1 lg:block'>
										<span className='px-[3px] font-bold lg:block'>
											Préparation aux Événements Clés
										</span>
										Techniques pour se préparer à des événements
										importants, négociations, ou prises de parole.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
