import React, {useContext, useMemo, useState} from "react";

/**
 * Function used to memorize a value. It will only re-calculate the value if its dependency array changes.
 */
function UseMemoHook() {
    let [A,  setA] = useState(1);
    let [B,  setB] = useState(2);

    /*
        This function represents an expensive function.
        By default, this function gets executed everytime this component renders i.e.even if the value of 'B' didn't change,
        everytime the component re-renders on the change of 'A'. Cause performance issue
     */
     // let waitAndReturnB = reallySlowFunction(B);

    /*
        Solution: UseMemo to wrap the expensive function so that it will only execute when its input changes.
        In this case, add B to the dependency array of useMemo. This would ensure that only when B changes would
        this function be executed. Any other renders where B does not change would not cause the execution of this function.
     */
   let memoWaitAndReturnB = useMemo(() => reallySlowFunction(B), [B]);

    return (
        <div>
            <h1> Learning UseMemo Hook</h1>

            <button onClick={() => setA(++A)}>Increment A</button>
            <p> Value of A: {A}</p>
            <button onClick={() => setB(++B)}>Increment B</button>
            <p> Value of B: {B}</p>
        </div>
    );
}


/*
    Function to simulate a expensive calculation
 */
const reallySlowFunction = function (seconds) {
    seconds *= Math.random() + 0.5;
    var start = new Date();
    while((new Date() - start) / 1000 < seconds);
    console.log('Executing expensive function');
    return seconds;
}

export default UseMemoHook;