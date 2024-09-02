/**
 * A hook used for function level state management
 * This hook accepts an initial state value.
 * Returns current state value and a function to update the state
 */
import React, {useState} from 'react';

function UseStateHook(props) {
    let [state, setState] = useState(0);

    return (
        <div>
            <h1> Learning UseState Hook</h1>
            <button onClick={() => setState(++state)}>Increment State</button>
            <p>{state}</p>
        </div>
    );
}

export default UseStateHook;