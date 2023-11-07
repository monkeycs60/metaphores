import Image from 'next/image';
import React from 'react';
import Card from '@/components/vision/Card';

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
							Ma vision
						</h1>
						<div className='m-auto mt-2 h-[1px] w-[40%] bg-blackOne'></div>
					</div>
					<p className='text-lg'>
						Ma vision du coaching se nourrit à la fois de ma formation
						comme coach d'Etat, de mes expériences personnelles et
						professionnelles. C'est pour cela qu'elle est à la fois unique
						et personnelle. Elle est aussi en constante évolution. Elle
						s'appuie sur 7 principes :
					</p>
					<div className='m-auto flex flex-wrap items-center justify-center gap-[30px]'>
						<Card
							bgvalue='bg-primaryOne'
							number={1}
							value='Bienveillance & Écoute'
							textVision='L’accueil et l’écoute sont centraux dans le coaching.
								Une écoute sans jugement, active, neutre et
								bienveillante ; pour vous aider à déposer et mieux
								rebondir.'
							sourceWidth={15}
							sourceHeight={24}
							sourceValue='/ecoute.svg'
							imgWidth={80}
						/>
						<Card
							bgvalue='bg-primaryOne'
							number={2}
							value='Unique'
							textVision='Chaque personne est différente ce qui fait que vos solutions sont uniques. Je ne les trouverais pas
pour vous ! Par contre, je peux vous accompagner pour que vous les trouviez.'
							sourceWidth={150}
							sourceHeight={176}
							sourceValue='/unique.svg'
							imgWidth={80}
						/>
						<Card
							bgvalue='bg-primaryOne'
							number={3}
							value='Droit au but'
							textVision='Actif, j’aime voir les choses avancer. Je suis un coach plutôt confrontant mais avec douceur et
subtilité. A l’image d’une main de fer dans un gant de velours.'
							sourceWidth={133}
							sourceHeight={32}
							sourceValue='/direct.png'
							imgWidth={80}
						/>
						<Card
							bgvalue='bg-primaryOne'
							number={4}
							value='Chirurgical'
							textVision='La précision est primordiale. Identifier et travailler sur une problématique demande à agir avec
précision et à recentrer régulièrement pour offrir un accompagnement efficace et soigneux. A
l’image d’un laser.'
							sourceWidth={150}
							sourceHeight={103}
							sourceValue='/laser.svg'
							imgWidth={80}
						/>
						<Card
							bgvalue='bg-primaryOne'
							number={5}
							value='Concret'
							textVision='Ancré dans la réalité. Votre démarche dépasse le cadre
des entretiens et va se répercuter dans votre vie; Nous
essayerons d’avancer pas à pas pour vous encourager à
agir concrètement et atteindre vos objectifs.'
							sourceWidth={150}
							sourceHeight={137}
							sourceValue='/strong.svg'
							imgWidth={80}
						/>
						<Card
							bgvalue='bg-primaryOne'
							number={6}
							value='Projection'
							textVision='La métaphore est un outil puissant que j’utilise régulièrement. Il permet de sortir des
méandres du mental. L’identification et l’utilisation de vos images et métaphores nous
permettra de vous décentrer de votre problématique et de vous aider à entrevoir des
solutions.'
							sourceWidth={158}
							sourceHeight={122}
							sourceValue='/projection.svg'
							imgWidth={80}
						/>
						<Card
							bgvalue='bg-primaryOne'
							number={7}
							value='Cheminer'
							textVision='Nous créons ensemble un chemin personnalisé pour atteindre votre objectif final en
prenant en compte votre univers personnel et vos images mentales.'
							sourceWidth={81}
							sourceHeight={80}
							sourceValue='/pathway.svg'
							imgWidth={80}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
