import { configureStore } from '@reduxjs/toolkit';

import settingsScreen from './reducers/settingsScreen';
import loginScreen from './reducers/loginScreen';
import loading from './reducers/loading';
import checkoutScreen from './reducers/checkoutScreen';
import { mainApi } from 'services/mainApi';

export const store = configureStore({
	reducer: {
		loginScreen,
		loading,
		settingsScreen,
		checkoutScreen,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
