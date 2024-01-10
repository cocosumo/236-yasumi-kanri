import {type IYasumiPicked} from '@/dbtypes';
import {produce} from 'immer';
import {type MouseEventHandler, useCallback, useEffect, useRef, useState} from 'react';

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

export const useYasumiDay = (yasumiRecord?: IYasumiPicked) => {
	const [currentRecord, setCurrentRecord] = useState(yasumiRecord);

	const prevRecord = useRef(yasumiRecord);

	useEffect(() => {
		setCurrentRecord(yasumiRecord);
	}, [yasumiRecord]);

	useEffect(() => {
		prevRecord.current = currentRecord;
	}, [currentRecord]);

	/** Cylce through */
	const onClickDay = useCallback(() => {
		if (currentRecord?.duration?.value) {
			const currentCycleIndex = cycleSelection.indexOf(currentRecord.duration?.value);
			const newDurationValue = cycleSelection[(currentCycleIndex + 1) % cycleSelection.length];

			const newRecord = newDurationValue
				? produce(currentRecord, draft => {
					draft.duration.value = newDurationValue;
				})
				: undefined;

			setCurrentRecord(newRecord);
		} else {
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
			});
		}
	}, [currentRecord]);

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
