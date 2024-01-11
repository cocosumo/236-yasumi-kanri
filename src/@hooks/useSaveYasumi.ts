import {type IYasumi} from '@/dbtypes';
import {useDebounce} from '@uidotdev/usehooks';
import {produce} from 'immer';
import {useEffect, useReducer} from 'react';

export enum UpsertRecordType {
	ADD = 'ADD',
	UPDATE = 'UPDATE',
	DELETE = 'DELETE',
}

type UpsertRecords = {
	add: IYasumi[];
	update: IYasumi[];
	delete: IYasumi[];
};

export type UpsertAction = {
	type: UpsertRecordType;
	payload: IYasumi;
};

const reducer = (state: UpsertRecords, action: UpsertAction) => {
	if (!action.payload) {
		return;
	}

	switch (action.type) {
		case UpsertRecordType.ADD:
			return produce(state, draft => {
				if (draft.add.every(record => record.yasumiDate.value !== action.payload.yasumiDate.value)) {
					draft.add.push(action.payload);
				}
			});
		case UpsertRecordType.UPDATE: {
			const existingIndex = state.update.findIndex(
				record => record.yasumiDate.value === action.payload.yasumiDate.value,
			);

			if (existingIndex !== -1) {
				// Replace existing update record
				return produce(state, draft => {
					draft.update[existingIndex] = action.payload;
				});
			}

			return produce(state, draft => {
				draft.update.push(action.payload);
			});
		}

		case UpsertRecordType.DELETE:
			return produce(state, draft => {
				draft.delete.push(action.payload);
			});

		default:
			throw new Error('Unknown action type');
	}
};

const defaultUpsertRecords: UpsertRecords = {
	add: [],
	update: [],
	delete: [],
};

export const useSaveYasumi = () => {
	const [upsertRecords, setUpsertRecords] = useReducer(reducer, defaultUpsertRecords);

	const debouncedUpsertRecords = useDebounce(upsertRecords, 1000);

	useEffect(() => {
		console.log('DEBOUNCED', debouncedUpsertRecords);
	}, [debouncedUpsertRecords]);

	return {
		setUpsertRecords,
	};
};
