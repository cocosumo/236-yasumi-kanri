import OrdinaryAM from '@assets/day-ordinary-am.png';
import OrdinaryPM from '@assets/day-ordinary-pm.png';
import Ordinary from '@assets/day-ordinary.png';
import Blank from '@assets/blank.png';
import {Card, CardContent, Stack, Typography} from '@mui/material';
import {grey} from '@mui/material/colors';

const rawContent = [
	{title: '一回目', image: Ordinary, desc: '終日休'},
	{title: '二回目', image: OrdinaryAM, desc: '午前休'},
	{title: '三回目', image: OrdinaryPM, desc: '午後休'},
	{title: '四回目', image: Blank, desc: '白紙'},
];

export default function Sample() {
	return (
		<Stack
			direction='row'
			justifyContent='center'
			alignItems='center'
			spacing={2}
			padding={2}
		>
			{rawContent.map(({title, image, desc}) => (
				<Card key={title} sx={{flex: 1}}>

					<CardContent>
						<Typography textAlign='center' fontSize='0.8rem' color={grey[700]}>
							{title}
						</Typography>

						<img src={image} alt={title} width='100%'/>

						<Typography textAlign='center' fontSize='1.5rem'>
							{desc}
						</Typography>

					</CardContent>

				</Card>
			))}

		</Stack>
	);
}
