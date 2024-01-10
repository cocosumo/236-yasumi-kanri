import {useCallback} from 'react';
import {useYasumi} from './useYasumi';
import {type IYasumi} from '@/dbtypes';

type GroupedYasumi = Record<string, {
	name: string;
	data: IYasumi[];
}>;

export const useGroupedYasumi = ({
	dateStart,
	dateEnd,
}: {
	dateStart: string;
	dateEnd: string;
}) => useYasumi<GroupedYasumi>(
	{dateEnd, dateStart},
	{
		select: useCallback(data => data.reduce<GroupedYasumi>((acc, curr) => {
			const key = curr.申請者.value[0].code;

			if (!acc[key]) {
				acc[key] = {
					name: curr.申請者.value[0].name,
					data: [],
				};
			}

			acc[key].data.push(curr);

			return acc;
		}, {}), []),
	});
