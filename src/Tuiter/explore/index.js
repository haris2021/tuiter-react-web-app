import PostSummaryList from "../post-summary-list/index.js";
import "./index.css"
import {RiSettings3Fill} from "react-icons/ri";
import {FaSearch} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";


const ExploreComponent = ( ) =>
{
    return(
               <div>

                   <div className="row mt-2">

                       <div className="wd-searchrow row">
                           <div className="col-xl-10 col-lg-9 col-md-10 col-sm-9">
                             <FaSearch className="wd-searchicon"/> <input className="wd-searchbox" type="search" placeholder="Search Twitter"/>
                           </div>
                           <div className="col-xl-2 col-lg-3 col-md-2 col-sm-3">
                               <RiSettings3Fill className="wd-gearicon"/>
                           </div>
                       </div>

                   </div>

                   <ul className="nav mb-2 nav-tabs">

                       <li className="nav-item wd-myname">
                           <a className="nav-link active wd-navtop" aria-current="page" href="#">For you</a>
                       </li>
                       <li className="nav-item wd-myname">
                           <a className="nav-link  " href="#">Trending</a>
                       </li>
                       <li className="nav-item wd-myname">
                           <a className="nav-link " href="#">News</a>
                       </li>
                       <li className="nav-item wd-myname ">
                           <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Sports</a>
                       </li>
                       <li className="nav-item wd-myname d-none d-lg-inline ">
                           <a className="d-none d-md-block nav-link" href="#" tabindex="-1" aria-disabled="true">Entertainment</a>
                       </li>
                   </ul>

                   <span className="wd-titlebelowimg">SpaceX's StarShip</span>
                   <img className="wd-rocketimage" src="https://media.cnn.com/api/v1/images/stellar/prod/221208114519-boeing-nasa-sls-rocket-history.jpg?c=original" alt="Rocket image"/>
                   <PostSummaryList/>

               </div>
    );
}

export default ExploreComponent;
