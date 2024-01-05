import {Paper, Stack} from '@mui/material';
import Title from './Title';

export default function Instructions() {
	return (
		<Stack
			component={Paper}
			my={20}
			py={2}
			id='helpSection'
		>
			<Title/>
		</Stack>
	);
}
