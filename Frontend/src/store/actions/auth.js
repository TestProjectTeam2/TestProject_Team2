import * as types from "../actionTypes";

const ID_TOKEN_ALIAS = '__tkn'
const LOCAL_ID_ALIAS = '__lid'

export const authenticateUser = (idToken, localId) => {
	localStorage.setItem(ID_TOKEN_ALIAS, idToken);
	localStorage.setItem(LOCAL_ID_ALIAS, localId);

	return {
		type: types.AUTHENTICATE_USER,
		payload: {idToken, localId}
	}
};

export const logoutUser = () => {
	localStorage.removeItem(ID_TOKEN_ALIAS);
	localStorage.removeItem(LOCAL_ID_ALIAS);

	return {
		type: types.LOGOUT_USER
	};
}