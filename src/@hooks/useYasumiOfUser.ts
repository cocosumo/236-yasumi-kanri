import {useAtomValue} from 'jotai';
import {currentRangeAtom} from './useCalendarInput';
import {useLoginUserCode} from './useLoginUser';
import {useYasumi} from './useYasumi';
import {useCallback} from 'react';

export const useYasumiOfUser = () => {
	const currentRange = useAtomValue(currentRangeAtom);
	const userCode = useLoginUserCode();

	return useYasumi(currentRange, {
		select: useCallback(data => data.filter(item => item.申請者.value[0].code === userCode), [userCode]),
	});
};
