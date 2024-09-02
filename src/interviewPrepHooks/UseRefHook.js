import React, {useRef} from 'react';

/**
 * Syntax
 * import { useRef } from 'react';
 * const ref = useRef(initialValue);
 */

/**
 * With the use of useRef, we can achieve the same result as document.getElementById('myInput'), but in a more React-friendly way.
 */
function UseRefHook(props) {
    /* Creates ref objects. Can be initialized to any value
    *  Each reference object has a single property 'current': { current: initialValue }
    * */
    let testInpRef = useRef(null);
    let spanRef = useRef(null);


    const focus = () => {
        /*
            Ref allows us to perform the actions available thru DOM API (focus, innerText etc) with React
            The below code does the same thing as: document.getElementById('test-input').focus();
         */
        testInpRef.current.focus();
    }

    const printSpanText = () => {
        /*
            The below code does the same thing as: document.getElementById('test-span').innerText;
         */
        console.log(spanRef.current.innerText)
    }

    return (
        <div>
            <h6>Learning UseRef Hook</h6>
            <label>
                {/*
                When we use <input ref={testInpRef} /> in our React component,
                Once React creates a DOM node for the <input> element, it then assigns a
                reference to this node to testInpRef.current
                */}
                Test input : <input id="test-input" ref={testInpRef} type="text"></input>
            </label>

            <button onClick={focus}>Focus On Input</button>

            <span id="test-span" className='selected' ref={spanRef}>
               Ajith
            </span>

            <button onClick={printSpanText}>Print Span</button>


        </div>
    );
}

export default UseRefHook;