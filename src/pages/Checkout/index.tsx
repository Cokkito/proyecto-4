import MainLayout from 'components/MainLayout';
import CheckoutView from './CheckoutView';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { useNavigate } from 'react-router-dom';
import { ROOT } from 'navigation/constants';
import { useEffect } from 'react';

function Checkout() {
	const navigate = useNavigate();
	const {
		loginScreen: { cart },
		checkoutScreen: { addressForm, paymentForm },
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		if (!cart.length) navigate(ROOT);
	}, [cart.length]);

	return (
		<MainLayout
			selectedView={<CheckoutView {...{ cart, addressForm, paymentForm }} />}
		/>
	);
}

export default Checkout;
