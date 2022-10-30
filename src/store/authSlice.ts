import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
export interface AuthState {
    authState: boolean;
}

const initialState:AuthState = {
    authState: false
}

export const authSlice= createSlice(
    {
        name: "auth",
        initialState,
        reducers: {
            setAuth(state, action) {
                state.authState= action.payload
            },
        },
        extraReducers:{
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.auth,
                }
            }
        }
    }
)