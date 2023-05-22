import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { items } from './data';
import TextBanner from 'components/TextBanner';
import ShopItem, { Props as ShopItemProps } from './ShopItem';

interface Props {
	addItem: ShopItemProps['addItem'];
}

function ShopView({ addItem }: Props) {
	return (
		<>
			<TextBanner
				header={'Bienivenido a nuestra tienda en línea'}
				content={
					'Siéntete seguro de que nuestros productos son de alta calidad'
				}
			/>
			<Container sx={{ py: 12 }} maxWidth='lg'>
				<Grid container spacing={2}>
					{items.map((item, index) => (
						<ShopItem key={`item_${index}`} {...{ item, addItem }} />
					))}
				</Grid>
			</Container>
		</>
	);
}

export default ShopView;
