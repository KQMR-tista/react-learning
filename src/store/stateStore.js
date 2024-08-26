import {configureStore} from '@reduxjs/toolkit';
import mpipSlice from "./slices/mpipSlice";
import dprSlice from "./slices/dprSlice";


export const store = configureStore({
    /* Register each state slice here
    * Multiple state slices together make up the application state.
    * Pretty much a big object with a key:value pair representing a state slice
    * */
    reducer: {
        mppStateSlice: mpipSlice,
        dprStateSlice: dprSlice,

    },

    /*
    {
        dprStateSlice: {name: 'dpr', description: 'Data Protection'},
        mppStateSlice: {name: 'mpip', description: 'Fraud service'},
    }
     */
})