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
				className='absolute left-0 top-64 hidden w-[200px] lg:block '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 hidden w-[160px] lg:block'
			/>
			<div className='absolute left-1/2 top-[105vh] z-20 -translate-x-1/2 translate-y-[-50vh] bg-primaryOne  text-xl  lg:text-4xl'>
				<Link href='/contact'>
					<Button className='ml-auto' size={'xl'}>
						Demandez un devis
					</Button>
				</Link>
			</div>
			<div className='parallax-enterprise relative h-screen w-screen pt-16'>
				<h1 className='h1-striped flex w-screen justify-center  p-4 text-center text-3xl font-bold  text-blackOne lg:text-left'>
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
					<div className='flex w-[90%] flex-col gap-8 lg:w-2/3 lg:text-lg'>
						<p>
							Le coaching en entreprise sert de catalyseur pour débloquer
							le potentiel des équipes et des dirigeants, transformant
							les défis en opportunités. Ce processus enrichissant
							contribue à forger des leaders inspirants et à instaurer
							une dynamique d'équipe solide et solidaire, essentielle
							pour naviguer dans les eaux turbulentes du marché actuel.
							Le coaching en entreprise est donc une pierre angulaire
							pour toute organisation aspirant à l'excellence et à
							l'innovation.
						</p>
					</div>
					<h2 className='-mb-4 text-center text-xl font-bold text-blackOne'>
						Identifier les besoins de votre entreprise
					</h2>
					<div className='flex items-center justify-between gap-10 text-left'>
						<div className='flex flex-col gap-3'>
							<div className='flex h-[85px] items-center gap-8'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-[80%]'>
									<span className='pr-2 font-semibold'>
										Soutien aux Projets et Défis de Croissance :
									</span>
									Accompagnement dans la gestion du changement,
									clarification des missions, renforcement de la
									cohésion et augmentation de la motivation pour
									surmonter les défis de croissance et de
									restructuration.
								</p>
							</div>
							<div className='flex h-[85px] items-center gap-8'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-[80%]'>
									<span className='pr-2 font-semibold'>
										Développement des Compétences et Libération du
										Potentiel :
									</span>
									Renforcement du leadership et gestion efficace des
									talents pour améliorer les compétences individuelles
									et collectives.
								</p>
							</div>
							<div className='flex h-[85px] items-center gap-8'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-[80%]'>
									<span className='pr-2 font-semibold'>
										Amélioration de la Collaboration et Restauration
										de la Confiance :
									</span>
									Techniques pour renforcer l’esprit collaboratif,
									notamment en environnements mixtes (présentiel et
									distanciel), et pour rétablir un climat de confiance
									boostant la performance globale.
								</p>
							</div>
							<div className='flex h-[85px] items-center gap-8'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-[80%]'>
									<span className='pr-2 font-semibold'>
										Adaptation aux Nouvelles Technologies et
										Communication Intergénérationnelle :
									</span>
									Aide à l'adaptation aux évolutions technologiques et
									amélioration de la communication entre différentes
									générations au sein de l'équipe.
								</p>
							</div>
							<div className='flex h-[85px] items-center gap-8'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-[80%]'>
									<span className='pr-2 font-semibold'>
										Agilité et Autonomie face aux Mutations Actuelles
										:
									</span>
									Formation en gestion du temps et développement de
									l'autonomie pour mieux naviguer dans un environnement
									complexe et incertain, répondant ainsi aux enjeux
									futurs.
								</p>
							</div>
						</div>
						<div>
							<Image
								src={'/board.png'}
								width={1241}
								height={796}
								alt='réunion équipe'
								className='w-[1100px] '
							/>
						</div>
					</div>
					<h2 className='-mb-4 text-center text-xl font-bold text-blackOne'>
						Les apports du coaching d'entreprise
					</h2>
					<div className='m-auto mb-6 flex flex-col justify-center gap-12 lg:flex-row lg:flex-wrap'>
						<div className='flex items-center justify-center gap-6 lg:w-[40%] '>
							<Image
								src={'/enterprise4.svg'}
								width={52}
								height={45}
								alt='empathie'
								className='w-[50px] lg:h-[60px] lg:w-[85px] '
							/>
							<h3>
								Réconcilier la <strong>performance </strong> et la
								<strong>qualité de vie au travail</strong>. Prévenir les
								risques psychosociaux et créer un climat de confiance.
							</h3>
						</div>
						<div className='flex items-center justify-center gap-6 lg:w-[40%] '>
							<Image
								src={'/enterprise1.svg'}
								width={83}
								height={83}
								alt='guidance'
								className='w-[47px] lg:w-[72px] '
							/>
							<h3>
								Créer de la <strong>cohésion</strong> et de{' '}
								<strong>l’adhésion</strong>, Capter les signaux faibles
								et développer <strong>l’intelligence collective</strong>{' '}
								pour faire émerger les talents dans l’entreprise.
							</h3>
						</div>
						<div className='flex items-center justify-center gap-6 lg:w-[40%] '>
							<Image
								src={'/enterprise2.svg'}
								width={65}
								height={75}
								alt='rythme'
								className='w-[44px] lg:w-[70px]'
							/>
							<h3>
								Faire <strong>progresser </strong> l’ensemble des
								acteurs de l’entreprise. <strong>Clarifier</strong> la
								volonté des acteurs pour leur permettre de trouver leur
								meilleure place
							</h3>
						</div>
						<div className='flex items-center justify-center gap-6 lg:w-[40%] '>
							<Image
								src={'/enterprise3.svg'}
								width={120}
								height={102}
								alt='force'
								className='w-[50px] lg:h-[65px] lg:w-[80px] '
							/>
							<h3>
								Co-élaborer la structure organisationnelle en alignant
								sur la mission et la <strong>vision</strong> de
								l'entreprise, favorisant <strong>l'engagement</strong>
								des employés et la réussite organisationnelle.
							</h3>
						</div>
					</div>
					<div className='m-auto h-[1px] w-1/2 bg-primaryOne '></div>
					<h2 className='mt-6 text-center text-xl font-bold text-blackOne'>
						Coaching de dirigeant
					</h2>
					<div className='flex flex-row-reverse items-center justify-center gap-10'>
						<div className='flex w-[60%] flex-col gap-10'>
							<div className='space-y-2'>
								<p>
									Le rôle d'un <strong>dirigeant d'entreprise</strong>{' '}
									est souvent comparé à celui d'un chef d'orchestre,
									orchestrant les talents et compétences au sein de son
									organisation. Cependant, malgré l'entourage et le
									soutien des collaborateurs, le dirigeant peut{' '}
									<strong>se sentir isolé</strong> face aux défis
									stratégiques, aux pressions et aux incertitudes.
								</p>
								<p>
									Que ce soit dans le cadre d'une nouvelle nomination,
									la gestion de situations complexes, ou la prise de
									décisions critiques, il est essentiel pour un
									dirigeant de{' '}
									<strong>
										disposer des ressources nécessaires pour surmonter
										ces défis
									</strong>
									.
								</p>
							</div>

							<div className='space-y-2'>
								<p>
									Un coach professionnel spécialisé dans
									l'accompagnement des dirigeants peut jouer un rôle
									clé en offrant un <strong>soutien sur mesure</strong>{' '}
									pour atteindre les objectifs fixés tout en gérant les
									problématiques opérationnelles quotidiennes.
								</p>{' '}
								<p>
									{' '}
									Chez Métaphore Coaching, nous nous engageons à
									établir un{' '}
									<strong>climat de confiance et de sérénité</strong>,
									pour vous guider vers des résultats efficaces et
									personnalisés.
								</p>
							</div>
							<div>
								<Button className='ml-auto' size={'lg'}>
									Plus de renseignements
								</Button>
							</div>
						</div>
						<div>
							<Image
								src={'/chris-cut.png'}
								width={1103}
								height={1275}
								alt='inspiration de dos'
								className='w-[400px] object-cover'
							/>
						</div>
					</div>
					<div className='m-auto flex w-2/3 flex-col gap-4 bg-secondaryOne p-8'>
						<h3 className='text-lg font-bold'>
							Les points clés du coaching de dirigeant :
						</h3>
						<div className='flex items-center justify-center'>
							<div>
								<div className='flex h-[100px] '>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>Renforcement du Leadership :</span> cultiver
										une capacité de leadership efficace et inspirante.
									</p>
								</div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>
											Accompagnement dans les Nouvelles
											Responsabilités :
										</span>
										soutien lors de la prise de nouvelles fonctions ou
										responsabilités.
									</p>
								</div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>Gestion des Conflits et Management :</span>
										stratégies pour surmonter les situations
										conflictuelles en management.
									</p>
								</div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>Confiance et Estime de Soi :</span>améliorer
										la confiance en soi pour prendre des décisions
										affirmées.
									</p>
								</div>
							</div>
							<div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>
											Prise de Recul sur les Situations Complexes :
										</span>
										Aide à la réflexion et à l'analyse pour des
										décisions difficiles.
									</p>
								</div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>Gestion des Priorités et du Stress :</span>
										méthodes pour mieux gérer le temps, les priorités
										et réduire le stress
									</p>
								</div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>Délégation Efficace :</span>
										Apprendre à déléguer pour optimiser la performance
										et l'efficacité.
									</p>
								</div>
								<div>
									{' '}
									<ChevronRightSquare className='h-8 w-8' />
									<p>
										<span>CPréparation aux Événements Clés :</span>
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
