import {Button} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export default function HelpButton() {
	return (
		<Button
			startIcon={<HelpIcon/>}
			variant='contained'
		>
			使い方
		</Button>
	);
}
