import { createSlice } from '@reduxjs/toolkit';
import { ICartItem } from 'pages/Shop/type';

interface State {
	isLoginModalOpen: boolean;
	isCartOpen: boolean;
	cart: ICartItem[];
}

const initialState: State = {
	isLoginModalOpen: false,
	isCartOpen: false,
	cart: [],
};

export const loginScreen = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setLoginModalVisibility: (state, action: { payload: boolean }) => {
			state.isLoginModalOpen = action.payload;
		},
		setCartVisibility: (state, action: { payload: boolean }) => {
			state.isCartOpen = action.payload;
		},
		updateCart: (state, action: { payload: ICartItem[] }) => {
			state.cart = action.payload;
		},
	},
});

export const { setLoginModalVisibility, setCartVisibility, updateCart } =
	loginScreen.actions;
export default loginScreen.reducer;
