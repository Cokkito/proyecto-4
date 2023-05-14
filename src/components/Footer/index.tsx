import { Paper, Container, Box, Typography } from '@mui/material';

function Footer() {
	return (
		<Paper
			sx={{
				width: '100%',
				position: 'fixed',
				bottom: 0,
				backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))`,
			}}
			component='footer'
			square
			variant='outlined'
		>
			<Container maxWidth='lg'>
				<Box
					sx={{
						flexGrow: 1,
						justifyContent: 'center',
						display: 'flex',
						my: 1,
					}}
				/>

				<Box
					sx={{
						flexGrow: 1,
						justifyContent: 'center',
						display: 'flex',
						mb: 2,
					}}
				>
					<Typography variant='caption'>Jorge Mario Mora Gutierrez</Typography>
				</Box>
			</Container>
		</Paper>
	);
}

export default Footer;
