import React from 'react';
import {Route, Routes, Link, Outlet, useParams} from 'react-router-dom';
import {Button} from "@mui/material";

/**
 * npm install react-router-dom
 * 1. Import 'Router'' into index.js: import { BrowserRouter as Router } from 'react-router-dom';
 * 2. Wrap the <App> component with the 'Router' component:
 *  <Router>
 *         <App />
 *  </Router>
 *
 * import {Route, Routes, Link} from 'react-router-dom';
 */

export function Routing(props) {
    return (
        // path: Relative URL
        // element: The component to render
        <Routes>
            {/*When a URL is activated, the corresponding component is rendered.*/}
            <Route path="/home" element={<HomeComponent/>}></Route>
            <Route path="/about" element={<AboutComponent/>}>
                <Route path=":name" element={<AboutPersonComponent/>} />
            </Route>

            <Route path="/contact" element={<ContactComponent/>}>
                {/*Relative paths to children*/}
                <Route path="HR" element={<ContactHRComponent/>}></Route>
                <Route path="IT" element={<ContactITComponent/>}></Route>
            </Route>
        </Routes>
    );
}

export function NavList(){
    return (
        <ul>
            {/*Button acts as a link, when button is clicked, corresponding URL is activated.*/}
            <Button style={{textDecoration: "none"}} as={Link} to="/home">Home</Button>
            <Button style={{textDecoration: "none"}} as={Link} to="/about">About</Button>
            <Button style={{textDecoration: "none"}} as={Link} to="/contact">Contact</Button>
        </ul>
    )
}

export function HomeComponent() {
    return <h1>Home Component</h1>
}

export function AboutComponent() {
    return (
        <>
            <h1>About Component</h1>
            {/*Used in nested routes. When the nested route is activated,
            the nested component will be rendered where the <Outlet/> is specified.*/}
            <Outlet />
        </>
    )
}

export function AboutPersonComponent(){
    /* Hook that can be used to get the parameters from the URL */
    let params = useParams();
    return (
        <>
            <div>{params.name}</div>
        </>
    );
}

export function ContactComponent(){
    return (
        <>
            <h1>Contact Component</h1>
            {/*Used in nested routes. When the nested route is activated,
            the nested component will be rendered where the <Outlet/> is specified.

            In this case, when the URL is 'contact/IT', the ContactITComponent is rendered here.
            In this case, when the URL is 'contact/HR', the ContactHRComponent is rendered here.
            */}
            <Outlet/>
        </>
    )
}

export function ContactITComponent(){
    return <p>Welcome to IT department</p>

}

export function ContactHRComponent(){
    return <p>Welcome to HR department</p>
}