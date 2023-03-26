import PostSummaryItem from "./post-summary-item.js";
import PostInfo from "./PostInfo.json";


import {useSelector} from "react-redux";


const PostSummaryList = ( ) =>
{


    return(

         <div className="list-group" >
             {
                     PostInfo.map( (info) =>

                                     <PostSummaryItem
                                         key = {info.id}
                                         post = {info}
                                     />
                     )
             }
         </div>
    );
}

export default PostSummaryList;

