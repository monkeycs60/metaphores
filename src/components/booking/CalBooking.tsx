'use client';

import Cal from '@calcom/embed-react';

export default function CalBooking({ calLink }: { calLink: string }) {
	return (
		<Cal
			calLink={calLink}
			calOrigin='https://cal.com'
			embedJsUrl='https://cal.com/embed/embed.js'
			style={{ width: '100%', minHeight: '640px', overflow: 'auto' }}
			config={{ layout: 'month_view', theme: 'light' }}
		/>
	);
}
