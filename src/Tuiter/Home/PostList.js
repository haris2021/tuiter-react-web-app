import "./index.css"
import ImageOnly from "./ImageOnly.js";
import ImageContent from "./ImageContent.js"
import {FaCheckCircle, FaFileExport, FaGratipay, FaRegComment, FaSync} from "react-icons/fa";

const PostList = ({post} ) =>
{
    return(

        <div className="row wd-entirerowdiv ">

            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                <img className="wd-profile-pic" src={post.img}/>
            </div>

            <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 mt-2">


                <span className="wd-c1-name">{post.name} <FaCheckCircle/></span>
                <span className="wd-content1">{post.username}</span>
                <span className="wd-content1">{post.time}</span>
                <p className="wd-postinformation-para">{post.header} <span className="wd-specialsentance">-> {post.link1}</span></p>

                { post.status  ?  ImageContent(post)  :  ImageOnly(post) }

                { post.thread ? <span>{post.thread}</span> : " "}

                <FaRegComment size={20} className="wd-icons-links"/> <span className="wd-num">22</span>
                <FaSync size={20} className="wd-icons-links"/> <span className="wd-num">20</span>
                <FaFileExport size={20} className="wd-icons-links"/> <span className="wd-num">20</span>
                <FaGratipay size={20} className="wd-icons-links"/> <span className="wd-num">10</span>

            </div>

        </div>

    )
}
export default PostList;
