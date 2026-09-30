import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/v2/ui';
import { ContactBand, FramePrinciples } from '@/components/v2/blocks';

export const metadata: Metadata = {
	title: 'Éthique et déontologie',
	description:
		'Confidentialité, transparence, liberté, respect de votre équilibre : le cadre déontologique des accompagnements Métaphore Coaching.',
	alternates: { canonical: '/deontologie' },
};
export default function DeontologiePage() {
	return (
		<>
			<PageHero
				title="Un cadre de confiance pour avancer librement."
				subtitle="Éthique & déontologie"
				image="/photos/conversation.webp"
				imageAlt="Deux personnes échangent face à face, dans un cadre calme"
			>
				<p>
					Métaphore Coaching adhère et respecte les chartes déontologiques de la profession, de type EMCC.
				</p>
			</PageHero>
			<Section title="Quatre engagements essentiels.">
				<FramePrinciples />
				<div className="formats">
					<article className="format">
						<h3>Confidentialité</h3>
						<p>
							L’identité des personnes accompagnées et le contenu des échanges restent strictement
							confidentiels.
						</p>
					</article>
					<article className="format">
						<h3>Transparence</h3>
						<p>
							Le cadre est exposé et explicité pour vous permettre d’avancer avec un sentiment de sécurité.
						</p>
					</article>
					<article className="format">
						<h3>Liberté</h3>
						<p>
							Vous gardez le choix de vos actions, l’autonomie et la responsabilité de vos décisions à chaque
							étape.
						</p>
					</article>
					<article className="format">
						<h3>Équilibre de vie</h3>
						<p>
							La démarche respecte votre écologie intérieure : votre équilibre de vie et ce qui vous permet de
							vous sentir plus apaisé.
						</p>
					</article>
				</div>
				<Image
					src="/emcc.png"
					alt="EMCC, association de professionnels de l’accompagnement"
					width={1181}
					height={762}
					className="w-[140px]"
				/>
			</Section>
			<ContactBand />
		</>
	);
}
