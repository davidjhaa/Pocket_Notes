import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    create: "",
    showDiv: false,
}
const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        createGroupBtn(state, action){
            state.create = action.payload;
        },
        createShowDivBtn(state){
            state.showDiv = !state.showDiv;
        },
    }
});

export const { createGroupBtn, createShowDivBtn} = contentSlice.actions;
export default contentSlice.reducer;
