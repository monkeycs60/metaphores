'use client';

import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
	const [state, handleSubmit] = useForm('xeqbwzkq');
	if (state.succeeded) {
		return (
			<p>
				Merci de m'avoir contacté ! Je vous réponds très vite. Christophe
				Jacques
			</p>
		);
	}
	return (
		<form onSubmit={handleSubmit} className='space-y-8 font-inter'>
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
				/>
				<ValidationError
					prefix='Email'
					field='email'
					errors={state.errors}
				/>
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
				/>
				<ValidationError
					prefix='Subject'
					field='subject'
					errors={state.errors}
				/>
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
					placeholder='Ecrivez ici votre commentaire...'></textarea>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
			</div>
			<button
				type='submit'
				disabled={state.submitting}
				className='rounded-lg bg-primaryOne px-5 py-3 text-center text-sm font-medium text-black hover:bg-blackOne hover:text-primaryOne focus:outline-none focus:ring-4 focus:ring-primaryOne sm:w-fit'>
				Envoyer votre message
			</button>
		</form>
	);
};

export default ContactForm;
