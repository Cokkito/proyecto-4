import { ICartItem } from 'pages/Shop/type';
import CartItem from './Item';
import { Wrapper } from './styles';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CHECKOUT } from 'navigation/constants';
import { useDispatch } from 'react-redux';
import { setCartVisibility } from 'redux/reducers/loginScreen';

type Props = {
	cartItems: ICartItem[];
	addToCart: (clickedItem: ICartItem) => void;
	removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const calculateTotal = (items: ICartItem[]) =>
		items.reduce((acc, item) => acc + (item.amount || 0) * item.price, 0);

	const navToCheckout = () => {
		dispatch(setCartVisibility(false));
		navigate(CHECKOUT);
	};

	return (
		<Wrapper>
			<h2>Carrito</h2>
			{cartItems.length === 0 ? (
				<p>Actualmente no cuenta con artículos en su carrito</p>
			) : (
				<>
					<Box>
						{cartItems.map((item, index) => (
							<CartItem
								key={`cartItem_${index}`}
								item={item}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
							/>
						))}
					</Box>

					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
						<Button
							color='inherit'
							variant='outlined'
							sx={{ margin: '20px' }}
							onClick={navToCheckout}
						>
							Proceder a pagar
						</Button>
					</Box>
				</>
			)}
		</Wrapper>
	);
};

export default Cart;
