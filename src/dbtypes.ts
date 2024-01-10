export type IYasumi = {
	'ステータス': kintone.fieldTypes.SingleLineText;
} & Yasumi.SavedFields;

export type IYasumiPicked = Pick<IYasumi, 'type' | 'duration' | 'ステータス'>;

export type KYasumi = keyof IYasumi;
