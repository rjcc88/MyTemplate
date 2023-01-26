// import { createSlice } from "@reduxjs/toolkit"

// const initialState ={
//     token: null
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setCredentials: (state, action) => {
//             state.token = action.payload.token
//         },
//         logOut: (state) => {
//             state.username = null
//             state.token = null
//         }
//     },
// })

// export const { setCredentials, logOut } = authSlice.actions

// export const selectCurrentToken = (state) => state.auth.token

// export default authSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    email: null,
    userName: null
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {

            state.email = action.payload.email;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.userName = action.payload.userName;

        },
        setSignOut: (state) => {
            state.email = null;
            state.userName = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
export const selectEmail = (state) => state.userAuth.email;
export const selectUserName = (state) => state.userAuth.userName;

export default authSlice.reducer;