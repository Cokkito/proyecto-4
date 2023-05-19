import { Box, Container, Typography } from '@mui/material';

interface Props {
	header: string;
	content: string;
}

function TextBanner({ header, content }: Props) {
	return (
		<Box
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6,
			}}
		>
			<Container>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					color='text.primary'
					gutterBottom
				>
					{header}
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color='text.secondary'
					paragraph
				>
					{content}
				</Typography>
			</Container>
		</Box>
	);
}

export default TextBanner;
