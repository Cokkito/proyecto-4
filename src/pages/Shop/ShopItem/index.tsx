import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material';
import { ICartItem } from '../type';

export interface Props {
	item: ICartItem;
	addItem: (item: ICartItem) => void;
}
function ShopItem({ item, addItem }: Props) {
	const handleAddItem = () => {
		addItem(item);
	};

	return (
		<Grid item xs={6} sm={4} md={2}>
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
					image={item.imgURL}
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant='subtitle2' component='h2'>
						{item.name}
					</Typography>
					<Typography variant='subtitle1'>{`$${item.price}`}</Typography>
				</CardContent>
				<CardActions sx={{ placeSelf: 'center' }}>
					<Button size='medium' variant='outlined' onClick={handleAddItem}>
						Agregar al carrito
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default ShopItem;
