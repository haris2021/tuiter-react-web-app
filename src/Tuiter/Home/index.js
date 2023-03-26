/*
import PostInfo from "./PostInfo.json";
*/


import {useSelector} from "react-redux";
import PostList from "./PostList.js";
import WhatsHappening from "./whats-happening.js";

const Centercol = ( ) =>
{
    const Postinfo = useSelector(state => state.tuits);

    console.log("isnide home");
    return(
           <div>
               <WhatsHappening/>
               {
                   Postinfo.map( (postdata) =>

                       <PostList key = {postdata._id}
                                 post = {postdata}
                       />

                   )
               }
           </div>
    )
}
export default Centercol;
