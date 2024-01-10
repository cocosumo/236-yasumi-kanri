import {type IYasumi} from '@/dbtypes';
import {getYasumi, type GetYasumiParams} from '@api/getYasumi';
import {useQuery} from '@tanstack/react-query';

type Options<T = unknown> = {
	select: (data: IYasumi[]) => T;
};

export const useYasumi = <T>(
	params: GetYasumiParams,
	options: Options<T>,
) => useQuery({
	queryKey: ['yasumi', params],
	queryFn: async () => getYasumi(params),
	...options,
});
