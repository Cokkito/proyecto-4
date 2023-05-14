import { Paper, Typography } from '@mui/material';
import { StyledDiv } from './styles';

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
			<StyledDiv>
				<Typography variant='caption'>
					Jorge Mario Mora Gutierrez - 220336617
				</Typography>
				<Typography variant='caption'>
					Conceptualización de servicios en la nube
				</Typography>
				<Typography variant='caption'>3.2. Sitio Web sencillo</Typography>
				<Typography variant='caption'>jorgemg354@gmail.com</Typography>
			</StyledDiv>
		</Paper>
	);
}

export default Footer;
