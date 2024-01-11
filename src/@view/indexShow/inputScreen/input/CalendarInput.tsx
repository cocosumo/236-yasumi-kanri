import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // A plugin!
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin from '@fullcalendar/interaction';
import {useCalendarInput} from '@hooks/useCalendarInput';
import {renderDayCell} from './renderDayCell/renderDayCell';
import {type ComponentProps} from 'react';
import {useYasumiOfUser} from '@hooks/useYasumiOfUser';
import {formatToKintoneDate} from '@helpers/formatToKintoneDate';
import './CalendarInput.css';
import {useSaveYasumi} from '@hooks/useSaveYasumi';

export type FullCalendarProps = ComponentProps<typeof FullCalendar>;

export function CalendarInput() {
	const {
		datesSet,
	} = useCalendarInput();

	const {data = []} = useYasumiOfUser();

	const {
		setUpsertRecords,
	} = useSaveYasumi();

	return (
		<FullCalendar
			dayCellContent={args => renderDayCell({
				...args,
				yasumiRecord: data.find(({yasumiDate}) => yasumiDate.value === formatToKintoneDate(args.date)),
				setUpsertRecords,
			})}
			plugins={[dayGridPlugin, interactionPlugin]}
			initialView='dayGridMonth'
			locale={jaLocale}
			height='auto'
			fixedWeekCount={false}
			datesSet={datesSet}
			showNonCurrentDates={false}
		/>
	);
}
