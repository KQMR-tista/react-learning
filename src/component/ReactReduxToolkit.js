import React, {useEffect} from 'react';

/* Imports needed to use reduc toolkit */
import { useSelector, useDispatch } from 'react-redux'

/* Importing the actions to update state slices */
import { changeDprName, changeDprDescription } from '../store/slices/dprSlice';
import { changeMppName, changeMppDescription } from '../store/slices/mpipSlice'
import {set} from "react-hook-form";


function ReactReduxToolkit(props) {
    /* useSelector is used to get the application state from the state store */
    const {dprStateSlice, mppStateSlice} = useSelector(state => state);
    console.log(dprStateSlice);
    console.log(mppStateSlice);

    /* dispatch is used to trigger the action to update the state */
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeDprName('newDpr'));
        dispatch(changeDprDescription('newDpr Description'));

        dispatch(changeMppName('newMpp'));
        dispatch(changeMppDescription('newMpp Description'));
    }, [])

    return (
        <div></div>
    );
}

export default ReactReduxToolkit;