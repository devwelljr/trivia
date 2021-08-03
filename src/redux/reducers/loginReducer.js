import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  name: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case types.TOKEN_REQUEST:
    return { ...state };
  case types.TOKEN_REQUEST_SUCCESS:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default loginReducer;
