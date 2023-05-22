import { mainApi } from 'services/mainApi';
import { ILoginUserResponse, ILoginUserRequest } from './types/users';
import { manageLoading } from 'utils/apiUtils';

const baseUrl = 'users';

const usersApi = mainApi.injectEndpoints({
	endpoints: (build) => ({
		loginUser: build.mutation<ILoginUserResponse, ILoginUserRequest>({
			query: (body) => ({
				url: `${baseUrl}/login`,
				method: 'POST',
				body,
			}),
			onQueryStarted: (_arg, { dispatch, queryFulfilled }) => {
				manageLoading(dispatch, queryFulfilled);
			},
		}),
	}),
	overrideExisting: false,
});

export const { useLoginUserMutation } = usersApi;

export default usersApi;
