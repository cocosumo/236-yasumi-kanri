import {UpsertRecordType} from '@hooks/useSaveYasumi';
import {produce} from 'immer';
import {
	type MouseEventHandler,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import {type IProps} from './renderDayCell';
import {type IYasumi} from '@/dbtypes';
import {formatToKintoneDate} from '@helpers/formatToKintoneDate';

/* Export const getKintoneYasumiWeight = (duration) => {
  switch (duration) {
    case '一日': return 1;
    case '午前休み': return 0.5;
    case '午後休み': return 0.5;
    default: return 0;
  }
}; */

const cycleSelection = [
	'一日',
	'午前休み',
	'午後休み',
	'',
];

type UseYasumiParams = {
	yasumiRecord?: IProps['yasumiRecord'];
	setUpsertRecords: IProps['setUpsertRecords'];
	date: Date;
};

/**
 * Localized state of the day cell to handle cycle click.
 *
 * @param yasumiRecord
 * @param setUpsertRecords actual save process passed from useSaveYasumi.
 *
 * @returns
 */
export const useYasumiDay = (params: UseYasumiParams) => {
	const {
		yasumiRecord,
		setUpsertRecords,
		date,
	} = params;

	const [currentRecord, setCurrentRecord] = useState(yasumiRecord);

	const prevRecord = useRef(yasumiRecord);

	useEffect(() => {
		setCurrentRecord(yasumiRecord);
		prevRecord.current = yasumiRecord;
	}, [yasumiRecord]);

	/** Cylce through */
	const onClickDay = useCallback(() => {
		if (currentRecord?.duration?.value) {
			const currentCycleIndex = cycleSelection.indexOf(currentRecord.duration?.value);
			const newDurationValue = cycleSelection[(currentCycleIndex + 1) % cycleSelection.length];

			const newRecord = newDurationValue
				? produce(currentRecord, draft => {
					draft.duration.value = newDurationValue;
				})
				: undefined; // Delete record if empty

			setCurrentRecord(newRecord);
		} else {
			// Add new record
			setCurrentRecord({
				ステータス: {
					value: '承認',
				},
				duration: {
					value: '一日',
				},
				type: {
					value: '通常休み',
				},
				yasumiDate: {
					value: formatToKintoneDate(date),
				},
			});
		}
	}, [currentRecord, date]);

	useEffect(() => {
		console.log('currentRecord', prevRecord.current?.duration.value, currentRecord?.duration.value);
		const isUpdate = Boolean(currentRecord) && prevRecord.current?.duration.value !== currentRecord?.duration.value;
		const isAdd = !prevRecord.current && currentRecord;
		const isDelete = prevRecord.current && !currentRecord;

		if (isAdd) {
			setUpsertRecords({
				type: UpsertRecordType.ADD,
				payload: currentRecord as IYasumi,
			});
		} else if (isUpdate) {
			setUpsertRecords({
				type: UpsertRecordType.UPDATE,
				payload: currentRecord as IYasumi,
			});
		} else if (isDelete) {
			setUpsertRecords({
				type: UpsertRecordType.DELETE,
				payload: prevRecord.current as IYasumi,
			});
		}
	}, [currentRecord, setUpsertRecords]);

	/** Clear on right click */
	const onRightClick = useCallback<MouseEventHandler>(e => {
		e.preventDefault();
		setCurrentRecord(undefined);
	}, []);

	return {
		currentRecord,
		onClickDay,
		onRightClick,
	};
};
