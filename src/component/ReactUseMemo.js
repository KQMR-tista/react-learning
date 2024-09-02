import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

function ReactUseMemo(props) {
    const [slowFunctionValue, setSlowFunctionValue] = useState(null);
    const [fastFunctionValue, setFastFunctionValue] = useState(null);


    const reallySlowFunction = () => {
        setTimeout(() => {
            console.log('slow function')
        }, 200000);
        return <div>slow function</div>;
    }

    const reallyFastFunction = () => {
        console.log('fast function');
        return <div>fast function</div>;
    }


    let memorizedReallySlowFunction = useCallback( () => reallySlowFunction(), [slowFunctionValue]);
    let memorizedReallyFastFunction = useCallback( () => reallySlowFunction(), [fastFunctionValue]);

    // let memorizedReallySlowFunction = useCallback( () => reallySlowFunction(), [v]);
    // let memorizedReallyFastFunction = useCallback( () => reallyFastFunction(), [v])

    return (
        <div>
            <button onClick={() => setSlowFunctionValue(slowFunctionValue + 10)}>Click Slow Here</button>
            <button onClick={() => setFastFunctionValue(fastFunctionValue + 10)}>Click Fast Here</button>
            <div>SLOW FUNCTION VALUE: {memorizedReallySlowFunction}</div>
            <div>FAST FUNCTION VALUE: {memorizedReallyFastFunction}</div>
        </div>
    );
}

export default ReactUseMemo;