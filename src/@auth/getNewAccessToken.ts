
import axios from 'axios';
import qs from 'qs';

export const getNewAccessToken = async () => {
	const {
		KINTONE_BASE_URL,
		KINTONE_CLIENT_ID,
		KINTONE_CLIENT_SECRET,
		KINTONE_REFRESH_TOKEN,
	} = process.env;

	const clientAuth = Buffer.from(`${KINTONE_CLIENT_ID}:${KINTONE_CLIENT_SECRET}`).toString('base64');
	if (!KINTONE_REFRESH_TOKEN) {
		throw new Error('No refresh token. See readme.md to generate.');
	}

	const data = {
		grant_type: 'refresh_token',
		refresh_token: KINTONE_REFRESH_TOKEN,
	};

	const result = await axios({
		method: 'POST',
		url: `${KINTONE_BASE_URL}/oauth2/token`,
		headers: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${clientAuth}`,

		},
		data: qs.stringify(data),
	});

	const resultData = result.data as {
		access_token: string;
		token_type: string;
		expires_in: number;
		scope: string;
	};

	return {
		accessToken: resultData.access_token,
		token_type: resultData.token_type,
		expires_in: resultData.expires_in,
		scope: resultData.scope,
	};
};
