import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    postDetails: false,
}



export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostDetails: (state, action) => {
            state.postDetails = action.payload;
        },
        

    }
})

export const { getPostDetails } = postSlice.actions;

export default postSlice.reducer;