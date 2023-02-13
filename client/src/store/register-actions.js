import { registerStart, registerSuccess, registerFailure } from './register-slice';
import { publicRequest } from '../request-methods';

export const register = (user) => {
  return async (dispatch) => {
    dispatch(registerStart());
    try {
      const response = await publicRequest.post('/auth/register', user);
      dispatch(registerSuccess(response.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };
};