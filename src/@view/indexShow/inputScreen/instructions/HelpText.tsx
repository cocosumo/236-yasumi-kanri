import {Button, Stack, Typography} from '@mui/material';
import Plus from '@assets/plus.png';
import TechSupportPNG from '@assets/techSupport.png';

function PlusImage() {
	const goToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Button onClick={goToTop}>
			<img
				style={{
					width: '50px',
				}}
				src={Plus}
				alt='title'
			/>
		</Button>
	);
}

export function HelpText() {
	return (
		<Stack>
			<Typography align='center' sx={{fontSize: 16}}>
				有休、特別有休（アニバーサリー休暇）などを使用する場合は、
				<br/>
				右側の <PlusImage/> より新規申請をしてください。
			</Typography>

		</Stack>
	);
}
