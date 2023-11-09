import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StudentCard } from '@/components/offers/student-card';

const page = () => {
	return (
		<div className='relative w-[100%]'>
			<Image
				src={'/shapes/half-circle-black.svg'}
				width={120}
				height={183}
				alt='cercle orange'
				className='absolute -left-8 top-64 w-[140px] '
			/>
			<Image
				src={'/forme7.png'}
				width={463}
				height={344}
				alt='cercle orange'
				className='absolute left-8 top-[85vh] w-[460px] '
			/>
			<Image
				src={'/forme12.png'}
				width={252}
				height={261}
				alt='cercle orange'
				className='absolute right-8 top-[70vh] w-[260px] '
			/>
			<Image
				src={'/discrete-blue-circle.svg'}
				width={120}
				height={183}
				alt='cercle orange'
				className='absolute right-32 top-64 w-[80px] '
			/>
			<div className='relative m-auto mt-16 flex w-[90%] flex-col gap-[54px] lg:w-[80%] 2xl:w-[70%] 3xl:w-[50%]'>
				<StudentCard />
				<div className=''>
					<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
						Tarifs et formules
					</h1>
					<div className='m-auto mt-2 h-[1px] w-[30%] bg-blackOne'></div>
				</div>
				<div className='relative flex flex-col items-center gap-1 bg-primaryOne/20 p-8 text-lg'>
					<p>La séance dure environ 1h.</p>
					<p className='underline underline-offset-4'>
						Tarif horaire : <span className='font-bold'>70€</span>
					</p>
					<p>Les tarifs sont dégressifs en fonction de la durée.</p>
					<p>
						N'hésitez pas à me contacter pour de plus amples informations,
						pour obtenir un devis ou pour réserver.{' '}
					</p>
				</div>
				<div className='flex flex-col items-center justify-center space-y-10'>
					<h2 className='text-xl font-bold text-blackOne'>
						Formules populaires
					</h2>
					<p className='w-[80%] text-center'>
						Nous avons aussi conçu des offres sur-mesure pour répondre à
						vos aspirations, que vous soyez à la recherche d'une
						intervention ciblée ou d'un accompagnement plus approfondi.
						Notre flexibilité s'étend non seulement à la durée de nos
						séances, mais aussi à nos tarifs, afin de vous offrir le
						meilleur en fonction de votre point de départ et de votre
						destination souhaitée.
					</p>

					<div className=' flex items-start justify-center gap-[20px] '>
						<div className='relative h-[400px] w-[400px] bg-gray-400 p-8 '>
							<div className='space-y-4'>
								<h2 className='text-center text-3xl font-semibold text-white'>
									Laser
								</h2>
								<div>
									<p className='flex items-center justify-center gap-2 text-center'>
										<span className='text-3xl font-bold'>3</span>{' '}
										Heures
									</p>
									<p className='mt-1 text-center text-sm italic'>
										65€/h
									</p>
								</div>
							</div>
							<div className='mt-10 flex flex-col items-start gap-6 text-gray-900'>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Identifier vos ressources</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Optimiser votre organisation</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Développer vos potentiels</p>
								</div>
							</div>
							<Image
								src='/prisma1.svg'
								alt='prisma 1'
								width={59}
								height={58}
								className='absolute bottom-4 right-12 w-[70px] '
							/>
							<Image
								src='/prisma2.svg'
								alt='prisma 2'
								width={137}
								height={120}
								className='absolute bottom-16 right-2 w-[50px]'
							/>
						</div>
						<div className='relative h-[450px] w-[400px] bg-secondaryOne p-8 '>
							<div className='space-y-4'>
								<h2 className='text-center text-3xl font-semibold text-white'>
									Pas de côté
								</h2>
								<div>
									<p className='flex items-center justify-center gap-2 text-center'>
										<span className='text-3xl font-bold'>6</span>{' '}
										Heures
									</p>
									<p className='mt-1 text-center text-sm italic'>
										60€/h
									</p>
								</div>
							</div>
							<div className='mt-10 flex flex-col items-start gap-6 text-gray-800'>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Se mettre en action</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Retrouver de l'équilibre</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Développer sa confiance</p>
								</div>
							</div>
							<Image
								src='/zpath.png'
								alt='chemin'
								width={269}
								height={136}
								className='absolute bottom-1 right-4 w-[220px] '
							/>
						</div>
						<div className='relative h-[500px] w-[400px] bg-primaryOne p-8 text-black '>
							<div className='space-y-4'>
								<h2 className='text-center text-3xl font-semibold text-white'>
									Parenthèse
								</h2>
								<div>
									<p className='flex items-center justify-center gap-2 text-center'>
										<span className='text-3xl font-bold'>9</span>{' '}
										Heures
									</p>
									<p className='mt-1 text-center text-sm italic'>
										55€/h
									</p>
								</div>
							</div>
							<div className='mt-10 flex flex-col items-start gap-6 text-gray-700'>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Gagner en sérénité</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Atteindre un épanouissement</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>développer son estime</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check />
									</div>
									<p>Atteindre une réalisation</p>
								</div>
							</div>
							<Image
								src='/flag.svg'
								alt='drapeau'
								width={59}
								height={58}
								className='absolute bottom-2 right-12 w-[80px] text-blackOne'
							/>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center space-y-10'>
					<h2 className='text-xl font-bold text-blackOne'>
						Coaching de Courte Durée
					</h2>
					<p className=''>
						Si vous souhaitez une intervention éclair et très ciblée, ou
						simplement établir un premier contact avec votre accompagnant.
					</p>
					<div className='flex justify-center'>
						<div className='relative h-[450px] w-[400px] bg-blackOne p-8 text-white '>
							<div className='space-y-4'>
								<h2 className='text-center text-3xl font-semibold text-white'>
									Les bulles
								</h2>
								<div>
									<p className='flex items-center justify-center gap-2 text-center'>
										<span className='text-3xl font-bold'>30</span>{' '}
										minutes
									</p>
									<p className='mt-1 text-center text-sm italic'>
										35€
									</p>
								</div>
							</div>
							<div className='mt-10 flex flex-col items-start gap-6 text-gray-100'>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check className='text-blackOne' />
									</div>
									<p>Coaching express</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check className='text-blackOne' />
									</div>
									<p>Changer de perspective</p>
								</div>
								<div className='flex items-center gap-4'>
									<div className='rounded-full bg-white p-1'>
										<Check className='text-blackOne' />
									</div>
									<p>Identifier une problématique</p>
								</div>
							</div>
							<Image
								src='/bubble.svg'
								alt='bulle'
								width={106}
								height={102}
								className='absolute bottom-4 right-12 w-[80px]'
							/>
							<Image
								src='/bubble.svg'
								alt='bulle'
								width={106}
								height={102}
								className='absolute bottom-4 right-4 w-[40px]'
							/>
							<Image
								src='/bubble.svg'
								alt='bulle'
								width={106}
								height={102}
								className='absolute bottom-12 right-4 w-[60px]'
							/>
						</div>
						<Image
							src='/alone.jpg'
							alt='homme seul'
							width={1920}
							height={1280}
							className='w-1/3 object-cover'
						/>
					</div>
				</div>

				<div className='my-4 flex w-full justify-center'>
					<Link href='/reservation' className='flex w-full justify-center'>
						<Button size={'lg'} className='w-1/3 gap-2 bg-primaryOne'>
							{' '}
							<span>Réserver ma séance</span> <ArrowUpRight />
						</Button>
					</Link>
				</div>
				{/* <div>
					<h2 className='text-xl font-bold text-blackOne'>
						Engagements et tarifs spéciaux
					</h2>
					<div className='mt-8 flex flex-col gap-2'>
						<p>
							<span className='font-bold'>Réduction</span> : étudiants et
							demandeurs d'emploi.
						</p>
						<p>
							<span className='font-bold'>Coaching solidaire</span> : je
							suis engagé dans une démarche humaniste. Dans cette
							optique, je m'engage à accompagner des personnes sans
							revenu ou en grande difficulté financière. Me contacter
							pour plus de renseignements.{' '}
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default page;
