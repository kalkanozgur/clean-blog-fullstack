
// import { Action } from '@reduxjs/toolkit';
// import { ThunkAction } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './authSlice';
// import { AppStore } from './store';

// const makeStore = () => {
//     configureStore({
//         reducer : {
//             [authSlice.name]: authSlice.reducer
//         },
//         devTools: true
//     })
// }

// export type AppStore = ReturnType<typeof makeStore & string>

// export type AppState = ReturnType<AppStore["getState"]>

// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     AppState,
//     unknown,
//     Action
// >;