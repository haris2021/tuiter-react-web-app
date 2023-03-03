import React from "react";
import Who from "./who.json"
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import "./index.css"

function WhoToFollowList ( )
{
      return(
              <div>
                  <li className="wd-list wd-firstrow list-group-item list-group-item-action">
                      Who to follow
                  </li>
                  {
                      Who.map( (whoinfo,index) =>

                            <WhoToFollowListItem
                                key={index}
                                who={whoinfo}
                            />
                      )
                  }
              </div>
      );
}

export default WhoToFollowList;



