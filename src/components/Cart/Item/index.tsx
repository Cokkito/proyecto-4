import { Button, Typography } from '@mui/material';
import { Wrapper } from './styles';
import { ICartItem } from 'pages/Shop/type';

type Props = {
	item: ICartItem;
	addToCart: (clickedItem: any) => void;
	removeFromCart: (id: number) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => {
	return (
		<Wrapper>
			<div>
				<Typography variant='subtitle1'>{item.name}</Typography>
				<div className='information'>
					<Typography variant='body1'>{`Price: ${item.price}`}</Typography>
					<Typography variant='body1'>{`Total: ${(
						item.amount * item.price
					).toFixed(2)}`}</Typography>
				</div>
				<div className='buttons'>
					<Button
						size='small'
						disableElevation
						variant='contained'
						onClick={() => removeFromCart(item.key)}
					>
						-
					</Button>
					<p>{item.amount}</p>
					<Button
						size='small'
						disableElevation
						variant='contained'
						onClick={() => addToCart(item)}
					>
						+
					</Button>
				</div>
			</div>
			<img src={item.imgURL} alt={item.name} />
		</Wrapper>
	);
};

export default CartItem;
