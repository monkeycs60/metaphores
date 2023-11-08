'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import Loading from '../ui/Loading';

const CalendlyForm = ({ type }: { type?: string }) => {
	const [scriptLoaded, setScriptLoaded] = useState(false);

	const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
	const showDetails: number =
		process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == 'false' ? 1 : 0;
	const showCookies: number =
		process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == 'false' ? 1 : 0;

	// Recharge le script à chaque changement de page
	useEffect(() => {
		setTimeout(() => {
			const script = document.createElement('script');
			script.src = 'https://assets.calendly.com/assets/external/widget.js';
			script.async = true;
			document.body.appendChild(script);
			setScriptLoaded(true);

			return () => {
				document.body.removeChild(script);
			};
		}, 1000);
	}, [type]);

	return (
		<div className='relative max-h-screen 2xl:max-h-[85vh] 3xl:max-h-[70vh] '>
			{!scriptLoaded && <Loading />}

			<>
				<div
					className='calendly-inline-widget h-screen w-screen'
					data-url={`https://calendly.com/${username}${
						type ? `/${type}` : ''
					}?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}></div>

				<Script
					type='text/javascript'
					src='https://assets.calendly.com/assets/external/widget.js'
					async
					defer
				/>
			</>
		</div>
	);
};

export default CalendlyForm;
