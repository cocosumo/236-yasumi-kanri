import {format} from 'date-fns/format';
import {endOfMonth} from 'date-fns/endOfMonth';
import {startOfMonth} from 'date-fns/startOfMonth';

export const dateRangeByYearMonth = ({
	year, month,
}: {
	year: number;
	month: number;
}) => {
	const date = new Date(year, month - 1, 1);
	const start = format(startOfMonth(date), 'yyyy-MM-dd');
	const end = format(endOfMonth(date), 'yyyy-MM-dd');
	return {start, end};
};
