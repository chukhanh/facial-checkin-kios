import { LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/actionTypes';

const user = localStorage.getItem('secretKey');

const initState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };
console.log(initState.isLoggedIn);

const auth = (state = initState, actions) => {
  switch (actions.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: actions.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default auth;
