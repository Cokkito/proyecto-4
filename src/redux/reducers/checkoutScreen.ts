import { createSlice } from '@reduxjs/toolkit';
import {
	IAddressForm,
	IPaymentForm,
	addressFormDefault,
	paymentFormDefault,
} from 'pages/Checkout/types';

interface State {
	addressForm: IAddressForm;
	paymentForm: IPaymentForm;
}

const initialState: State = {
	addressForm: addressFormDefault,
	paymentForm: paymentFormDefault,
};

export const checkoutScreen = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setAddressData: (state, action: { payload: IAddressForm }) => {
			state.addressForm = action.payload;
		},
		setPaymentData: (state, action: { payload: IPaymentForm }) => {
			state.paymentForm = action.payload;
		},
	},
});

export const { setAddressData, setPaymentData } = checkoutScreen.actions;
export default checkoutScreen.reducer;
