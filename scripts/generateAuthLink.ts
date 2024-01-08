
import {generateAuthLink} from '../src/@auth/generateAuthLink';
import 'dotenv/config';

(() => {
	const baseURL = process.env.KINTONE_BASE_URL;
	const clientId = process.env.KINTONE_CLIENT_ID;
	const redirectURI = process.env.KINTONE_REDIRECT_URI;

	if (!baseURL) {
		throw new Error('baseUrl undefined');
	}

	if (!clientId) {
		throw new Error('clientId undefined');
	}

	if (!redirectURI) {
		throw new Error('redirectURI undefined');
	}

	const authLink = generateAuthLink({
		baseURL,
		clientId,
		redirectURI,
	});

	console.log('Click the following link, allow, then take note of the code.');
	console.log(authLink);
})();
