'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { MOTIFS } from '@/lib/site';

type FormValues = {
	nom: string;
	email: string;
	telephone?: string;
	motif: string;
	message: string;
	consentement: boolean;
	botcheck?: boolean;
};

const inputClass =
	'block w-full rounded-lg border border-blackOne/20 bg-white px-4 py-3 text-base text-blackOne placeholder:text-blackOne/40 focus:border-blackOne focus:outline-none focus:ring-2 focus:ring-primaryOne';

function FieldError({ message }: { message?: string }) {
	return message ? <p className="mt-1 text-sm text-red-700">{message}</p> : null;
}

const ContactForm = () => {
	const searchParams = useSearchParams();
	const motifParam = searchParams.get('motif');
	const defaultMotif = MOTIFS.some((m) => m.value === motifParam) ? motifParam! : '';

	const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({ mode: 'onTouched', defaultValues: { motif: defaultMotif } });

	const { submit } = useWeb3Forms<FormValues>({
		access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'f807b50f-8300-45ba-8a28-82b661bf9314',
		settings: {
			from_name: 'metaphorecoaching.com',
			subject: 'Métaphore Coaching — nouvelle demande de contact',
		},
		onSuccess: () => {
			setResult({
				ok: true,
				message: 'Votre demande est envoyée. Merci, je reviens vers vous au plus vite.',
			});
			reset({ motif: '' });
		},
		onError: () => {
			setResult({
				ok: false,
				message:
					'L’envoi a échoué. Réessayez dans un instant, ou écrivez directement à metaphorecoaching@gmail.com.',
			});
		},
	});

	const onSubmit = (values: FormValues) => {
		const motifLabel = MOTIFS.find((m) => m.value === values.motif)?.label ?? values.motif;
		return submit({ ...values, motif: motifLabel });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
			<input type="checkbox" className="hidden" tabIndex={-1} autoComplete="off" {...register('botcheck')} />

			<div className="grid gap-6 sm:grid-cols-2">
				<div>
					<label htmlFor="nom" className="mb-2 block text-sm font-semibold">
						Nom
					</label>
					<input
						id="nom"
						autoComplete="name"
						className={inputClass}
						{...register('nom', { required: 'Indiquez votre nom.' })}
					/>
					<FieldError message={errors.nom?.message} />
				</div>
				<div>
					<label htmlFor="email" className="mb-2 block text-sm font-semibold">
						E-mail
					</label>
					<input
						id="email"
						type="email"
						autoComplete="email"
						className={inputClass}
						{...register('email', {
							required: 'Indiquez votre adresse e-mail.',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Cette adresse e-mail n’est pas valide.',
							},
						})}
					/>
					<FieldError message={errors.email?.message} />
				</div>
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				<div>
					<label htmlFor="telephone" className="mb-2 block text-sm font-semibold">
						Téléphone <span className="font-normal text-blackOne/60">(facultatif)</span>
					</label>
					<input
						id="telephone"
						type="tel"
						autoComplete="tel"
						className={inputClass}
						{...register('telephone')}
					/>
				</div>
				<div>
					<label htmlFor="motif" className="mb-2 block text-sm font-semibold">
						Vous me contactez pour…
					</label>
					<select
						id="motif"
						className={inputClass}
						{...register('motif', { required: 'Choisissez un motif.' })}
					>
						<option value="" disabled>
							Choisir
						</option>
						{MOTIFS.map((motif) => (
							<option key={motif.value} value={motif.value}>
								{motif.label}
							</option>
						))}
					</select>
					<FieldError message={errors.motif?.message} />
				</div>
			</div>

			<div>
				<label htmlFor="message" className="mb-2 block text-sm font-semibold">
					Message
				</label>
				<textarea
					id="message"
					rows={6}
					placeholder="Expliquez simplement ce qui vous amène."
					className={inputClass}
					{...register('message', { required: 'Écrivez quelques mots sur votre situation.' })}
				/>
				<FieldError message={errors.message?.message} />
			</div>

			<div>
				<label className="flex items-start gap-3 text-sm leading-relaxed text-blackOne/80">
					<input
						type="checkbox"
						className="mt-1 h-5 w-5 shrink-0 accent-blackOne"
						{...register('consentement', {
							required: 'Votre accord est nécessaire pour traiter la demande.',
						})}
					/>
					<span>
						J’accepte que les informations saisies soient utilisées uniquement pour répondre à ma demande.
						Elles restent confidentielles (voir la{' '}
						<Link href="/mentions-legales#confidentialite" className="underline">
							politique de confidentialité
						</Link>
						).
					</span>
				</label>
				<FieldError message={errors.consentement?.message} />
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="inline-flex min-h-[52px] items-center justify-center self-start rounded-[5px] bg-primaryOne px-8 font-semibold text-blackOne hover:bg-blackOne hover:text-primaryOne disabled:opacity-60"
			>
				{isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
			</button>

			{result && (
				<p role="status" className={result.ok ? 'font-medium text-green-800' : 'font-medium text-red-700'}>
					{result.message}
				</p>
			)}
		</form>
	);
};

export default ContactForm;
