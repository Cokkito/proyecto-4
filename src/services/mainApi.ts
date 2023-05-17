import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config';

export const mainApiUrl = config.baseApiUrl;

const baseQuery = fetchBaseQuery({
	baseUrl: mainApiUrl,
	credentials: 'include',
});

const baseQueryWithUnauthorize: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	const result: any = await baseQuery(args, api, extraOptions);
	return result;
};

export const mainApi = createApi({
	reducerPath: 'mainApi',
	keepUnusedDataFor: 0,
	baseQuery: baseQueryWithUnauthorize,
	endpoints: () => ({}),
});
