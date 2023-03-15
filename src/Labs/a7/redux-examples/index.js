import React from "react";


import HelloReduxExampleComponent from "./hello-redux-example-component.js";
import Hello from "./Reducers/hello.js";
import Todo from "./Reducers/todos-reducer.js"
import ToDos from  "./todos-component.js"


/*
import {createStore} from "redux";
*/
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux"


/*
const store = createStore(Hello);
*/

const store = configureStore({reducer: {Hello, Todo}});


const ReduxExamples = () => {
    return(

        <Provider store={store}>

            <div>
                <h2>Redux Examples</h2>
                <ToDos/>
                <HelloReduxExampleComponent/>
            </div>

        </Provider>

    );
};

export default ReduxExamples;