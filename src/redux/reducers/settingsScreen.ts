import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import { ERoles, IRatings } from 'types';

interface State {
	theme: PaletteMode;
	email: string;
	name: string;
	role: ERoles;
	ratings: IRatings;
}

const initialState: State = {
	theme: 'light',
	email: '',
	name: '',
	role: ERoles.default,
	ratings: {
		main: 0,
		info: 0,
		faq: 0,
	},
};

export const settingsScreen = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setTheme: (state, action: { payload: PaletteMode }) => {
			state.theme = action.payload;
		},
		setSettings: (state, action: { payload: any }) => {
			state.email = action.payload.email;
			state.name = action.payload.name;
			state.role = action.payload.role;
		},
		resetSettings: (state) => {
			state.email = '';
			state.name = '';
			state.role = ERoles.default;
		},
	},
});

export const { setTheme, setSettings, resetSettings } = settingsScreen.actions;
export default settingsScreen.reducer;
