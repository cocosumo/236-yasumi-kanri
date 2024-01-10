import {type DatesSetArg} from '@fullcalendar/core';
import {formatToKintoneDate} from '@helpers/formatToKintoneDate';
import {endOfMonth, startOfMonth} from 'date-fns';
import {atom, useAtom} from 'jotai';

export const currentRangeAtom = atom<{dateStart: string; dateEnd: string}>({
	dateStart: formatToKintoneDate(startOfMonth(new Date())),
	dateEnd: formatToKintoneDate(endOfMonth(new Date())),
});

export const useCalendarInput = () => {
	const [currentRange, setCurrentView] = useAtom(currentRangeAtom);

	const datesSet = ({view}: DatesSetArg) => {
		setCurrentView({
			dateStart: formatToKintoneDate(view.currentStart),
			dateEnd: formatToKintoneDate(view.currentEnd),
		});
	};

	return {
		datesSet,
		currentRange,
	};
};
