import {devAppId, prodAppId} from '../config/appIds';
import {ktApp} from '../@api/kintoneClient';
import {beforeAll, describe, expect, it} from '@jest/globals';
import {type Properties} from '@kintone/rest-api-client/lib/src/client/types';
import {type ReferenceTable, type Lookup, type OneOf} from '@kintone/rest-api-client/lib/src/KintoneFields/types/property';

const isLookup = (fieldSettings: OneOf) => 'lookup' in fieldSettings;
const isReferenceTable = (fieldSettings: OneOf) => fieldSettings.type === 'REFERENCE_TABLE';
const isRelational = (fieldSettings: OneOf) => isReferenceTable(fieldSettings) || isLookup(fieldSettings);

const compareSettings = (fieldCode: string, devSetting: OneOf, prodSetting: OneOf, settingKey: string) => {
	for (const [key, value] of Object.entries(devSetting)) {
		if (key === settingKey) {
			for (const [subKey, subValue] of Object.entries(value as Record<string, unknown>)) {
				if (subKey === 'relatedApp') {
					console.log(`skipping ${fieldCode}.${key}.${subKey}`);
					continue; // RelatedApp is different between dev and prod
				}

				console.log(`checking ${fieldCode}.${key}.${subKey}`, subValue);
				expect(prodSetting[settingKey as keyof OneOf]).toHaveProperty(subKey, subValue);
			}
		} else {
			console.log(`checking ${fieldCode}.${key}`, value);
			expect(prodSetting).toHaveProperty(key, value);
		}
	}
};

describe('dbSync', () => {
	let devProperties: Properties;
	let prodProperties: Properties;

	beforeAll(async () => {
		const client = await ktApp();

		const {properties: devPropertiesVal} = await client.getFormFields({
			app: devAppId,
		});

		const {properties: prodPropertiesVal} = await client.getFormFields({
			app: prodAppId,
		});

		devProperties = devPropertiesVal;
		prodProperties = prodPropertiesVal;
	});

	it('dev and prod field ids should be different', () => {
		expect(devProperties).not.toEqual(prodProperties);
	});

	it('dev fields should exist in prod fields', () => {
		for (const fieldCode of Object.keys(devProperties)) {
			expect(prodProperties).toHaveProperty(fieldCode);
		}
	});

	it('prod fields should exist in dev fields', () => {
		for (const fieldCode of Object.keys(prodProperties)) {
			expect(devProperties).toHaveProperty(fieldCode);
		}
	});

	it('non-relational fields should have the same settings', () => {
		for (const [fieldCode, fieldSettings] of Object.entries(devProperties)) {
			if (isRelational(fieldSettings)) {
				continue;
			}

			expect(prodProperties[fieldCode]).toEqual(fieldSettings);
		}
	});

	it('relational fields should have the same settings', () => {
		for (const [fieldCode, fieldSettings] of Object.entries(devProperties)) {
			if (isLookup(fieldSettings)) {
				compareSettings(fieldCode, fieldSettings, prodProperties[fieldCode], 'lookup');
			} else if (isReferenceTable(fieldSettings)) {
				compareSettings(fieldCode, fieldSettings, prodProperties[fieldCode], 'referenceTable');
			}
		}
	});
});

