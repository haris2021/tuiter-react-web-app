import "./index.css"
import {FaCheckCircle} from "react-icons/fa";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) =>
{
     return(
         <div>

             <div className="list-group-item">

                 <div className="row wd-eachrow-postsummary">

                     <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 wd-contentdiv">

                         <span className="wd-content wd-heading1">{post.topic === ' ' ? " " : post.topic}</span>
                         <span className="wd-heading2">{post.userName === ' ' ? " " : post.userName}<FaCheckCircle/>{post.time === ' ' ? " " : post.time}</span>
                         <span className="wd-content wd-heading3">{post.title === ' ' ? " " : post.title}</span>
                         <span className="wd-content wd-heading4">{post.tweets === ' ' ? " " : post.tweets}</span>

                     </div>

                     <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 ">
                         <img className="wd-divimage" src={post.image}/>
                     </div>

                 </div>

             </div>

         </div>
     );
}

export default PostSummaryItem;


