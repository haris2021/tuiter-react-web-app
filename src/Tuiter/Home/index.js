/*
import PostInfo from "./PostInfo.json";
*/

import React, {useEffect} from "react";


import {useSelector, useDispatch} from "react-redux";
import PostList from "./PostList.js";
import WhatsHappening from "./whats-happening.js";

import {findTuitsThunk} from "../../Service/tuits-thunks.js";

const Centercol = ( ) =>
{
/*
    const Postinfo = useSelector(state => state.tuits);
*/

    const {  tuits , loading} = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    console.log("isnide home");
    return(
           <div>

               {
                   loading && <li className="list-group-item">
                                  Loading...
                              </li>
               }

               <WhatsHappening/>

               {
                   tuits.map( (postdata) =>

                       <PostList key = {postdata._id}
                                 post = {postdata}
                       />

                   )
               }


           </div>
    )
}
export default Centercol;
