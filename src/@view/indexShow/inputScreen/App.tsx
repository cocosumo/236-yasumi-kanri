import {Container} from '@mui/material';
import HelpButton from './HelpButton';
import Instructions from './instructions';
import Input from './input';

export default function App() {
	return (
		<Container maxWidth='md'>
			<HelpButton/>
			<Input/>
			<Instructions/>
		</Container>
	);
}
