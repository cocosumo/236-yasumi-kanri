import {Container} from '@mui/material';
import HelpButton from './HelpButton';
import Instructions from './instructions';

export default function App() {
	return (
		<Container maxWidth='md'>
			<HelpButton/>
			<Instructions/>
		</Container>
	);
}
