'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		watch,
		control,
		setValue,
		formState: { errors, isSubmitSuccessful, isSubmitting },
	} = useForm({
		mode: 'onTouched',
	});
	const [isSuccess, setIsSuccess] = useState(false);
	const [message, setMessage] = useState<String | Boolean>(false);

	// Please update the Access Key in the .env
	const apiKey =
		process.env.PUBLIC_ACCESS_KEY || '5803a8bb-d1f0-4750-a98a-becd439a4a10';

	const { submit: onSubmit } = useWeb3Forms({
		access_key: apiKey,
		settings: {
			from_name: 'Acme Inc',
			subject: 'New Contact Message from your Website',
		},
		onSuccess: (msg, data) => {
			setIsSuccess(true);
			setMessage(msg);
			reset();
		},
		onError: (msg, data) => {
			setIsSuccess(false);
			setMessage(msg);
		},
	});
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='space-y-8 font-inter'>
				<input
					type='checkbox'
					id=''
					className='hidden'
					style={{ display: 'none' }}
					{...register('botcheck')}></input>
				<div>
					<label
						htmlFor='email'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
						Votre adresse mail
					</label>
					<input
						type='email'
						id='email'
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primaryOne focus:ring-primaryOne dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
						placeholder='michel@exemple.com'
						required
						{...register('email', {
							required: "Merci d'entrer une adresse mail valide",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Please enter a valid email address',
							},
						})}
					/>
					{errors.email && (
						<span className='text-sm text-red-500'>
							{typeof errors.email.message === 'string'
								? errors.email.message
								: ''}
						</span>
					)}
				</div>
				<div>
					<label
						htmlFor='subject'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'>
						Objet
					</label>
					<input
						type='text'
						id='subject'
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primaryOne focus:ring-primaryOne dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
						placeholder='Comment puis-je vous aider ?'
						required
						{...register('subject', {
							required: "Merci d'entrer un sujet",
						})}
					/>
					{errors.subject && (
						<span className='text-sm text-red-500'>
							{typeof errors.subject.message === 'string'
								? errors.subject.message
								: ''}
						</span>
					)}
				</div>
				<div className='sm:col-span-2'>
					<label
						htmlFor='message'
						className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'>
						Votre message
					</label>
					<textarea
						id='message'
						rows={6}
						className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primaryOne focus:ring-primaryOne dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400'
						placeholder='Ecrivez ici votre commentaire...'
						required
						{...register('message', {
							required: "Merci d'entrer un message",
						})}></textarea>
					{errors.message && (
						<span className='text-sm text-red-500'>
							{typeof errors.message.message === 'string'
								? errors.message.message
								: ''}
						</span>
					)}
				</div>
				<button
					type='submit'
					className='rounded-lg bg-primaryOne px-5 py-3 text-center text-sm font-medium text-black hover:bg-blackOne hover:text-primaryOne focus:outline-none focus:ring-4 focus:ring-primaryOne sm:w-fit'>
					Envoyer votre message
				</button>
			</form>
			{isSubmitSuccessful && isSuccess && (
				<div className='mt-3 text-center text-sm text-green-500'>
					{
						'Le message a été envoyé avec succès. Je vous réponds dans les plus brefs délais.'
					}
				</div>
			)}
			{isSubmitSuccessful && !isSuccess && (
				<div className='mt-3 text-center text-sm text-red-500'>
					{
						'Une erreur est survenue. Veuillez réessayer plus tard ou contactez-moi directement par mail à metaphorecoaching@gmail.com'
					}
				</div>
			)}
		</>
	);
};

export default ContactForm;
