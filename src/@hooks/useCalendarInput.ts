import {type DatesSetArg} from '@fullcalendar/core';
import {formatToKintoneDate} from '@helpers/formatToKintoneDate';
import {endOfMonth, startOfMonth} from 'date-fns';
import {atom, useAtom} from 'jotai';

const now = new Date();

export const currentRangeAtom = atom<{dateStart: string; dateEnd: string}>({
	dateStart: formatToKintoneDate(startOfMonth(now)),
	dateEnd: formatToKintoneDate(endOfMonth(now)),
});

export const useCalendarInput = () => {
	const [currentRange, setCurrentView] = useAtom(currentRangeAtom);

	const datesSet = ({view}: DatesSetArg) => {
		setCurrentView({
			dateStart: formatToKintoneDate(view.currentStart),
			// Use end of month as fullcalendar's end date uses the first day of the next month
			dateEnd: formatToKintoneDate(endOfMonth(view.currentStart)),
		});
	};

	return {
		datesSet,
		currentRange,
	};
};
