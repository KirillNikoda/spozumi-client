export interface User {
	email: string;
	role: string;
	id: number;
}

export interface UsersState {
	currentUser: User;
	err: string;
	isFetching: boolean;
}
