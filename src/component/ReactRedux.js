import React, {useReducer} from 'react';
let cloneDeep = require('lodash.clonedeep');

let initialState = 0;

const reducer = (state, action) => {
    const clonedState = cloneDeep(state);
    switch(action.type){
        case 'ADD':
            return state = clonedState + action.payload;
        case 'SUBTRACT':
            return state = clonedState - action.payload;
        case 'MULTIPLY':
            return state = clonedState * action.payload;
        case 'DIVIDE':
            return state = clonedState / action.payload;
    }
};

let dispatchActions = (action) => {
    switch(action){
        case 'ADD':
            return {type: 'ADD', payload: 5}
        case 'SUBTRACT':
            return {type: 'SUBTRACT', payload: 5}
        case 'MULTIPLY':
            return {type: 'MULTIPLY', payload: 5}
        case 'DIVIDE':
            return {type: 'DIVIDE', payload: 5}
    }
}

function ReactRedux() {
    const [currentState, dispatcher] = useReducer(reducer, initialState);

    return (
        <div style={{display: 'flex', flexDirection: 'column', maxWidth: '100px', paddingLeft: '25%'}}>
            <button onClick={() => dispatcher(dispatchActions('ADD'))}>ADD</button>
            <button onClick={() => dispatcher(dispatchActions('SUBTRACT'))}>SUBTRACT</button>
            <button onClick={() => dispatcher(dispatchActions('MULTIPLY'))}>MULTIPLY</button>
            <button onClick={() => dispatcher(dispatchActions('DIVIDE'))}>DIVIDE</button>

            <p>Current Value: {currentState}</p>

        </div>
    );
}

export default ReactRedux;