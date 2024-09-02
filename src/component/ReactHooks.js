import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Switch, TextField} from "@mui/material";

function ReactHooks(props) {
    const [value, setValue] = useState(false);
    let switchRef = useRef();
    let inpRef = useRef(null);

    const getRef = (() => {
        let s = switchRef.current?.value;

        if(switchRef.current?.value){
            return inpRef.current?.focus();
        }else{
            return switchRef.current?.focus();
        }

    });

    const  memoRef = useMemo(() => getRef(), [value]);

    return (
        <div>
            <p>Current: {value.toString()}</p>
            <Switch  inputRef={switchRef} value={value} onChange={(e) => {
                setValue(e.target.checked);
            }}/>

            <TextField inputRef={inpRef} id="outlined-basic" label="Outlined" variant="outlined" />
        </div>

);
}

export default ReactHooks;