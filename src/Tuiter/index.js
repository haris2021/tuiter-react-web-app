import NavigationSidebar from "./navigation-sidebar/index.js"
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";

import Home from "./Home/Home.js";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

function Tuiter() {
    console.log("inside tuiter");
    return(

        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6">

                    <Routes>
                       <Route path="explore" element={<ExploreComponent/>}></Route>
                       <Route path="home" element={<Home/>}></Route>
                   </Routes>

            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>

        </div>



    );
}
export default Tuiter