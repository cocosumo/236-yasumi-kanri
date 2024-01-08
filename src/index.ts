import {onIndexShow} from '@events/onIndexShow';
import indexShow from '@view/indexShow';
import '@styles/global.css';

(() => {
	console.log('Running in ', process.env.NODE_ENV);
	kintone.events.on(onIndexShow, indexShow);
})();
