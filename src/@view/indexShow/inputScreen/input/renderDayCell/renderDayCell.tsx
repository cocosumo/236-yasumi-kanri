import {type DayCellContentArg} from '@fullcalendar/core';
import {Box, Button, Stack, Typography, Zoom} from '@mui/material';
import {type IYasumi} from '@/dbtypes';
import TypeIcon from './TypeIcon';
import resolveIconUrl from '@helpers/resolveIconUrl';
import {useYasumiDay} from './useYasumiDay';

type IProps = {
	readonly yasumiRecord?: IYasumi;
} & DayCellContentArg;

function DayCell(props: IProps) {
	const {
		dayNumberText,
		yasumiRecord,
	} = props;

	const {
		currentRecord,
		onClickDay,
		onRightClick,
	} = useYasumiDay(yasumiRecord);

	const iconUrl = resolveIconUrl(currentRecord);

	const isExist = Boolean(currentRecord);

	const imageAlt = `${currentRecord?.type.value} (${currentRecord?.duration.value} ${currentRecord?.ステータス.value}`;

	return (
		<Button
			sx={{
				width: '100%',
				height: '100%',
			}}
			onClick={onClickDay}
			onContextMenu={onRightClick}
		>

			<Stack
				width='100%'
				spacing={1}
			>
				<Typography width='100%' textAlign='center'>
					{dayNumberText}
				</Typography>
				<Zoom key={currentRecord?.duration.value} in={isExist}>

					<Box height={65}>
						{iconUrl && (
							<TypeIcon
								alt={imageAlt}
								src={iconUrl}
							/>
						)}
					</Box>
				</Zoom>

			</Stack>
		</Button>
	);
}

export const renderDayCell = (params: IProps) => <DayCell {...params}/>;
