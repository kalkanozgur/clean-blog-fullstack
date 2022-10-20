import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

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
		extraReducers: {
			[HYDRATE]: (state, action) => {
				return {
					...state,
					...action.payload.auth,
				};
			},
		},
	},
});

export default postSlice.reducer;
