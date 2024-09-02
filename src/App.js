import './App.css';
import ReactHookForms from "./component/ReactHookForms";

/* Imports needed to use React redux toolkit*/
import {Provider} from 'react-redux';
import {store} from './store/stateStore';
import ReactReduxToolkit from "./component/ReactReduxToolkit";
import ReactRedux from "./component/ReactRedux";
import ReactHooks from "./component/ReactHooks";
import ReactUseMemo from "./component/ReactUseMemo";
import UseReduceHook from "./interviewPrepHooks/UseReduceHook";
import UseStateHook from "./interviewPrepHooks/UseStateHook";
import UseMemoHook from "./interviewPrepHooks/UseMemoHook";
import UseEffectHook from "./interviewPrepHooks/UseEffectHook";
import {RenderProps, PropComponentFunction} from "./interviewPrepHooks/RenderProps";
import UseRefHook from "./interviewPrepHooks/UseRefHook";

function App() {
  return (
    <div className="App">
        {/*Wrap all components that need access to the application state store*/}
        <Provider store={store}>
            {/*<ReactHookForms></ReactHookForms>*/}
            {/*<ReactReduxToolkit></ReactReduxToolkit>*/}

            {/*<ReactRedux></ReactRedux>*/}
            {/*<ReactHooks />*/}
            {/*<ReactUseMemo/>*/}

            <UseReduceHook />
            <UseStateHook/>
            <UseMemoHook />
            <UseEffectHook/>
            <UseRefHook/>

            {/*<RenderProps render={PropComponentFunction}></RenderProps>*/}


        </Provider>
    </div>
  );
}

export default App;
