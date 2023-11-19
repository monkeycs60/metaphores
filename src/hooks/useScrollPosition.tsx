'use client';

import { useState, useEffect } from 'react';

export default function useScrollPosition() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		// Mise à jour initiale de la position de défilement
		setScrollPosition(window.scrollY);

		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition;
}
