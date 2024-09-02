import React, {useEffect, useState} from 'react';

/**
 * Class components have lifecycle hooks: componentDidMount, componentDidUpdate, and componentWillUnmount.
 * Functional components: The above lifecycle hooks are all handled by useEffect hook
 */


/**
 * Syntax
 * import { useEffect } from 'react';
 * useEffect(function callMeOnMount(){
 *     // do something
 * }, []);
 */
function UseEffectHook(props) {
    let [val, setVal] = useState(0);
    let [anotherVal, setAnotherVal] = useState(0);

    // When no dependency array is specified. Runs everytime the component is rendered.
    useEffect(() => {
        console.log('run on every render')
    })

    // When empty dependency array is specified. Runs only once the first time the component is mounted.
    useEffect(() => {
        console.log('run on first render only')
    }, []);

    // When dependency array has variables. Runs only when any of the variables in the dependency array changes.
    useEffect(() => {
        console.log('run on \'val\' change only')
    }, [val]);

    // When a return callback function is specified. The code inside it is run when the component unmounts.
    // Ideal place for cleanup
    useEffect(() => {
        return () => {
            setVal(0);
            setAnotherVal(0);
            console.log(val);
            console.log(anotherVal);
        };
    }, []);

    return (
        <>
            <h1> Learning UseEffect Hook</h1>
            <button onClick={() => setVal(val++)}>Click me (Val)</button>
            <button onClick={() => setAnotherVal(val++)}>Click me (AnotherVal)</button>
        </>
    );
}

export default UseEffectHook;