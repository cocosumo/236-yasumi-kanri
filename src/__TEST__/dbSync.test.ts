import {devAppId} from '../config/appIds';
import {ktApp} from '../@api/kintoneClient';
import {describe, expect, test} from '@jest/globals';

describe('dbSync', () => {
	test('dbSync', async () => {
		const client = await ktApp();

		const result = await client.getApp({
			id: devAppId,
		});

		console.log(result);
	});
});
