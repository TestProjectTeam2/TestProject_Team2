import * as types from "../actionTypes";

const TOKEN_ALIAS = '__tkn'
const USER_ID_ALIAS = '__uid'

export const authenticateUser = (token, uid) => {
	localStorage.setItem(TOKEN_ALIAS, token);
	localStorage.setItem(USER_ID_ALIAS, uid);

	return {
		type: types.AUTHENTICATE_USER,
		payload: {token, uid}
	}
};

export const logoutUser = () => {
	localStorage.removeItem(TOKEN_ALIAS);
	localStorage.removeItem(USER_ID_ALIAS);

	return {
		type: types.LOGOUT_USER
	};
}