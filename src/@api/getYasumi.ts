import {appId} from '@config/appIds';
import {type IYasumi, type KYasumi} from '@/dbtypes';
import {browserKt} from './kintoneClientBrowser';

export type GetYasumiParams = {
	dateStart: string;
	dateEnd: string;
	accountCode?: string;
};

const yasumiDateKey: KYasumi = 'yasumiDate';
const accoundCodeKey: KYasumi = '申請者';

export const getYasumi = async (
	{
		dateStart,
		dateEnd,
		accountCode,
	}: GetYasumiParams,
	/** Optional client to use. Default  is browser client. */
	ktRecord = browserKt.record,
) => {
	const record = ktRecord;

	const queries: string[] = [];

	queries.push(`${yasumiDateKey} >= "${dateStart}"`);
	queries.push(`${yasumiDateKey} <= "${dateEnd}"`);

	if (accountCode) {
		queries.push(`${accoundCodeKey} in ("${accountCode}")`);
	}

	return record.getAllRecords({
		app: appId,
		condition: queries.join(' and '),
		orderBy: `${yasumiDateKey} asc`,
		withCursor: false,
	}).then(response => response as unknown as IYasumi[]);
};
