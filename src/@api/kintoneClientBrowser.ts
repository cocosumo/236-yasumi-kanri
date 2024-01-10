import {KintoneRestAPIClient} from '@kintone/rest-api-client';

// Export const kintoneBaseUrl = process.env.KINTONE_BASE_URL;

/** Browser doesn't need for auth */
export const browserKt = new KintoneRestAPIClient({
	// BaseUrl: kintoneBaseUrl,
});

