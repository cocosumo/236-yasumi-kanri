import {onIndexShow} from '@events/onIndexShow';
import indexShow from '@view/indexShow';

(() => {
	console.log('Running in ', process.env.NODE_ENV);
	kintone.events.on(onIndexShow, indexShow);
})();
