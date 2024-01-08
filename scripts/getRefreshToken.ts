
import {getRefreshToken} from '../src/@auth/getRefreshToken';
import 'dotenv/config';

(() => {
	try {
		const authCode = process.env.KINTONE_AUTH_CODE;

		if (!authCode) {
			throw new Error('KINTONE_AUTH_CODE undefined');
		}

		console.log('authCode', authCode);

		getRefreshToken({
			code: authCode,
		}).then(result => {
			console.log(result);
			console.log('Save refresh token to .env.KINTONE_REFRESH_TOKEN');
		}).catch(e => {
			console.log('失敗しました。', e.message);
		});
	} catch (e) {
		console.log('失敗しました。', e.message);
	}
})();
