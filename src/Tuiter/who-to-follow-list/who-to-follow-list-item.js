import React from "react";
import './index.css';
import {FaCheckCircle} from "react-icons/fa";

const WhoToFollowListItem = ({who}) =>
{
    return(

        <div>

            <li className="wd-list list-group-item list-group-item-action">

                <div className="row wd-eachrow">

                    <div className="col-xl-3 col-lg-3">
                        <img className="wd-rightcolimg" src={who.avatarIcon} />
                    </div>

                    <div className="col-xl-6 col-lg-5">

                        <span className="wd-username">{who.userName} <FaCheckCircle/></span>
                        <span className="wd-rightcolcontent">@{who.handle}</span>

                    </div>

                    <div className="col-xl-3 col-lg-4">
                        <button type="button" className=" btn btn-primary btn-sm wd-btn">Follow</button>
                    </div>

                </div>

            </li>

        </div>

    );
};


export default WhoToFollowListItem;

