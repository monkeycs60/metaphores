import { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Shape = 'sun' | 'sky' | 'ring' | 'ring-gold' | 'hatch' | 'hatch-blue' | 'dots' | 'orbit';

export function Deco({
	shape,
	size,
	className,
	style,
}: {
	shape: Shape;
	size: number;
	className?: string;
	style?: CSSProperties;
}) {
	return <span aria-hidden className={cn('deco', `deco-${shape}`, className)} style={{ width: size, ...style }} />;
}

export function Scribble({
	children,
	tone = 'sun',
	className,
}: {
	children: ReactNode;
	tone?: 'sun' | 'sky' | 'ink';
	className?: string;
}) {
	return <p className={cn('scribble', `scribble-${tone}`, className)}>{children}</p>;
}
