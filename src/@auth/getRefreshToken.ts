import {type OAuth} from '@api/kintoneClient';
import axios from 'axios';
import qs from 'qs';

export const getRefreshToken = async ({
	code,
}: {
	code: string;
}) => {
	const {
		KINTONE_BASE_URL,
		KINTONE_CLIENT_ID,
		KINTONE_CLIENT_SECRET,
		KINTONE_REDIRECT_URI,
	} = process.env;

	const clientAuth = Buffer.from(`${KINTONE_CLIENT_ID}:${KINTONE_CLIENT_SECRET}`).toString('base64');

	const data = {
		grant_type: 'authorization_code',
		redirect_uri: KINTONE_REDIRECT_URI,
		code,
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

	return result.data as OAuth;
};
