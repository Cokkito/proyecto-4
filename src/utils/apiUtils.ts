import {
	ActionCreatorWithPayload,
	AnyAction,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import { PromiseWithKnownReason } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { setIsLoading } from 'redux/reducers/loading';

export const manageLoading = (
	dispatch: ThunkDispatch<any, any, AnyAction>,
	queryFulfilled: PromiseWithKnownReason<any, any>,
	setLoading: ActionCreatorWithPayload<boolean, string> = setIsLoading
) => {
	dispatch(setLoading(true));
	queryFulfilled
		.then(() => {
			dispatch(setLoading(false));
		})
		.catch(() => {
			dispatch(setLoading(false));
		});
};
