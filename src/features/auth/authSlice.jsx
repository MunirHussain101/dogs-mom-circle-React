import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userDetails: null,
    userGetId: null,
    targetId : null,
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
        setTargetId : (state,action) => {
            state.targetId = action.payload
        }
    }
})

export const { getUserDetails, logoutUserAuth, getUserId,setTargetId } = authSlice.actions;

export default authSlice.reducer;