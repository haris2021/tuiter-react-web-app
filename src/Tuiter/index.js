import NavigationSidebar from "./navigation-sidebar/index.js"
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";
import ProfileIndex from "./ProfileComponent/ProfileIndex.js";
import Editprofile from "./EditProfile/Editprofile.js";


import Home from "./Home/Home.js";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";



import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";


import whoReducer from "./Reducers/who-reducer.js";
/*
import TuitsReducer from "./Reducers/Tuits-Reducer.js";
*/

import tuitsReducer from "./Tuits/tuits-reducer.js";

import profileReducer from "./ProfileComponent/ProfileReducer.js";

const store = configureStore({
                                 reducer: {who:whoReducer, tuits: tuitsReducer , profile:profileReducer} });



function Tuiter() {

    return(

       <Provider store={store}>

           <div className="row mt-2">

               <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                   <NavigationSidebar active="explore"/>
               </div>

               <div className="col-10 col-md-10 col-lg-7 col-xl-6">

                   <Routes>
                       <Route index element={<ExploreComponent/>}></Route>
                       <Route path="explore" element={<ExploreComponent/>}></Route>
                       <Route path="home" element={<Home/>}></Route>
                       <Route path="profile" element={<ProfileIndex/>}></Route>
                       <Route path="edit-profile" element={<Editprofile/>}></Route>
                       <Route path="/" element={<labs/>}></Route>
                   </Routes>

               </div>

               <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                   <WhoToFollowList/>
               </div>

           </div>

       </Provider>



    );
}
export default Tuiter