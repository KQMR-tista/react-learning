import React from 'react';

/**
 * Render props is about passing in a function that returns a JSX as a PROP to another function.
 */

/*
    Prop function that returns a JSX
 */
export function PropComponentFunction(data){
    return (
        <>
        <h6>Learning Render Props</h6>
        <div>{data}</div>
        </>
    )

}

/*
    render is a function (that returns a JSX).
    This function is executed and the resulting JSX is returned by the parent function.
    Common convention to call the prop as 'render' but can be called anything.
 */
export function RenderProps({render}) {
   return render('ajith is here');
}
