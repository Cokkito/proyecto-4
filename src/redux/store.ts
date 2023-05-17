import { configureStore } from '@reduxjs/toolkit';

import settingsScreen from './reducers/settingsScreen';
import loginScreen from './reducers/loginScreen';
import { mainApi } from 'services/mainApi';

export const store = configureStore({
	reducer: {
		loginScreen,
		settingsScreen,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(mainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
