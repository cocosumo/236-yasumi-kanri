import {Button} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export default function HelpButton() {
	const handleGotoInstructions = () => {
		const element = document.getElementById('helpSection');
		element?.scrollIntoView({behavior: 'smooth', block: 'center'});
	};

	return (
		<Button
			startIcon={<HelpIcon/>}
			variant='contained'
			onClick={handleGotoInstructions}
		>
			使い方
		</Button>
	);
}
