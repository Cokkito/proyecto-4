import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { ERoles } from 'types';

interface State {
	isLoginModalOpen: boolean;
}

const initialState: State = {
	isLoginModalOpen: false,
};

export const loginScreen = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setLoginModalVisibility: (state, action: { payload: boolean }) => {
			state.isLoginModalOpen = action.payload;
		},
	},
});

export const { setLoginModalVisibility } = loginScreen.actions;
export default loginScreen.reducer;
