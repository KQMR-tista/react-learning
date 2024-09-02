import React from 'react';

function UseEffectHook(props) {

    sessionStorage.setItem('ajith', 'ajith keerikkattil');
    console.log(sessionStorage.getItem('ajith'))
    return (
        <div></div>
    );
}

export default UseEffectHook;