import {Box, Paper} from '@mui/material';
import {CalendarInput} from './CalendarInput';

export default function Input() {
	return (
		<Box
			mt={2}
			component={Paper}
			p={2}
		>
			<CalendarInput/>
		</Box>
	);
}
