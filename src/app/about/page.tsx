import Image from 'next/image';
import {
	Wrench,
	Globe,
	Briefcase,
	Book,
	Palette,
	Drama,
	Trophy,
	GraduationCap,
} from 'lucide-react';

const page = () => {
	return (
		<div className='relative w-screen'>
			<Image
				src={'/forme10.png'}
				width={223}
				height={181}
				alt='rond bleu clair'
				className='absolute -left-8 top-[90vh] hidden w-[140px] lg:block 2xl:left-0 2xl:top-[60vh] 2xl:w-[200px] '
			/>
			<Image
				src={'/forme4.png'}
				width={289}
				height={269}
				alt='rond bleu clair'
				className='absolute right-12 top-[140vh] hidden w-[160px] lg:block 2xl:right-24 2xl:top-[75vh] 2xl:w-[200px] '
			/>
			<Image
				src={'/forme14.png'}
				width={495}
				height={424}
				alt='rond bleu clair'
				className='absolute -bottom-24 w-[130px] lg:bottom-[15vh] 2xl:left-8 2xl:w-[200px] 3xl:bottom-[10vh] 3xl:w-[400px] '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 hidden w-[140px] 2xl:w-[160px] '
			/>
			<div className='mb-[60px] mt-24 lg:mt-16'>
				<h1 className='flex justify-center text-3xl font-bold text-blackOne lg:text-3xl'>
					A propos
				</h1>
				<div className='m-auto mt-2 h-[1px] w-1/2 bg-blackOne lg:w-[15%]'></div>
			</div>
			<div className='flex flex-col gap-12'>
				<div className='containerBordureBriseeThree relative h-1/2 p-2 lg:mt-2 lg:p-0'>
					<div className='flex flex-col justify-center gap-8 p-12 lg:flex-row-reverse lg:gap-16 2xl:gap-[5vw] 3xl:gap-[8vw] '>
						<div className='flex flex-col items-center justify-center gap-12 lg:w-[600px]'>
							<h2 className='font-caveat text-4xl text-blackOne lg:text-5xl'>
								Moi, c'est Christophe
							</h2>
							<div className='flex  flex-col gap-3 lg:px-8 lg:text-lg 3xl:px-0'>
								<p>
									Bien choisir son accompagnant.e, c’est important.
									Alors voici mon portrait, pour apprendre à me
									connaître un peu plus.
								</p>
								<p>
									Vous retrouverez ce qui m’a conduit à
									l’accompagnement, et à créer Métaphore coaching.
								</p>
							</div>
						</div>
						<div className='mt-4 flex flex-col items-center gap-4 lg:mt-0'>
							<Image
								src='/chris-blob-2.png'
								alt='chess'
								width={800}
								height={652}
								className='xl:w-[280px] 2xl:w-[320px] 3xl:w-[400px]'
							/>
							<div className='flex flex-col items-center'>
								<span className='text-lg font-semibold text-blackOne'>
									Christophe JACQUES
								</span>
								<span className='text-base'>
									Coach professionnel diplômé
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='m-auto flex w-full flex-col gap-[30px] lg:w-[80%] 2xl:w-[70%] 3xl:w-[50%]'>
					<div className='flex flex-col  gap-4'>
						<h2 className='text-center text-xl font-bold text-blackOne lg:text-left lg:text-xl'>
							Mon parcours
						</h2>

						<div className='mt-2 flex flex-col gap-2 lg:mt-0'>
							<p>
								J’ai évolué dans diverses sphères privées (aéronautique,
								immobilier, théâtre…), avant de m'orienter vers
								l'enseignement depuis quelques années.
							</p>
							<p>
								La vie, pour moi, est une spirale faite de différents
								cycles, avec le coaching comme dernier virage. Mon
								expérience est riche et variée :
							</p>
							<div className='mt-14 flex flex-col-reverse justify-center gap-12 lg:flex-row'>
								<ul className='m-auto flex w-[85%] flex-col items-center justify-center gap-7 lg:w-full lg:items-start lg:justify-normal lg:gap-6'>
									<li className='flex items-center gap-5'>
										{' '}
										<Wrench className='w-[26px] lg:w-6' />{' '}
										<span className=''>
											Formation en ingénierie et mécanique.
										</span>
									</li>
									<li className='flex items-center gap-5'>
										<Globe className='w-[30px] lg:w-6' />
										<span>
											Vie à l'étranger: Angleterre, Australie, Inde,
											et plus.
										</span>
									</li>
									<li className='flex items-center gap-5'>
										<Briefcase className='w-[32px] lg:w-6' />
										<span>
											Multiples métiers : commercial, ingénieur,
											commerçant...
										</span>
									</li>
									<li className='flex items-center gap-5'>
										<Book className='w-[24px] lg:w-6' />{' '}
										<span>
											{' '}
											Enseignant depuis une dizaine d’années.
										</span>
									</li>
									<li className='flex items-center gap-5'>
										<Palette className='w-[30px] lg:w-6' />
										<span>
											{' '}
											Artiste peintre avec des expositions à
											Bordeaux.
										</span>
									</li>
									<li className='flex items-center gap-5 '>
										<Drama className='w-[42px] lg:w-6' />{' '}
										<span>
											Comédien professionnel ayant écrit et mis en
											scène plusieurs pièces.
										</span>
									</li>
									<li className='flex items-center gap-5 '>
										<Trophy className='w-[40px] lg:w-6' />{' '}
										<span>
											Sportif ayant fait de la compétition en
											football, handball, et beach-volley.
										</span>
									</li>
									<li className='flex items-center gap-5 '>
										<GraduationCap className='w-[40px] lg:w-6' />{' '}
										<span>
											Reprise d'études en sciences de l'éducation et
											en coaching.
										</span>
									</li>
								</ul>
								<div className='m-auto '>
									<Image
										src='/spiral.png'
										alt='spirale'
										width={1069}
										height={1090}
										className='w-[250px] lg:w-[320px]'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-6 flex flex-col gap-4'>
						<h2 className='text-center text-xl font-bold text-blackOne lg:text-left lg:text-xl'>
							Ma découverte du Coaching
						</h2>
						<div className='mt-6 flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0 '>
							<div className='lg:w-[280px]'>
								<Image
									src='/boussole.jpg'
									alt='chess'
									width={2000}
									height={2000}
									className='w-[180px] lg:w-[240px]'
								/>
							</div>
							<div className='flex  flex-col gap-4 rounded-xl bg-primaryOne/10 p-6 lg:w-[65%] lg:gap-2'>
								<p>
									L'accompagnement est plus qu'un métier, c'est un
									sacerdoce pour moi. Bien que j’aie mis du temps à le
									mettre en œuvre officiellement, il a toujours été
									omniprésent dans mes activités professionnelles et
									personnelles.
								</p>
								<p>
									J'ai un don pour l'écoute et je suis accueillant.
									Avec bienveillance, humour, et dynamisme, je
									m'efforce d'être efficace dans mes méthodes
									d'accompagnement.
								</p>
								<p>
									J'utilise fréquemment des métaphores pour aider mes
									clients à changer d'univers et à visualiser leurs
									idéaux. Comme un metteur en scène, je vous aiderai à
									reprendre le contrôle du rôle principal de votre vie,
									vous assurant d'être au centre de cette
									transformation.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-6 flex flex-col gap-4'>
						<h2 className='text-center text-2xl font-bold text-blackOne lg:text-left lg:text-xl'>
							La Métaphore dans le Coaching
						</h2>
						<div className='mt-6 flex w-full flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:gap-0 '>
							<div className='flex  flex-col gap-4 rounded-xl bg-primaryOne/10 p-6 lg:w-[65%] lg:gap-2 lg:p-6'>
								<p>
									Notre cerveau fonctionne par images, et les
									métaphores que nous utilisons reflètent notre
									perception du monde. J'ai découvert la puissance des
									métaphores pendant ma formation et j'ai vu leurs
									effets positifs sur ceux que j'accompagne. Cet outil
									est au cœur de mon approche narrative du coaching.
								</p>
								<p>
									Comme mon grand-père, un éminent professeur de grec
									ancien qui chérissait "Le Petit Prince", je crois que
									les choses essentielles ne sont pas toujours
									évidentes. À travers le coaching, je souhaite vous
									aider à voir au-delà du visible, à découvrir le sens
									profond dans votre parcours de vie, et à contribuer
									positivement au monde.
								</p>
							</div>
							<div className=''>
								<Image
									src='/words.jpg'
									alt='chess'
									width={2063}
									height={1254}
									className='w-[280px]'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
