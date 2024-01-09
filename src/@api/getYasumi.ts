import {appId} from '@config/appIds';
import {ktRecord} from './kintoneClient';
import {dateRangeByYearMonth} from '@helpers/dateRangeByYearMonth';
import {type IYasumi, type KYasumi} from '@/dbtypes';

export type GetYasumiParams = {
	year: number | string;
	month: number | string;
	accountCode: string;
};

const yasumiDateKey: KYasumi = 'yasumiDate';
const accoundCodeKey: KYasumi = '申請者';

export const getYasumi = async ({
	year,
	month,
	accountCode,
}: GetYasumiParams) => {
	const record = await ktRecord();

	const queries: string[] = [];

	if (!accountCode) {
		throw new Error('accountCode is required');
	}

	const dateRange = dateRangeByYearMonth({
		year: Number(year),
		month: Number(month),
	});

	console.log('dateRange', dateRange);

	queries.push(`${yasumiDateKey} >= "${dateRange.start}"`);
	queries.push(`${yasumiDateKey} <= "${dateRange.end}"`);
	queries.push(`${accoundCodeKey} in ("${accountCode}")`);

	return record.getRecords({
		app: appId,
		query: queries.join(' and '),
	}).then(response => response.records as unknown as IYasumi[]);
};
