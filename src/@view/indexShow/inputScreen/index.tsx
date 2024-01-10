import {createRoot} from 'react-dom/client';
import App from './App';
import AppContainer from '@providers/AppContainer';

export default function () {
	const domNode = document.getElementById('root');

	if (!domNode) {
		return;
	}

	const root = createRoot(domNode);

	root.render(
		<AppContainer>
			<App/>
		</AppContainer>,
	);
}
