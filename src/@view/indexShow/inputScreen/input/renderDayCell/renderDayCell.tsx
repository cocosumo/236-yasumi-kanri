import {type DayCellContentArg} from '@fullcalendar/core';
import {Box, Button, Stack, Typography} from '@mui/material';
import {type IYasumi} from '@/dbtypes';
import {TypeIcon} from './TypeIcon';

type IProps = {
	readonly yasumiRecord?: IYasumi;
} & DayCellContentArg;

function DayCell(props: IProps) {
	const {
		dayNumberText,
		yasumiRecord,
	} = props;

	const isExist = Boolean(yasumiRecord);

	return (
		<Button
			sx={{
				width: '100%',
				height: '100%',
			}}
		>

			<Stack
				width='100%'
				spacing={1}
			>
				<Typography width='100%' textAlign='center'>
					{dayNumberText}
				</Typography>
				<Box height={65}>
					{isExist && (
						<TypeIcon yasumiRecord={yasumiRecord!}/>
					)}

				</Box>

			</Stack>
		</Button>
	);
}

export const renderDayCell = (params: IProps) => <DayCell {...params}/>;
