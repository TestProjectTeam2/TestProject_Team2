import * as types from "../actionTypes";

const USER_ID_ALIAS = '__uid'
const TOKEN_ALIAS = '__tkn'

export const authenticateUser = (uid, token) => {
	localStorage.setItem(USER_ID_ALIAS, uid);
	localStorage.setItem(TOKEN_ALIAS, token);

	return {
		type: types.AUTHENTICATE_USER,
		payload: {uid, token}
	}
};

export const logoutUser = () => {
	localStorage.removeItem(USER_ID_ALIAS);
	localStorage.removeItem(TOKEN_ALIAS);

	return {
		type: types.LOGOUT_USER
	};
}