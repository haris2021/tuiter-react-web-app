import Assignment6 from "./a6/index.js";

import Nav from "../nav.js"
import {Route, Routes} from "react-router";
import Assignment7 from "./a7/index.js";
import Tuiter from "../Tuiter/index.js"
const Labs = ( ) => {

    console.log("inside labs");

    return(
        <div>

                            <Routes>

                                     <Route path="/" element={<Assignment6/>}> </Route>


                            </Routes>

        </div>
    );
}

export default Labs;
