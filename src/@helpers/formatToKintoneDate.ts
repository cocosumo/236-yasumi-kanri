import {format} from 'date-fns';

/**
 *
 * @param date
 * @returns formatted date string for kintone
 * @see https://cybozu.dev/ja/kintone/docs/rest-api/overview/kintone-rest-api-overview#format-date-and-time
 */
export const formatToKintoneDate = (date: Date) => format(date, 'yyyy-MM-dd');
