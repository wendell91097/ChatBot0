import { createSlice } from "@reduxjs/toolkit"

// TODO fix rootSlices

const rootSlice = createSlice({
    name: "root",
    initialState: {
        stuff: "Stuff",
    },
    reducers: {
        chooseStuff: (state, action) => { state.stuff = action.payload }, 
     
    }
})

export const reducer = rootSlice.reducer;
export const { chooseStuff } = rootSlice.actions