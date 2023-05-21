import * as types from '../actionTypes';

const INITIAL_STATE = {
	idToken: null,
	localId: null
};

export const authReducer = (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		case types.AUTHENTICATE_USER:
			return {
				...state,
				...payload
			};

		case types.LOGOUT_USER:
			return INITIAL_STATE;
		default:
			return state;
	}
};