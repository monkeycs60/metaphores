import Image from 'next/image';
import React from 'react';

const page = () => {
	return (
		<div className='flex flex-col gap-12'>
			<div className='containerBordureBriseeThree relative mt-24 h-1/2'>
				<div className='flex justify-center gap-8 p-12'>
					<div className='flex w-[600px] flex-col items-center justify-center gap-12'>
						<h2 className='font-caveat text-5xl text-blackOne'>
							Moi, c'est Christophe
						</h2>
						<div className='flex  flex-col gap-3 text-lg'>
							<p>
								Bien choisir son accompagnant.e, c’est important. Alors
								voici mon portrait, pour apprendre à me connaître un peu
								plus.
							</p>
							<p>
								Vous retrouverez ce qui m’a conduit à l’accompagnement,
								et à créer Métaphore coaching.
							</p>
						</div>
					</div>
					<div className=''>
						<Image
							src='/chris-blob.png'
							alt='chess'
							width={800}
							height={652}
							className='w-[400px]'
						/>
						<span className='text-lg font-semibold text-blackOne'>
							Christophe JACQUES Coach professionnel diplômé
						</span>
					</div>
				</div>
			</div>
			<div className='m-auto flex w-[80%] flex-col gap-[50px] '>
				<div className='flex flex-col gap-4 '>
					<h2 className='text-xl font-bold text-blackOne'>Mon parcours</h2>
					<div>
						<div>
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
							<ul>
								<li>Formation en ingénierie et mécanique</li>
								<li>
									Vie à l'étranger: Angleterre, Australie, Inde, et
									plus
								</li>
								<li>
									Multiples métiers : commercial, ingénieur,
									commerçant...
								</li>
								<li>Enseignant depuis une dizaine d’années</li>
								<li>Artiste peintre avec des expositions à Bordeaux</li>
								<li>
									Comédien professionnel ayant écrit et mis en scène
									plusieurs pièces
								</li>
								<li>
									Sportif ayant fait de la compétition en football,
									handball, et beach-volley
								</li>
								<li>
									Reprise d'études en sciences de l'éducation et en
									coaching.
								</li>
							</ul>
						</div>
						<div>
							{/* <Image src='/chess.png' alt='chess' width={800} height={652} className='w-[400px]' /> */}
						</div>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-bold text-blackOne'>
						Ma découverte du Coaching
					</h2>
					<div>
						<div>
							{/* <Image src='/chess.png' alt='chess' width={800} height={652} className='w-[400px]' /> */}
						</div>
						<div>
							<p>
								L'accompagnement est plus qu'un métier, c'est un
								sacerdoce pour moi. Bien que j’aie mis du temps à le
								mettre en œuvre officiellement, il a toujours été
								omniprésent dans mes activités professionnelles et
								personnelles.
							</p>
							<p>
								J'ai un don pour l'écoute et je suis accueillant. Avec
								bienveillance, humour, et dynamisme, je m'efforce d'être
								efficace dans mes méthodes d'accompagnement.
							</p>
							<p>
								J'utilise fréquemment des métaphores pour aider mes
								clients à changer d'univers et à visualiser leurs
								idéaux. Comme un metteur en scène, je vous aiderai à
								reprendre le contrôle du rôle principal de votre vie,
								vous assurant d'être au centre de cette transformation.
							</p>
						</div>
					</div>
				</div>
				<div>
					<h2 className='text-xl font-bold text-blackOne'>
						La Métaphore dans le Coaching
					</h2>
					<div>
						<div>
							{/* <Image src='/chess.png' alt='chess' width={800} height={652} className='w-[400px]' /> */}
						</div>
						<div>
							<p>
								L'accompagnement est plus qu'un métier, c'est un
								sacerdoce pour moi. Bien que j’aie mis du temps à le
								mettre en œuvre officiellement, il a toujours été
								omniprésent dans mes activités professionnelles et
								personnelles.
							</p>
							<p>
								J'ai un don pour l'écoute et je suis accueillant. Avec
								bienveillance, humour, et dynamisme, je m'efforce d'être
								efficace dans mes méthodes d'accompagnement.
							</p>
							<p>
								J'utilise fréquemment des métaphores pour aider mes
								clients à changer d'univers et à visualiser leurs
								idéaux. Comme un metteur en scène, je vous aiderai à
								reprendre le contrôle du rôle principal de votre vie,
								vous assurant d'être au centre de cette transformation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
