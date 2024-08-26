import './App.css';
import ReactHookForms from "./component/ReactHookForms";

/* Imports needed to use React redux toolkit*/
import {Provider} from 'react-redux';
import {store} from './store/stateStore';
import ReactReduxToolkit from "./component/ReactReduxToolkit";

function App() {
  return (
    <div className="App">
        {/*Wrap all components that need access to the application state store*/}
        <Provider store={store}>
            <ReactHookForms></ReactHookForms>
            <ReactReduxToolkit></ReactReduxToolkit>
        </Provider>
    </div>
  );
}

export default App;
