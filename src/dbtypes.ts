export type IYasumi = {
	'ステータス': kintone.fieldTypes.SingleLineText;
} & Yasumi.SavedFields;

export type KYasumi = keyof IYasumi;
