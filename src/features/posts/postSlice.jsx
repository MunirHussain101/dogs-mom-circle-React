import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    postDetails: [],
    id : 0,
}



export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPostDetails: (state, action) => {
            state.postDetails = action.payload;
        },
        setPost : (state,action) => {
            state.id = action.payload
        }
    }
})

export const { getPostDetails,setPost } = postSlice.actions;

export default postSlice.reducer;