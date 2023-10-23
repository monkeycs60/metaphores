import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<div className='flex h-[30vh] items-end bg-primaryOne/30 '>
			<div className='m-auto flex h-[70%] w-[75%] justify-between'>
				<div className='flex flex-col items-center gap-4 '>
					<Image
						src='/newlogo.svg'
						alt='logo'
						className='w-[200px] '
						width={266}
						height={59}
					/>
					<div className='flex gap-2 font-bold text-blackOne'>
						<h4>Formation</h4>
						<span>|</span>
						<h4>Coaching</h4>
					</div>
				</div>
				<div className='flex w-2/3 flex-col gap-8'>
					<h3 className='text-lg font-bold uppercase'>
						Mes lieux de rendez-vous
					</h3>
					<div className='flex w-full  justify-between gap-6'>
						<div className='flex flex-col gap-4'>
							<h4 className='text-lg font-bold uppercase'>Bordeaux</h4>
							<div className='flex flex-col gap-1'>
								<span>HOLOM - 91 Rue Camille Sauvageau, 33800</span>
								<span>Smoös - 137 Cr de l'Yser, 33800</span>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<h4 className='text-lg font-bold uppercase'>A l'Extérieur</h4>
							<div className='flex flex-col gap-1'>
								<span>Dans un lieu neutre</span>
								<span>Dans vos locaux</span>
								<span>Coaching nomade</span>
							</div>
						</div>
						<div className='flex flex-col gap-4'>
							<h4 className='text-lg font-bold uppercase'>En Visio</h4>
							<div className='flex flex-col gap-1'>
								<span>En distanciel</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
