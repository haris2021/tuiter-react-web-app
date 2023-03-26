import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item.js";
import "./index.css"
import {useSelector} from "react-redux";

function WhoToFollowList ( )
{

      const whoarray = useSelector( (state) => state.who)


      return(

                  <div>
                      <li className="wd-list wd-firstrow list-group-item list-group-item-action">
                          Who to follow
                      </li>
                      {
                          whoarray.map( (whoinfo) =>

                                       <WhoToFollowListItem
                                           key={whoinfo.id}
                                           who={whoinfo}
                                       />
                          )
                      }
                  </div>
      );
}

export default WhoToFollowList;



