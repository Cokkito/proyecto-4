import MainLayout from 'components/MainLayout';
import ShopView from './ShopView';
import { ICartItem } from './type';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from 'redux/reducers/loginScreen';
import { RootState } from 'redux/store';

function Shop() {
	const dispatch = useDispatch();
	const { cart } = useSelector((state: RootState) => state.loginScreen);

	const addItem = (itemToAdd: ICartItem) => {
		const clonedCart: ICartItem[] = JSON.parse(JSON.stringify(cart));
		const cartItem = clonedCart.find((item) => item.key === itemToAdd.key);

		if (cartItem) cartItem.amount++;
		else clonedCart.push(itemToAdd);
		dispatch(updateCart(clonedCart));
	};

	return <MainLayout selectedView={<ShopView {...{ addItem }} />} />;
}

export default Shop;
