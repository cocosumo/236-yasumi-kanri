import {describe} from '@jest/globals';
import {getYasumi} from './getYasumi';

describe('getYasumi', () => {
	it('should return yasumi', async () => {
		const yasumi = await getYasumi({
			year: 2023,
			month: 12,
			accountCode: 'RPA03',
		});

		console.log(JSON.stringify(yasumi, null, 2));
	});
});
