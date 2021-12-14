import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
	isAuthenticated: false,
};
const authSlice = createSlice({
	name: "authenication",
	initialState: initalAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
