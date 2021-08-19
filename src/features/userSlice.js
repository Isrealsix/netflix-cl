import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setLogin: (state, action) => {
			state.user = action.payload;
		},

		setLogout: state => {
			state.user = null;
		},
	},
});

export const { setLogin, setLogout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectUser = state => state.user.user;

export default userSlice.reducer;
