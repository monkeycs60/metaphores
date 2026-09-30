import type { Metadata } from 'next';
import { CONTACT } from '@/lib/site';

export const metadata: Metadata = {
	title: 'Mentions légales et politique de confidentialité',
	description:
		'Mentions légales du site Métaphore Coaching et politique de confidentialité des données personnelles.',
	alternates: { canonical: '/mentions-legales' },
	robots: { index: false },
};

export default function MentionsLegalesPage() {
	return (
		<article className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-20 pt-10 leading-relaxed text-blackOne/80 lg:pt-16">
			<h1 className="font-yeseva text-[2.1rem] leading-tight text-blackOne lg:text-5xl">Mentions légales</h1>

			<section className="flex flex-col gap-3">
				<h2 className="font-yeseva text-2xl text-blackOne">Éditeur du site</h2>
				<p>
					Métaphore Coaching — Christophe Jacques, coach professionnel, Bordeaux (33).
					<br />
					Téléphone : {CONTACT.phone} — E-mail : {CONTACT.email}
					<br />
					SIRET : à compléter.
				</p>
				<p>Directeur de la publication : Christophe Jacques.</p>
			</section>

			<section className="flex flex-col gap-3">
				<h2 className="font-yeseva text-2xl text-blackOne">Hébergement</h2>
				<p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis — vercel.com</p>
			</section>

			<section id="confidentialite" className="flex scroll-mt-28 flex-col gap-3">
				<h2 className="font-yeseva text-2xl text-blackOne">Politique de confidentialité</h2>
				<p>
					Les informations transmises via le formulaire de contact (nom, e-mail, téléphone facultatif, motif
					et message) servent uniquement à répondre à votre demande. Elles sont acheminées par e-mail via le
					service Web3Forms et ne sont ni vendues ni cédées à des tiers.
				</p>
				<p>
					La prise de rendez-vous en ligne est assurée par Cal.com : les informations saisies lors d’une
					réservation (nom, e-mail, éventuelles notes) sont utilisées pour organiser le rendez-vous.
				</p>
				<p>
					Ces données sont conservées le temps nécessaire au suivi de votre demande, puis supprimées au plus
					tard trois ans après le dernier contact. Conformément au RGPD, vous pouvez demander l’accès, la
					rectification ou la suppression de vos données en écrivant à {CONTACT.email}. Vous pouvez également
					adresser une réclamation à la CNIL (cnil.fr).
				</p>
				<p>Le site n’utilise pas de cookies publicitaires ni d’outil de mesure d’audience.</p>
			</section>
		</article>
	);
}
