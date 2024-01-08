import {appId} from '@config/appIds';
import {ktRecord} from './kintoneClient';
import {dateRangeByYearMonth} from '@helpers/dateRangeByYearMonth';

export type GetYasumiParams = {
	year: number | string;
	month: number | string;
	accountCode: string;
};

const yasumiDateKey: keyof Yasumi.SavedFields = 'yasumiDate';

export const getYasumi = async ({
	year,
	month,
	accountCode,
}: GetYasumiParams) => {
	const record = await ktRecord();

	const queries: string[] = [];

	const dateRange = dateRangeByYearMonth({
		year: Number(year),
		month: Number(month),
	});

	queries.push(`${yasumiDateKey} >= "${dateRange.start}"`);
	queries.push(`${yasumiDateKey} <= "${dateRange.end}"`);

	return record.getRecords({
		app: appId,
		query: queries.join(' and '),
	}).then(response => {
		response.records as unknown as Yasumi.SavedFields[];
	});
};
