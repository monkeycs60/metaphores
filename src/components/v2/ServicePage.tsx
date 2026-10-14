import { ContactBand, HeroActions } from './blocks';
import { Scribble } from './deco';
import { CheckList, Notice, PageHero, Quotes, RelatedLinks, Section, Story } from './ui';

export type Service = {
	title: string;
	context: string;
	scribble?: { text: string; mark: string };
	description: string[];
	image: string;
	imageAlt: string;
	imagePosition?: string;
	split?: boolean;
	topicsTitle: string;
	topics?: string[];
	questions?: string[];
	lists?: { title: string; note?: { text: string; mark: string }; intro?: string; items: string[] }[];
	storyTitle: string;
	storyText: string[];
	storyImage: string;
	storyImageAlt: string;
	notice?: { title: string; text: string };
	primary: { label: string; href: string };
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
	return (
		<>
			<PageHero
				title={service.title}
				subtitle={service.context}
				image={service.image}
				imageAlt={service.imageAlt}
				imagePosition={service.imagePosition}
				split={service.split}
				note={service.scribble && <ServiceScribble {...service.scribble} className="hero-scribble" />}
				actions={<HeroActions primary={service.primary} />}
			>
				{service.description.map((text) => (
					<p key={text}>{text}</p>
				))}
			</PageHero>
			<Section title={service.topicsTitle}>
				{service.topics && <CheckList items={service.topics} />}
				{service.questions && <Quotes items={service.questions} />}
			</Section>
			{service.lists?.map((list) => (
				<Section
					key={list.title}
					tone="blue"
					title={list.title}
					note={list.note && <ServiceScribble {...list.note} />}
					intro={list.intro && <p>{list.intro}</p>}
				>
					<CheckList items={list.items} />
				</Section>
			))}
			<Section tone="cream">
				<Story title={service.storyTitle} image={service.storyImage} imageAlt={service.storyImageAlt}>
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
			<ContactBand primary={service.primary} />
			<RelatedLinks links={service.related} />
		</>
	);
}
