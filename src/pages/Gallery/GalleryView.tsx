import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { pets } from './data';
import TextBanner from 'components/TextBanner';

function GalleryView() {
	return (
		<>
			<TextBanner
				header={'Bienivenido a la galería de imágenes'}
				content={
					'Aquí podran ver algunos trabajos que han sido realizados con nosotros.'
				}
			/>
			<Container sx={{ py: 8 }} maxWidth='md'>
				<Grid container spacing={4}>
					{pets.map((pet) => (
						<Grid item key={pet.key} xs={12} sm={6} md={4}>
							<Card
								variant='outlined'
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<CardMedia
									component='div'
									sx={{
										// 16:9
										pt: '56.25%',
									}}
									image={pet.imgURL}
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant='h5' component='h2'>
										{pet.name}
									</Typography>
									<Typography>{pet.desc}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
}

export default GalleryView;
