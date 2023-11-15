import { ChevronRightSquare } from 'lucide-react';
import Image from 'next/image';
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
			<div className='parallax relative h-screen w-screen pt-16'>
				<h1 className='flex w-screen justify-center bg-white p-4 text-center text-3xl font-bold  text-blackOne lg:text-left'>
					Coaching Collectif
				</h1>
				<div className='absolute bottom-[38vh] right-24 w-[36%] font-caveat text-5xl text-white'>
					<p>Envie de créer de la cohésion ou d'en retrouver ?</p>
				</div>
				<div className='flex flex-col gap-[75px] p-16 lg:p-24'>
					<div></div>
				</div>
			</div>
			<div className='m-auto mt-24 w-[90%] lg:mt-16 lg:w-[80%] 2xl:w-[75%] 3xl:w-[60%]'>
				<div className='flex flex-col items-center gap-[75px] text-center'>
					<div className='flex w-2/3 flex-col gap-8 text-lg'>
						<p>
							L'efficacité d'une équipe dépend de la synergie entre les
							talents individuels de ses membres et de leur capacité
							collective à opérer de manière efficiente et coordonnée. Le
							coaching d'équipe, à l'instar du coaching individuel, joue
							un rôle crucial en intégrant la préparation mentale pour
							renforcer l'unité du groupe et réaliser les objectifs
							fixés.
						</p>
					</div>
					<div>
						<div className='flex flex-col items-center gap-6'>
							<h2 className='font-caveat text-4xl'>
								Augmentez les performances de votre équipe grâce à des
								individus épanouis
							</h2>
							<Image
								src={'/fulfilled.svg'}
								width={75}
								height={73}
								alt='epanouis'
								className='w-[75px] lg:w-[110px]'
							/>
						</div>
					</div>
					<div className='w-[85%] bg-blackOne p-4 text-white '>
						<div className='flex w-[60%] flex-col gap-6 p-8 text-left'>
							<h2
								className='my-4 text-center text-2xl font-bold'
								id='whatIsIt'>
								Les objectifs d'un coaching d'équipe
							</h2>
							<div className='flex gap-4'>
								<div className='flex gap-4'>
									<ChevronRightSquare className='h-8 w-8' />
									<p className='w-full text-left'>
										Développer le fonctionnement d’une équipe par
										l’intelligence collective pour lui permettre de
										donner toute son efficacité.
									</p>
								</div>
							</div>
							<div className='flex gap-4'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-full'>
									Favoriser la communication et la coopération au sein
									de l’équipe : concourir ensemble à l’atteinte des
									objectifs, Désamorcer les situations de conflits et
									de crises.
								</p>
							</div>
							<div className='flex gap-4'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-full'>
									Mobiliser les compétences collectives et améliorer
									les performances : une équipe est porteuse de
									compétences collectives dans lesquelles réside sa
									force.
								</p>
							</div>
							<div className='flex gap-4'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-full'>
									Transformer la diversité et la complémentarité des
									profils des équipiers en talent d’équipe.
								</p>
							</div>
							<div className='flex gap-4'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-full'>
									Accompagner les transformations et les équipes qui
									les vivent et les mettre en œuvre.
								</p>
							</div>
							<div className='flex gap-4'>
								<ChevronRightSquare className='h-8 w-8' />
								<p className='w-full'>
									Réussir la mise en œuvre des projets de changement et
									de transformation d'entreprise : nouvelle
									organisation, fusion intégration d'un nouveau membre
									dans une équipe, démarrage d'un projet
									multi-disciplinaire.
								</p>
							</div>
						</div>
						<div></div>
					</div>
					<div className='flex w-2/3 flex-col gap-8 text-lg'>
						<p>
							Un vrai travail d’équipe repose sur la volonté de ses
							membres de mettre en commun leurs talents individuels au
							profit du collectif. L’accompagnement est bien sur adapté à
							la situation, aux enjeux et aux objectifs. C’est pourquoi
							un coaching d’équipe s’inscrit dans la durée et se déroule
							en plusieurs phases de montée en puissance
						</p>
					</div>

					<div className='flex w-[85%] bg-secondaryOne p-4 text-blackOne lg:flex-row-reverse '>
						<div className='flex w-[70%] flex-col gap-6 p-8 text-left'>
							<h2
								className='my-4 text-center text-2xl font-bold'
								id='whatIsIt'>
								Déroulement d'un coaching d'équipe
							</h2>
							<div className='flex gap-4'>
								<div className='flex w-full items-center justify-between'>
									<span className='w-1/3 font-caveat text-4xl font-bold'>
										Etape 1.
									</span>
									<p className='w-full px-8 text-left'>
										Apprendre à se connaitre et travailler ensemble.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-2'>
								<div className='flex w-full items-center justify-between'>
									<span className='w-1/3 font-caveat text-4xl font-bold'>
										Etape 2.
									</span>
									<p className='w-full px-8 text-left'>
										Exprimer une vision partagée de la réalité (état
										des lieux), découverte de l'équipe afin de définir
										les objectifs, besoins et enjeux. Les objectifs
										sont définis en collaboration avec le responsable
										de l'équipe et l'équipe elle-même.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-4'>
								<div className='flex w-full items-center justify-between'>
									<span className='w-1/3 font-caveat text-4xl font-bold'>
										Etape 3.
									</span>
									<p className='w-full px-8 text-left'>
										Construire la vision d’un avenir commun avec son
										plan d’action, , Une restitution des besoins et
										demandes de l'équipe et du manager destinés à
										calibrer les objectifs et modalités de
										l'accompagnement.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-6'>
								<div className='flex w-full items-center justify-between'>
									<span className='w-1/3 font-caveat text-4xl font-bold'>
										Etape 4.
									</span>
									<p className='w-full px-8 text-left'>
										Mettre en œuvre le plan, itérer et adapter en
										fonction des résultats constatés.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-6'>
								<div className='flex w-full items-center justify-between'>
									<span className='w-1/3 font-caveat text-4xl font-bold'>
										Etape 5.
									</span>
									<p className='w-full px-8 text-left'>
										Séance de bilan à l'issue de l'accompagnement.
									</p>
								</div>
							</div>
						</div>
						<div className='flex w-[30%] items-center justify-center'>
							<Image
								src={'/oneway.svg'}
								width={84}
								height={109}
								alt='cheminement'
								className='w-[170px] text-white'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
