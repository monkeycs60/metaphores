'use client';

import Cal from '@calcom/embed-react';

export default function CalBooking({ calLink }: { calLink: string }) {
	return (
		<Cal
			calLink={calLink}
			style={{ width: '100%', minHeight: '640px', overflow: 'scroll' }}
			config={{ layout: 'month_view', theme: 'light' }}
		/>
	);
}
