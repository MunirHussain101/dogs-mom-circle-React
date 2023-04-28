import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    completed: false,
    storeFormData: []
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        Step1Data: (state, action) => {
            state.step1 = action.payload
        },
        Step2Data: (state, action) => {
            state.step1 = action.payload
        },
        Step3Data: (state, action) => {
            state.step1 = action.payload
        },
        Step4Data: (state, action) => {
            state.step1 = action.payload
        },
        completeForm: (state) => {
            state.completed = true;
          },
    }
})

export const { Step1Data, Step2Data, Step3Data, Step4Data, completeForm, storeFormData } = formSlice.actions;

export default formSlice.reducer;