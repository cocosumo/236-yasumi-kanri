import type {Event} from '@events/onIndexShow';
import inputScreen from './inputScreen';

export default function (event: Event) {
	const {
		viewId,
	} = event;

	switch (viewId) {
		// 自分の休み（登録）
		case 5523653:
			inputScreen();
			break;
		default:
			console.log('default');
			break;
	}

	return event;
}
