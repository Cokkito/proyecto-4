export interface ILoginUserRequest {
	email: string;
	password: string;
}

export interface ILoginUserResponse {
	name: string;
	email: string;
	role: string;
}
