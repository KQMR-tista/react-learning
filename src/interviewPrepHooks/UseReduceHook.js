/**
 *  Hook used for state management.
 *  Accepts a reducer function, initial state.
 *  Returns the updated state, dispatcher function
 */

import React, {useReducer} from 'react';

function UseReduceHook(props) {

    let initialState = {
        'firstName': '',
        'lastName': '',
        'zipCode': ''
    };

    /**
     *
     * @param state ->Current state
     * @param action -> action object sent in by the dispatcher
     * @returns -> Updated state
     */
    const reducer  = (state, action) => {
        switch(action.type){
            case 'ADD_FNAME':
                return {...state, firstName: action.payload}
            case 'ADD_LNAME':
                return {...state, lastName: action.payload};
            case 'ADD_ZIP':
                return {...state, zipCode: action.payload};
            default:
                return state;
        }
    };

    /**
        Reducer: A function that is responsible for updating the state. Accepts state & actions as parameters.
        initialState: The initial state value
        updatedState: The updated state returned by the reducer.
        dispatcher: Function responsible for triggering an action on the reducer. It accepts the action and any payload as an object
        {
            type: action_type,
            payload: payload_object
         }
     */
    let [updatedState, dispatcher] = useReducer(reducer, initialState);

    return (
        <div>
            <h1> Learning UseReduce Hook</h1>

            <button onClick={() => dispatcher({type: 'ADD_FNAME', payload: 'Ajith'})}>ADD FIRST NAME</button>
            <br/>
            <button onClick={() => dispatcher({type: 'ADD_LNAME', payload: 'Keerikkattil'})}>ADD LAST NAME</button>
            <br/>
            <button onClick={() => dispatcher({type: 'ADD_ZIP', payload: '21228'})}>ADD ZIPCODE</button>
            <br/>

            <p>
                <pre>{JSON.stringify(updatedState, null, 2)}</pre>
            </p>
        </div>
    );
}

export default UseReduceHook;