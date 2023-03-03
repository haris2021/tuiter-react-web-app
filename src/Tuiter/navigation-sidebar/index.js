
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {FaBell, FaBookmark, FaHashtag, FaHome, FaList, FaTwitter, FaUserAlt} from "react-icons/fa";
import {SlEnvolopeLetter} from "react-icons/sl";
import {RiInformationFill} from "react-icons/ri";
import "./index.css"
const NavigationSidebar = () =>
{

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return(

        <div className="list-group mt-2">

            <li className="list-group-item wd-listcolor  ">
               <FaTwitter className="wd-icon"/>
            </li>
            
            <Link to="home"className={` bg-color-red list-group-item list-group-item-action wd-listcolor ${active === 'home' ? 'active' : ''} `}>
                <FaHome className="wd-icon"/><span className="d-none d-xl-inline">Home</span>
            </Link>

            <Link to="explore" className={`list-group-item list-group-item-action list-group-item wd-listcolor ${active === 'Explore' ? 'active' : ''}`}>
                <FaHashtag className="wd-icon"/><span className="d-none d-xl-inline">Explore</span>
            </Link>

            <Link to="notifications" className={`list-group-item list-group-item-action wd-listcolor ${active === 'notifications' ? 'active' : ''}`}>
              <FaBell className="wd-icon"/><span className="d-none d-xl-inline">Notifications</span>
            </Link>

            <Link to="messages"className={`list-group-item list-group-item-action wd-listcolor ${active === 'messages' ? 'active' : ''}`}>
                <SlEnvolopeLetter className="wd-icon"/> <span className="d-none d-xl-inline">Messages</span>
            </Link>

            <a href="index.html"
               className="list-group-item list-group-item-action wd-listcolor ${active === 'bookmarks' ? 'active' : ''}">
                <FaBookmark className="wd-icon"/><span className="d-none d-xl-inline">BookMarks</span>
            </a>

            <a href="#"
               className=" list-group-item list-group-item-action wd-listcolor ${active === 'lists' ? 'active' : ''}">
                <FaList className="wd-icon"/><span className="d-none d-xl-inline">Lists</span>
            </a>

            <a href="../profile.html"
               className=" list-group-item list-group-item-action wd-listcolor ${active === 'profile' ? 'active' : ''}">
               <FaUserAlt className="wd-icon"/><span className="d-none d-xl-inline">Profile</span>
            </a>

            <a className="  list-group-item list-group-item-action wd-listcolor ${active === 'more' ? 'active' : ''}">
                <RiInformationFill className="wd-icon"/><span className="d-none d-xl-inline" href="#">More</span>
            </a>

            <button type="button" className="wd-btn1 btn btn-primary btn-sm">Tweet</button>
        </div>

    )

};


export default NavigationSidebar;