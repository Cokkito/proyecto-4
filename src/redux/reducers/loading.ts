import { createSlice } from '@reduxjs/toolkit';

interface State {
	isLoading: boolean;
}

const initialState: State = {
	isLoading: false,
};

export const loading = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		setIsLoading: (state, action: { payload: boolean }) => {
			state.isLoading = action.payload;
		},
	},
});

export const { setIsLoading } = loading.actions;
export default loading.reducer;
