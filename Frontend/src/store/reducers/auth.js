import * as types from '../actionTypes';

const INITIAL_STATE = {
	refreshToken: null,
	accessToken: null,
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