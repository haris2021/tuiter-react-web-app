import "./index.css"
import ImageContent from "./ImageContent.js"
import {useDispatch} from "react-redux";
import {
    FaCheckCircle,
    FaRegComment,
    FaRetweet,
} from "react-icons/fa";


import {FiHeart, FiUpload} from "react-icons/fi";
import {GrFormClose} from "react-icons/gr";

import {deltweet,IncreaseLikes,DecreaseLikes} from "../Tuits/tuits-reducer";
import {useState} from "react";

const PostList = ({post} ) =>
{
    const dispatch = useDispatch();
    const[liked, setliked] = useState(false);

    const deletetweet = (id) =>{
        console.log(id);
        dispatch(deltweet(id));
    }

    const increaselikes= (id) =>
    {
        console.log("likes increases for"+id);
        if(liked)
        {
            dispatch(DecreaseLikes(id));
            setliked(false);
        }
        else
        {
            dispatch(IncreaseLikes(id));
            setliked(true);
        }

    }


    return(

        <div className="row wd-entirerowdiv ">

            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                <img className="wd-profile-pic" src={post.image}/>
            </div>

            <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 mt-2">


                <span className="wd-c1-name">{post.topic} <FaCheckCircle/></span>
                <span className="wd-content1">{post.userName}</span>
                <span className="wd-content1">{post.time}</span>
                <GrFormClose className="wd-deleteicon" onClick={()=>{deletetweet(post._id)}}/>
                <p className="wd-postinformation-para">{post.tuit} </p>

                { post.status  ?  ImageContent(post)  : '' }

                <FaRegComment size={15} className="wd-icons-links"/> <span className="wd-num">{post.replies}</span>
                <FaRetweet size={20} className="wd-icons-links"/> <span className="wd-num">{post.retuits}</span>
                <FiHeart size={15}  className={`wd-icons-links ${liked ? 'wd-icons-links-liked' : 'wd-icons-links '}`}
                         onClick={()=>{increaselikes(post._id)}} /> <span className="wd-num">{post.likes}</span>
                <FiUpload size={15} className="wd-icons-links"/>

            </div>

        </div>

    )
}
export default PostList;
