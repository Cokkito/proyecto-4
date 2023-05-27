import { Button, Grid, TextField } from '@mui/material';
import TextBanner from 'components/TextBanner';
import assets from '../../assets/index';

function ContactUsView() {
	return (
		<>
			<TextBanner
				header={'PONTE EN CONTACTO CON NOSOTROS'}
				content={
					'Si tienes alguna duda con respecto a nuestros servicios no olvides en mandarnos un mensaje.'
				}
			/>
			<Grid container>
				<Grid container spacing={3} sm={6} sx={{ padding: '40px' }}>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id='firstName'
							name='firstName'
							label='Nombre'
							fullWidth
							autoComplete='given-name'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id='email'
							name='email'
							label='Correo'
							fullWidth
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							multiline
							rows={6}
							id='doubt'
							name='doubt'
							label='Mensaje'
							fullWidth
							autoComplete='shipping address-line2'
							variant='standard'
						/>
					</Grid>
					<Grid item xs={12} sx={{ textAlign: 'center' }}>
						<Button variant='outlined' color='inherit'>
							Submit
						</Button>
					</Grid>
				</Grid>
				<Grid item sm={6}>
					<img src={assets.pets1} />
				</Grid>
			</Grid>
		</>
	);
}

export default ContactUsView;
