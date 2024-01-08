import {Button, Link, Stack, Typography} from '@mui/material';
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

function TechSupportLink() {
	return (
		<Button
			LinkComponent={Link}
			href='https://rdmuhwtt6gx7.cybozu.com/k/101/'
			target='_blank'
			rel='noopener'
		>
			<img
				style={{
					width: '50px',
				}}
				src={TechSupportPNG}
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
			<Typography align='center' sx={{fontSize: 14}}>
				※作成、保存後、「有休を申請する」より「実行」をクリックしてください。
			</Typography>
			<Typography align='center' sx={{fontSize: 14}}>

				エラーや案などございましたら、<TechSupportLink/>アプリよりご連絡ください。 よろしくお願いいたします。
			</Typography>

		</Stack>
	);
}
