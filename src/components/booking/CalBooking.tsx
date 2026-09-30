'use client';

import { useState } from 'react';
import Cal from '@calcom/embed-react';
import { ChevronDown } from 'lucide-react';

export default function CalBooking({ calLink }: { calLink: string }) {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button
				type='button'
				className='calendar-toggle'
				aria-expanded={visible}
				aria-controls='booking-calendar'
				onClick={() => setVisible((value) => !value)}
			>
				{visible ? 'Masquer le calendrier' : 'Afficher le calendrier sur cette page'}
				<ChevronDown size={18} aria-hidden />
			</button>
			{visible && (
				<div id='booking-calendar' className='calendar-container'>
					<Cal
						namespace='premier-echange'
						calLink={calLink}
						calOrigin='https://cal.com'
						embedJsUrl='https://cal.com/embed/embed.js'
						style={{ width: '100%', minHeight: '640px', overflow: 'auto' }}
						config={{ layout: 'month_view', theme: 'light' }}
					/>
				</div>
			)}
		</div>
	);
}
