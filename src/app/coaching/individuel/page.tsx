import Image from 'next/image';
import React from 'react';
import { Minus, ChevronRightSquare, Dot } from 'lucide-react';
import Link from 'next/link';

const page = () => {
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
				<div className='flex flex-col gap-[75px]'>
					<div>
						<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
							Coaching Individuel
						</h1>
						<div className='m-auto mt-2 h-[1px] w-[32%] bg-blackOne'></div>
					</div>
					<div className='-my-4 flex items-center justify-center gap-20'>
						<p className='w-1/3 text-center text-lg'>
							Explorez nos formules de coaching{' '}
							<strong>individuel</strong>, conçues pour vous soutenir
							dans la découverte de vos propres solutions. Nous sommes
							ici pour vous accompagner, à chaque pas, sur le chemin de
							l'autonomie et de la compréhension personnelle.
						</p>
						<Image
							src={'/soutien2.svg'}
							className='w-[300px] '
							alt='main tendue'
							width={646}
							height={554}
						/>
					</div>
					<div className='flex flex-col gap-[55px]'>
						<h2 className='-mb-4 text-xl font-bold text-blackOne'>
							Formules
						</h2>
						<div className='m-auto flex w-[90%] gap-[50px]'>
							<div className='flex h-[650px] w-1/2 flex-col items-center gap-12 bg-secondaryOne p-8'>
								<div className='flex flex-col gap-2 text-center'>
									<h3 className='text-3xl font-bold'>Coaching Pro</h3>
									<span className='text-lg'>
										Accompagnement professionnel
									</span>
								</div>
								<h4 className='text-center italic'>
									Cultivez votre potentiel professionnel avec un
									accompagnement respectueux et attentif.
								</h4>
								<div className='flex h-2/3 flex-col justify-between gap-5'>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Clarification des objectifs de carrière et
											exploration de nouvelles avenues.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Renforcement des aptitudes de communication
											dans le respect de votre style personnel.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Stratégies personnalisées pour la gestion du
											stress et la résolution de conflits.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Soutien dans la transition vers des rôles
											professionnels plus épanouissants.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Appréhender des bouleversements professionnels
											: reconversion, changement de poste...
										</p>
									</div>
								</div>
							</div>
							<div className='flex h-[650px] w-1/2 flex-col items-center gap-12 bg-secondaryOne/60 p-8'>
								<div className='flex flex-col gap-2 text-center'>
									<h3 className='text-3xl font-bold'>
										Coaching de Vie
									</h3>
									<span className='text-lg'>
										Accompagnement personnel
									</span>
								</div>
								<h4 className='text-center italic'>
									Avancez vers une meilleure compréhension de vous-même
									et de ce qui compte vraiment pour vous.
								</h4>
								<div className='flex h-2/3 flex-col justify-between gap-5'>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Identification et mise en œuvre de projets de
											vie significatifs.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Renforcement de la confiance en soi et
											valorisation de votre parcours unique.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Accompagnement dans les transitions de vie et
											les décisions importantes.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Écoute et outils pour mieux gérer les émotions
											et les périodes de deuil.
										</p>
									</div>
									<div className='flex gap-4'>
										<ChevronRightSquare className='h-8 w-8' />
										<p className='w-full'>
											Aide à la préparation et à l'adaptation aux
											changements de vie, comme la retraite.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-[55px]'>
							<h2 className='-mb-4 text-xl font-bold text-blackOne'>
								Pourquoi choisir le coaching individuel ?
							</h2>
							<div>
								<p></p>
								<div>
									<Image
										src={'/empathy.svg'}
										width={52}
										height={45}
										alt='empathie'
									/>
									<h3>
										Écoute active et empathique : Nous offrons un
										espace d'écoute où vous êtes entendu et vos
										expériences, valorisées.
									</h3>
								</div>
								<div>
									<Image
										src={'/guidance.svg'}
										width={83}
										height={83}
										alt='guidance'
									/>
									<h3>
										Guidance discrète: mon rôle est de vous guider
										avec subtilité, en vous aidant à révéler vos
										propres réponses et solutions.
									</h3>
								</div>
								<div>
									<Image
										src={'/rythm.svg'}
										width={65}
										height={75}
										alt='rythme'
									/>
									<h3>
										Respect de votre rythme : il est très important
										pour moi de de progresser à votre propre cadence,
										en assurant un suivi adapté à vos besoins.
									</h3>
								</div>
								<div>
									<Image
										src={'/strength.svg'}
										width={120}
										height={102}
										alt='force'
									/>
									<h3>
										Approche basée sur vos forces: Nous mettons en
										lumière vos compétences et qualités pour vous
										aider à bâtir sur ce que vous avez déjà.
									</h3>
								</div>
							</div>
							<p>
								Le coaching individuel est offert en sessions de 60
								minutes. Les séances se déroulent en ligne, par
								téléphone ou en personne, selon votre préférence.
							</p>
						</div>
						<div className='flex flex-col gap-[55px]'>
							<h2 className='-mb-4 text-xl font-bold text-blackOne'>
								Modalités et questions fréquentes
							</h2>
							<div>
								<p>
									Pour en savoir plus sur la structure de nos séances,
									les options de forfaits et les tarifs, veuillez
									visiter notre page{' '}
									<Link href={'/offers'}>Tarifs</Link>. Nous proposons
									une variété de formules pour s'adapter à différents
									besoins et préférences.
								</p>
								<p>
									Si vous hésitez sur la formule qui vous conviendrait
									le mieux ou si vous souhaitez obtenir plus
									d'informations, n'hésitez pas à nous contacter. Notre
									page Contact est le moyen le plus rapide pour nous
									joindre et pour que nous puissions répondre à toutes
									vos questions. Vous pouvez également programmer une
									première consultation pour discuter de vos attentes
									et voir comment le coaching individuel peut vous être
									bénéfique.
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
