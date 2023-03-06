import PostSummaryItem from "./post-summary-item.js";
import PostInfo from "./PostInfo.json";

const PostSummaryList = ( ) =>
{
    return(

         <div className="list-group" >
             {
                     PostInfo.map( (info,index) =>

                                     <PostSummaryItem
                                         index = {info.id}
                                         post = {info}
                                     />
                     )
             }
         </div>
    );
}

export default PostSummaryList;

