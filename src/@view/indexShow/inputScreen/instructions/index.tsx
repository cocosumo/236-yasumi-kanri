import {Paper, Stack} from '@mui/material';
import Title from './Title';
import Sample from './Sample';
import {HelpText} from './HelpText';

export default function Instructions() {
	return (
		<Stack
			component={Paper}
			py={2}
			mt={2}
			id='helpSection'
		>
			<Title/>
			<Sample/>
			<HelpText/>
		</Stack>
	);
}
