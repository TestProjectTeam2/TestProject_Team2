import * as types from '../actionTypes';

const INITIAL_STATE = {
	accessToken: null,
	refreshToken: null,
	user: null,
};

export const authReducer = (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		case types.AUTHENTICATE_USER:
			return {
				...state,
				...payload
			};

		case types.ADD_USER:
			return {
				...state,
				...payload
				// user: payload
			};

		case types.LOGOUT_USER:
			return INITIAL_STATE;
		
		case types.ACTIVATION_SUCCESS:
      case types.ACTIVATION_FAIL:
         return {
         	...state
         }
		
		default:
			return state;
	}
};