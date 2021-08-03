import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loggedIn: false,
        user: null
    },
    reducers: {
        authUser: (state, { payload }) => {
            state.loggedIn = true;
            state.user = payload;
        },
        logoutUser: (state) => {
            state.loggedIn = false;
            state.user = null;
        }
    }
})

export const { authUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;