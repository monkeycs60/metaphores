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
				className='absolute left-0 top-[60vh] w-[200px] '
			/>
			<Image
				src={'/forme4.png'}
				width={289}
				height={269}
				alt='rond bleu clair'
				className='absolute right-24 top-[75vh] w-[200px] '
			/>
			<Image
				src={'/forme14.png'}
				width={495}
				height={424}
				alt='rond bleu clair'
				className='absolute bottom-[10vh] left-8 w-[400px] '
			/>
			<Image
				src={'/circle-black.png'}
				width={120}
				height={183}
				alt='fleche bas'
				className='absolute -right-12 bottom-20 w-[160px] '
			/>
			<div className='mb-[60px] mt-16'>
				<h1 className='flex justify-center text-xl font-bold text-blackOne lg:text-3xl'>
					A propos
				</h1>
				<div className='m-auto mt-2 h-[1px] w-[15%] bg-blackOne'></div>
			</div>
			<div className='flex flex-col gap-12'>
				<div className='containerBordureBriseeThree relative mt-2 h-1/2'>
					<div className='flex flex-row-reverse justify-center gap-8 p-12 2xl:gap-[5vw] 3xl:gap-[8vw] '>
						<div className='flex w-[600px] flex-col items-center justify-center gap-12'>
							<h2 className='font-caveat text-5xl text-blackOne'>
								Moi, c'est Christophe
							</h2>
							<div className='flex  flex-col gap-3 text-lg'>
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
						<div className='flex flex-col items-center gap-4'>
							<Image
								src='/chris-blob-2.png'
								alt='chess'
								width={800}
								height={652}
								className='w-[400px]'
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
				<div className='m-auto flex w-[50%] flex-col gap-[30px]'>
					<div className='flex flex-col gap-4 '>
						<h2 className='text-xl font-bold text-blackOne'>
							Mon parcours
						</h2>

						<div className='flex flex-col gap-2'>
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
							<div className='mt-14 flex justify-center gap-12'>
								<ul className='flex flex-col gap-5'>
									<li className='flex items-center gap-2 '>
										{' '}
										<Wrench /> Formation en ingénierie et mécanique.
									</li>
									<li className='flex items-center gap-2 '>
										<Globe />
										Vie à l'étranger: Angleterre, Australie, Inde, et
										plus.
									</li>
									<li className='flex items-center gap-2 '>
										<Briefcase />
										Multiples métiers : commercial, ingénieur,
										commerçant...
									</li>
									<li className='flex items-center gap-2 '>
										<Book />
										Enseignant depuis une dizaine d’années.
									</li>
									<li className='flex items-center gap-2 '>
										<Palette />
										Artiste peintre avec des expositions à Bordeaux.
									</li>
									<li className='flex items-center gap-2 '>
										<Drama />
										Comédien professionnel ayant écrit et mis en scène
										plusieurs pièces.
									</li>
									<li className='flex items-center gap-2 '>
										<Trophy />
										Sportif ayant fait de la compétition en football,
										handball, et beach-volley.
									</li>
									<li className='flex items-center gap-2 '>
										<GraduationCap />
										Reprise d'études en sciences de l'éducation et en
										coaching.
									</li>
								</ul>
								<div className='m-auto '>
									<Image
										src='/spiral.png'
										alt='chess'
										width={1069}
										height={1090}
										className='w-[320px]'
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='mt-6 flex flex-col gap-4'>
						<h2 className='text-xl font-bold text-blackOne'>
							Ma découverte du Coaching
						</h2>
						<div className='mt-6 flex w-[90%] items-center justify-between '>
							<div className='w-[280px]'>
								<Image
									src='/boussole.jpg'
									alt='chess'
									width={2000}
									height={2000}
									className='w-[240px]'
								/>
							</div>
							<div className='flex w-[65%] flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
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
						<h2 className='text-xl font-bold text-blackOne'>
							La Métaphore dans le Coaching
						</h2>
						<div className='mt-6 flex w-[90%] items-center justify-between '>
							<div className='flex w-[65%] flex-col gap-2 rounded-xl bg-primaryOne/10 p-6'>
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
