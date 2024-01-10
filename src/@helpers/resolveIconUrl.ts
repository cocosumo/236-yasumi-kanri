import {type IYasumiPicked} from '@/dbtypes';
import OrdinaryAM from '@assets/day-ordinary-am.png';
import OrdinaryPM from '@assets/day-ordinary-pm.png';
import OrdinaryDay from '@assets/day-ordinary.png';

import Unprocessed from '@assets/day-unprocessed.png';
import Processing from '@assets/day-processing.png';
import ProcessingChange from '@assets/day-processing-change.png';
import Returned from '@assets/day-returned.png';

import Leave from '@assets/day-leave.png';
import LeaveAM from '@assets/day-leave-am.png';
import LeavePM from '@assets/day-leave-pm.png';
import LeaveSpecial from '@assets/day-leaveSpecial.png';
import LeaveSpecialAM from '@assets/day-leaveSpecial-am.png';
import LeaveSpecialPM from '@assets/day-leaveSpecial-pm.png';

type IconMapType = Record<string, Record<string, string | Record<string, string>>>;

const iconMap: IconMapType = {
	通常休み: {
		未申請: Unprocessed,
		上長確認中: ProcessingChange,
		差し戻し: Returned,
		承認: {
			一日: OrdinaryDay,
			午前休み: OrdinaryAM,
			午後休み: OrdinaryPM,
		},
	},
	有給: {
		未申請: Unprocessed,
		上長確認中: Processing,
		差し戻し: Returned,
		承認: {
			一日: Leave,
			午前休み: LeaveAM,
			午後休み: LeavePM,
		},
	},
	特別有給: {
		未申請: Unprocessed,
		上長確認中: Processing,
		差し戻し: Returned,
		承認: {
			一日: LeaveSpecial,
			午前休み: LeaveSpecialAM,
			午後休み: LeaveSpecialPM,
		},
	},
};

export default function (yasumiRecord?: IYasumiPicked) {
	if (!yasumiRecord) {
		return;
	}

	const {
		type,
		duration,
		ステータス: status,
	} = yasumiRecord ?? {};

	const typeMap = iconMap?.[type.value];

	if (!typeMap) {
		return;
	}

	const statusMap = typeMap?.[status.value];
	if (!statusMap) {
		return;
	}

	if (typeof statusMap === 'object') {
		return statusMap[duration.value];
	}

	return statusMap;
}
