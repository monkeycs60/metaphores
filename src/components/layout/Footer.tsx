import Image from 'next/image';
import Link from 'next/link';
import { COACHING_SUBNAV, CONTACT } from '@/lib/site';

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-main">
				<div className="footer-brand">
					<Link href="/">
						<Image
							src="/Logo.svg"
							alt="Métaphore Coaching, accueil"
							width={580}
							height={208}
							className="w-[170px]"
						/>
					</Link>
					<p>
						À chacun son chemin.
						<br />
						Coaching à Bordeaux & à distance.
					</p>
				</div>
				<nav aria-label="Accompagnements">
					<p>Accompagnements</p>
					{COACHING_SUBNAV.map((item) => (
						<Link key={item.href} href={item.href}>
							{item.label}
						</Link>
					))}
					<Link href="/jeunes-parents">Jeunes & Parents</Link>
					<Link href="/coaching-enseignants">Enseignants</Link>
					<Link href="/entreprises-rps-qvct">Entreprises</Link>
				</nav>
				<nav aria-label="Informations pratiques">
					<p>Pour mieux se connaître</p>
					<Link href="/qui-suis-je">Christophe Jacques</Link>
					<Link href="/coaching/origines">C’est quoi le coaching ?</Link>
					<Link href="/coaching/psy">Coach ou psy ?</Link>
					<Link href="/deontologie">Déontologie</Link>
					<Link href="/tarifs">Tarifs</Link>
					<Link href="/contact">Lieux de rendez-vous</Link>
				</nav>
				<div className="footer-contact">
					<p>Gardons le contact</p>
					<a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
					<a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
					<Link href="/rendez-vous" className="underline underline-offset-4">
						Prendre rendez-vous
					</Link>
					<div className="footer-socials">
						<a
							href={CONTACT.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn de Christophe Jacques"
						>
							<Image src="/linkedin.svg" alt="" width={22} height={22} />
						</a>
						<a
							href={CONTACT.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram de Métaphore Coaching"
						>
							<Image src="/insta.svg" alt="" width={22} height={22} />
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<p>© {new Date().getFullYear()} Métaphore Coaching · Christophe Jacques</p>
				<Link href="/mentions-legales">Mentions légales & confidentialité</Link>
			</div>
		</footer>
	);
}
