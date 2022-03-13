import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const intialData = ['A', 'B', 'C', 'D', 'E'];
interface ITData {
    data: Array<string>;
    displayList: Array<string>
}

const initialState: ITData = {
    data: intialData,
    displayList: intialData
};

const tDataSlice = createSlice({
    name: "tdata",
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<string[]>) => {
            state.data = intialData.concat(action.payload);
            return state;
        },
        changeDispay: (state) => {
            const newArr = [...state.data.slice(1),state.data[0]];
            state.data=newArr;
            state.displayList = state.data.slice(0, 5);
            return state;
        },
    },
});

export const { addData, changeDispay } = tDataSlice.actions;

export default tDataSlice.reducer;
