import {Stack, Typography} from '@mui/material';

export default function Title() {
	return (
		<Stack>
			<Typography gutterBottom align='center' sx={{fontSize: 16}} color='text.secondary'>
				使い方
			</Typography>
			<Typography marginBottom={2} variant='h5' align='center' component='div'>
				休みの日付をクリックしてください。
				<br/>
				クリックを何度かすると内容が変わります。
			</Typography>
		</Stack>
	);
}
