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
			<Image
				src={'/forme4.png'}
				width={289}
				height={269}
				alt='fleche bas'
				className='absolute left-2 top-[120vh] hidden w-[220px] lg:block 3xl:w-[320px]'
			/>
			<Image
				src={'/forme6.png'}
				width={289}
				height={269}
				alt='fleche bas'
				className='absolute right-2 top-[135vh] hidden w-[160px] lg:block 2xl:hidden'
			/>
			<Image
				src={'/forme11.png'}
				width={485}
				height={283}
				alt='fleche bas'
				className='absolute right-2 top-[180vh] hidden w-[220px] lg:block 3xl:w-[320px]'
			/>
			<Image
				src={'/forme1.png'}
				width={92}
				height={90}
				alt='fleche bas'
				className='absolute left-2 top-[220vh] hidden w-[92px] lg:block 3xl:w-[120px]'
			/>
			<Image
				src={'/forme6.png'}
				width={289}
				height={248}
				alt='fleche bas'
				className='absolute -right-6 top-[285vh] hidden w-[260px] lg:block 3xl:hidden'
			/>
			<Image
				src={'/forme13.png'}
				width={372}
				height={358}
				alt='fleche bas'
				className='absolute left-0 top-[280vh] hidden w-[180px] lg:block 3xl:bottom-[10vh]'
			/>
			<Image
				src={'/forme1.png'}
				width={92}
				height={90}
				alt='fleche bas'
				className='absolute bottom-[60vh] left-2 hidden w-[92px] lg:block'
			/>
			<div className='absolute left-1/2 top-[105vh] z-20 -translate-x-1/2 translate-y-[-50vh] bg-primaryOne  text-xl  lg:text-4xl'>
				<Button className='ml-auto' size={'xl'}>
					Demandez un devis
				</Button>
			</div>
			<div className='parallax relative h-screen w-screen pt-16'>
				<h1 className='flex w-screen justify-center bg-white p-4 text-center text-3xl font-bold  text-blackOne lg:text-left'>
					Coaching Collectif
				</h1>
				<div className='absolute right-24 top-[30vh] bg-blackOne/30 font-caveat text-3xl text-white lg:bottom-[38vh] lg:w-[36%] lg:bg-transparent lg:text-5xl'>
					<p>Envie de créer de la cohésion ou d'en retrouver ?</p>
				</div>
				<div className='flex flex-col gap-[75px] p-16 lg:p-24'>
					<div></div>
				</div>
			</div>
			<div className='m-auto mt-24 w-[90%] lg:mt-16 lg:w-[80%] 2xl:w-[75%] 3xl:w-[60%]'>
				<div className='flex flex-col items-center gap-[75px] text-center'>
					<div className='flex w-[90%] flex-col gap-8 lg:w-2/3 lg:text-lg'>
						<div className='relative mb-4  flex flex-col items-center gap-4 bg-primaryOne/20 p-8 text-center lg:mb-10 lg:mt-0 lg:gap-2 lg:text-left lg:text-lg'>
							<p>
								Club de sport, association, fédération, troupe de
								théatre...
							</p>
							<p className='underline underline-offset-4'>
								<span className='font-bold'>
									Le coaching d’équipe peut vous aider !
								</span>
							</p>
							<Image
								src={'/group.svg'}
								width={563}
								height={532}
								alt='team'
								className='absolute right-2 top-2 w-[25px] lg:right-4 lg:top-4 lg:w-[35px] '
							/>
						</div>
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
							<h2 className='font-caveat text-3xl lg:text-4xl'>
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
					<div className='flex w-screen flex-col-reverse bg-blackOne p-12 text-white lg:w-[85%] lg:flex-row lg:p-4 '>
						<div className='flex w-full flex-col gap-6 text-left lg:w-[60%] lg:p-8'>
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
									objectifs, désamorcer les situations de conflits et
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
									de transformation : nouvelle organisation, fusion
									intégration d'un nouveau membre dans une équipe,
									démarrage d'un projet multi-disciplinaire.
								</p>
							</div>
						</div>
						<div className='flex items-center justify-center lg:w-[40%] '>
							<Image
								src={'/4concepts.png'}
								width={846}
								height={847}
								alt='4 valeurs'
								className='w-[150px] lg:w-[340px] '
							/>
						</div>
					</div>
					<div className='flex w-full justify-center'>
						<Link
							href='/reservation'
							className='flex w-full justify-center'>
							<Button
								size={'lg'}
								className='gap-2 bg-primaryOne lg:w-1/3'>
								{' '}
								<span>Réserver ma séance</span> <ArrowUpRight />
							</Button>
						</Link>
					</div>
					<div className='flex flex-col gap-8 lg:w-2/3 lg:text-lg'>
						<p>
							Un vrai travail d’équipe repose sur la volonté de ses
							membres de mettre en commun leurs talents individuels au
							profit du collectif. L’accompagnement est bien sûr adapté à
							la situation, aux enjeux et aux objectifs. C’est pourquoi
							un coaching d’équipe s’inscrit dans la durée et se déroule
							en plusieurs phases de montée en puissance.
						</p>
					</div>

					<div className='flex w-screen flex-col-reverse bg-secondaryOne  px-2 py-12 text-blackOne lg:w-[85%] lg:flex-row-reverse lg:p-4 '>
						<div className='flex flex-col gap-6 text-left lg:w-[70%] lg:p-8'>
							<h2
								className='my-4 text-center text-2xl font-bold'
								id='whatIsIt'>
								Déroulement d'un coaching d'équipe
							</h2>
							<div className='flex gap-4'>
								<div className='flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-0'>
									<span className='font-caveat text-4xl font-bold lg:w-1/3'>
										Etape 1.
									</span>
									<p className='w-full px-8 text-left'>
										Apprendre à se connaitre et travailler ensemble.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-2'>
								<div className='flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-0'>
									<span className='font-caveat text-4xl font-bold lg:w-1/3'>
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
								<div className='flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-0'>
									<span className='font-caveat text-4xl font-bold lg:w-1/3'>
										Etape 3.
									</span>
									<p className='w-full px-8 text-left'>
										Restitution des besoins et demandes de l'équipe et
										du manager destinés à calibrer les objectifs et
										modalités de l'accompagnement. Construire la
										vision d’un avenir commun avec son plan d’action.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-6'>
								<div className='flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-0'>
									<span className='font-caveat text-4xl font-bold lg:w-1/3'>
										Etape 4.
									</span>
									<p className='w-full px-8 text-left'>
										Mettre en œuvre le plan, itérer et adapter en
										fonction des résultats constatés.
									</p>
								</div>
							</div>
							<div className='flex gap-4 px-6'>
								<div className='flex w-full flex-col items-center justify-between gap-3 lg:flex-row lg:gap-0'>
									<span className='font-caveat text-4xl font-bold lg:w-1/3'>
										Etape 5.
									</span>
									<p className='w-full px-8 text-left'>
										Séance de bilan à l'issue de l'accompagnement.
									</p>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-center lg:w-[30%]'>
							<Image
								src={'/oneway.svg'}
								width={84}
								height={109}
								alt='cheminement'
								className='mb-6 w-[100px] text-white lg:mb-0 lg:w-[170px]'
							/>
						</div>
					</div>
					<div className='flex w-2/3 flex-col gap-8 lg:text-lg'>
						<p>
							Les entretiens de débriefing sont une part essentielle de
							la réussite ! Ils entretiennent la motivation. C’est en
							revenant à ces objectifs régulièrement que l’on arrive à
							garder la motivation et à les atteindre.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
