import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userDetails: null,
    userGetId: null,
    targetUserId: null
}



export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        logoutUserAuth: (state) => {
            state.userDetails = null;
            localStorage.removeItem('token')
        },
        getUserId: (state, action) => {
            state.userGetId = action.payload;
        },
        setTargetUserId: (state, action) => {
            state.targetUserId = action.payload
        }
    }
})

export const { getUserDetails, logoutUserAuth, getUserId, setTargetUserId } = authSlice.actions;

export default authSlice.reducer;