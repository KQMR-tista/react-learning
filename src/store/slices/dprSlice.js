import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'dpr',
    description: 'Data Protection'
}

/**
 * name: Name of the slice. This will become the state.{sliceName} in the application state.
 * initialState: Initial value of the slice. state.{sliceName}.name, state.{sliceName}.description
 * Reducers: (actions) that update the slice state
 */
export const dprSlice = createSlice({
    name: 'dprSlice',
    initialState,
    reducers: {
        changeDprName:(state, action) => {
            state.name = action.payload;
        },
        changeDprDescription:(state, action) => {
            state.description = action.payload;
        },

    }
})

/* Export the reducer (action) functions */
export const {changeDprName, changeDprDescription} = dprSlice.actions;

/* Export the reducer */
export default dprSlice.reducer;