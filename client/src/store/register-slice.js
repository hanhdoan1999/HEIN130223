import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registerState: null,
  isFetching: false,
  error: false,
};
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart(state) {
      state.isFetching = true;
    },
    registerSuccess(state, action) {
      state.isFetching = false;
      state.registerState = action.payload;
    },
    registerFailure(state,action) {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;

export default registerSlice;