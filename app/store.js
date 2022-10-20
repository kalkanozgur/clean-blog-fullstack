import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import postSlice from "../features/postSlice";

export const store = configureStore({
	reducer: {
		post: postSlice,
	},
});

const makeStore = () => {
	configureStore({
		reducer: {
			post: postSlice,
		},
		devTools: true,
	});
};

export const wrapper = createWrapper(makeStore);
