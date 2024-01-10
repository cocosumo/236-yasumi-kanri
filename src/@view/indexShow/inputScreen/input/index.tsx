import {Box, Paper} from '@mui/material';
import {CalendarInput} from './CalendarInput';

import {useYasumiOfUser} from '@hooks/useYasumiOfUser';

export default function Input() {
	const {data} = useYasumiOfUser();

	console.log(data);
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
