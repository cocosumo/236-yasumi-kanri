import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // A plugin!
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin from '@fullcalendar/interaction';
import {useCalendarInput} from '@hooks/useCalendarInput';

export function CalendarInput() {
	const {
		datesSet,
	} = useCalendarInput();

	return (
		<FullCalendar
			plugins={[dayGridPlugin, interactionPlugin]}
			initialView='dayGridMonth'
			locale={jaLocale}
			height='auto'
			fixedWeekCount={false}
			datesSet={datesSet}
		/>
	);
}
