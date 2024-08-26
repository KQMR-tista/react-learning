import React from 'react';
import {useForm} from "react-hook-form";

function ReactHookForms(props) {

    //Form field default valuses
    let defValues = {
        fname: 'ajith',
        lname: 'Keerikkattil',
        address: '1 test street',
        zip: '21228'
    };

    /* Code to use React Hook Form */
    /*
        register: Register form fields with the hook using the name prop.
        handleSubmit: Function to call on form submission. Accepts a callback function to with the form data is input
        formstate errors: store the validation errors.
        defaultValues: Accepts an object with default values for the form fields
        watch: Function that lets you subscribe to changes to any form fields
     */
    const {register,
        handleSubmit,
        formState: {errors},
        watch
    } =
        useForm({defaultValues: defValues});

   // console.log(errors);

    //Subscribe to changes to all fields
    console.log(watch());

    //Subscribe to changes to specified fields
    console.log(watch('fname'));


    // Callback function called by handleSubmit function.
    // The data from the registered form fields are passed into the this function
    function submitForm(data){
        console.log(data);
    }

    return (
        <>
            {/*On submit of the form, call the handleSubmit function of the useForm hook. It accepts a call back function to which the*/}
            {/*form data is passed in.*/}
            <form onSubmit={handleSubmit(submitForm)}>
                <h1>Sample Form</h1>

                <div style={{display: 'flex', flexDirection: 'column', maxWidth: '100px', paddingInline: '30px'}}>
                    <div>
                        <label id="fname">First Name</label>

                        <input id="fname" {...register("fname", {
                            required: 'First name field is required',
                            minLength: {
                                value: 5,
                                message: 'First name min length is 5 characters'
                            },
                            maxLength: 12
                        })} type="text"></input>
                        {/*Display error message for validations*/}
                        <span>{errors.fname ? errors.fname.message : null}</span>
                    </div>

                    <label id="lname">Last Name</label>
                    <input id="lname" {...register("lname", {required: true})} type="text"/>

                    <label id="address">Address</label>
                    <input id="address" {...register("address")} type="text"/>

                    <label id="zip">Zip Code</label>
                    <input id="zip" {...register("zip")} type="text"/>
                </div>

                <label>
                    State:
                    <select>
                        <option value="MD">MD</option>
                        <option value="IL">IL</option>
                        <option value="VA">VA</option>
                        <option value="CA">CA</option>
                    </select>
                </label><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}

export default ReactHookForms;