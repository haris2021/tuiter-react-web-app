import React from "react";
import "./index.css"

const ImageContent = ( post ) =>
{
    return(

                        <div>
                        
                                            <div>
                                                  <img  class="wd-img2" src={post.img2}/>
                                           </div>  
            
                                            <div className="wd-imgcontent">
                                            
                                                <h4 className={"wd-imgcontent-heading"}>{post.header}</h4>
                                                <h4 className={"wd-imgcontent-content"}>{post.content}</h4>
                                                <a className="wd-imgcontent-link" href="#"><i className={"fa-solid fa-link"}></i>{post.link}</a>

                                            </div>
                        
                        </div>
                                           
                                   

    );
}

export default ImageContent;