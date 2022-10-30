import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// // import { AppState } from "../../app/store";

const initialState = {
	all_posts: [],
	postTitle: "",
	userName: "user_name",
	postText: "",
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		// Action to set the authentication status
		// setAuthState(state, action) {
		// 	state.authState = action.payload;
		// },
		// Special reducer for hydrating the state. Special case for next-redux-wrapper
		sendPost(state, action) {
			state.postText = action.payload;
		},
		// extraReducers: {
		// 	[HYDRATE]: (state, action) => {
		// 		return {
		// 			...state,
		// 			...action.payload.auth,
		// 		};
		// 	},
	},
});

// // export const selectPostState = (state: AppState) => state.post;

export default postSlice.reducer;
