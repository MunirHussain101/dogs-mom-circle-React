import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    getSearchData: []
}



export const InfoSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        getSearchDetails: (state, action) => {
            state.getSearchData = action.payload;
        },
    }
})

export const { getSearchDetails } = InfoSlice.actions;

export default InfoSlice.reducer;