import PostInfo from "./PostInfo.json";
import PostList from "./PostList.js";
const Centercol = ( ) =>
{
    console.log("isnide home");
    return(
           <div>
               {
                   PostInfo.map( (postdata) =>

                       <PostList key = {postdata.key}
                                 post = {postdata}
                       />

                   )
               }
           </div>
    )
}
export default Centercol;
