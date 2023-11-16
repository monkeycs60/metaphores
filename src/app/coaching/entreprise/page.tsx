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
				</div>
			</div>
		</div>
	);
};

export default page;
