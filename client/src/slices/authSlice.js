import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    user: null,
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload.status;
        }
    }
});

export const {setUser, setToken, setIsLoggedIn} = authSlice.actions;
export default authSlice.reducer;