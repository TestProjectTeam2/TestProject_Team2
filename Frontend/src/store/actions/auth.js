import * as types from "../actionTypes";

// const USER_ID_ALIAS = '__uid'
const ACCESS_TOKEN_ALIAS = '__atkn'
const REFRESH_TOKEN_ALIAS = '__rtkn'

export const authenticateUser = (accessToken, refreshToken) => {
	localStorage.setItem(ACCESS_TOKEN_ALIAS, accessToken);
	localStorage.setItem(REFRESH_TOKEN_ALIAS, refreshToken);

	return {
		type: types.AUTHENTICATE_USER,
		payload: {accessToken, refreshToken}
	}
};

export const logoutUser = () => {
	localStorage.removeItem(ACCESS_TOKEN_ALIAS);
	localStorage.removeItem(REFRESH_TOKEN_ALIAS);

	return {
		type: types.LOGOUT_USER
	};
}