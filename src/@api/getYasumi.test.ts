import {describe, expect} from '@jest/globals';
import {getYasumi} from './getYasumi';
import {formatToKintoneDate} from '@helpers/formatToKintoneDate';
import {ktRecord} from './kintoneClient';

describe('getYasumi', () => {
	it('should return yasumi for specific account code', async () => {
		const yasumi = await getYasumi({
			dateStart: formatToKintoneDate(new Date('2023-12-01')),
			dateEnd: formatToKintoneDate(new Date('2023-12-31')),
			accountCode: 'RPA03',
		},
		await ktRecord(),
		);

		console.log('length', yasumi.length);
		expect(yasumi.length).toBeGreaterThan(0);
	});

	it('should return yasumi for any account code', async () => {
		const yasumi = await getYasumi({
			dateStart: formatToKintoneDate(new Date('2023-12-01')),
			dateEnd: formatToKintoneDate(new Date('2023-12-31')),
		},
		await ktRecord(),
		);

		console.log('length', yasumi.length);
		expect(yasumi.length).toBeGreaterThan(0);
	});
});
