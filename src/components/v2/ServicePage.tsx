import Image from 'next/image';
import { contactFor } from '@/lib/site';
import { ContactBand, HeroActions } from './blocks';
import { Scribble } from './deco';
import { CheckList, ListFrame, ListItem, Notice, PageHero, Quotes, RelatedLinks, Section, Story, lines } from './ui';

export type Service = {
	title: string;
	context: string;
	scribble?: { text: string; mark: string };
	description: string[];
	image: string;
	imageAlt: string;
	imagePosition?: string;
	split?: boolean;
	topicsTitle?: string;
	topics?: ListItem[];
	questions?: string[];
	questionsImage?: { src: string; alt: string };
	lists?: {
		title: string;
		note?: { text: string; mark: string };
		intro?: string;
		lead?: string;
		items: ListItem[];
		frame?: boolean;
		image?: { src: string; alt: string; position?: string };
	}[];
	storyLead?: string;
	storyTitle: string;
	storyText: string[];
	storyImage: string;
	storyImageAlt: string;
	storyImagePosition?: string;
	notice?: { title: string; text: string };
	motif: string;
	related: { label: string; href: string }[];
};

function ServiceScribble({ text, mark, className }: { text: string; mark: string; className?: string }) {
	const [before, after] = text.split(mark);
	return (
		<Scribble tone="sky" className={className}>
			{before}
			<mark>{mark}</mark>
			{after}
		</Scribble>
	);
}

export default function ServicePage({ service }: { service: Service }) {
	const contact = contactFor(service.motif);
	return (
		<>
			<PageHero
				title={lines(service.title)}
				subtitle={service.context}
				image={service.image}
				imageAlt={service.imageAlt}
				imagePosition={service.imagePosition}
				split={service.split}
				note={service.scribble && <ServiceScribble {...service.scribble} className="hero-scribble" />}
				actions={<HeroActions contact={contact} />}
			>
				{service.description.map((text) => (
					<p key={text}>{text}</p>
				))}
			</PageHero>
			{service.topicsTitle && (
				<Section title={service.topicsTitle}>
					{service.topics && <CheckList items={service.topics} />}
					{service.questions &&
						(service.questionsImage ? (
							<div className="bubbles-with-photo">
								<div className="bubbles-photo">
									<Image
										src={service.questionsImage.src}
										alt={service.questionsImage.alt}
										width={700}
										height={1050}
										sizes="(min-width: 900px) 34vw, 90vw"
									/>
								</div>
								<Quotes items={service.questions} variant="bubbles" />
							</div>
						) : (
							<Quotes items={service.questions} variant="bubbles" />
						))}
				</Section>
			)}
			{service.lists?.map((list) =>
				list.frame ? (
					<Section key={list.title} tone="blue">
						<ListFrame
							note={list.note && <ServiceScribble {...list.note} />}
							title={list.title}
							intro={list.intro}
							lead={list.lead}
							items={list.items}
							image={list.image}
						/>
					</Section>
				) : (
					<Section
						key={list.title}
						tone="blue"
						title={list.title}
						note={list.note && <ServiceScribble {...list.note} />}
						intro={list.intro && <p>{list.intro}</p>}
					>
						<CheckList items={list.items} />
					</Section>
				),
			)}
			<Section tone="cream">
				<Story
					lead={service.storyLead}
					title={lines(service.storyTitle)}
					image={service.storyImage}
					imageAlt={service.storyImageAlt}
					imagePosition={service.storyImagePosition}
				>
					{service.storyText.map((text) => (
						<p key={text}>{text}</p>
					))}
				</Story>
				{service.notice && (
					<Notice title={service.notice.title}>
						<p>{service.notice.text}</p>
					</Notice>
				)}
			</Section>
			<ContactBand contact={contact} />
			<RelatedLinks links={service.related} />
		</>
	);
}
