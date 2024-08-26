import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'mpip',
    description: 'Fraud service'
}

/**
 * name: Name of the slice. This will become the state.{sliceName} in the application state.
 * initialState: Initial value of the slice. state.{sliceName}.name, state.{sliceName}.description
 * Reducers: (actions) that update the slice state
 */
export const mppSlice = createSlice({
    name: 'mpipSlice',
    initialState,
    reducers: {
        changeMppName:(state, action) => {
            state.name = action.payload;
        },
        changeMppDescription:(state, action) => {
            state.description = action.payload;
        },

    }
})

/* Export the reducer (action) functions */
export const {changeMppName, changeMppDescription} = mppSlice.actions;

/* Export the reducer */
export default mppSlice.reducer;