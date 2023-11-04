'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Ma vision',
		href: '/coaching/ma-vision',
		description:
			'Un accompagnement pour vous permettre de dépasser une difficulté ou pour atteindre un but.',
	},
	{
		title: 'Coaching individuel',
		href: '/coaching/individuel',
		description: 'Un projet, un changement, un problème, un bilan...',
	},
	{
		title: 'Coaching collectif',
		href: '/coaching/individuel',
		description: "Cohésion d'équipe, performance, conflit, développement...",
	},
	{
		title: 'Coaching en entreprise',
		href: '/coaching/individuel',
		description: 'Intelligence collective, leadership, évolution...',
	},
];

function CustomNavigationMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href='/about' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							A propos
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Coaching</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href='/deontology' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Déontologie
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href='/offers' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Tarifs
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export default CustomNavigationMenu;

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'select-none hover:bg-primaryOne/30 flex flex-col gap-1 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}>
					<div className='text-base font-semibold leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
