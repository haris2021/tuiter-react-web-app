import React from "react";
import {useSelector} from "react-redux";
import Hello from "./Reducers/hello";


const HelloReduxExampleComponent = ( ) =>
{
    const message  = useSelector( (state) => state.Hello.message);

    return(
            <div>
                <h1>{message}</h1>
            </div>
    );
}

export default HelloReduxExampleComponent